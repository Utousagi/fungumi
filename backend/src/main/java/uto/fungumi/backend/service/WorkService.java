package uto.fungumi.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uto.fungumi.backend.dao.CommentDao;
import uto.fungumi.backend.dao.ThumbUpDao;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Actor;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.*;

import javax.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Slf4j
public class WorkService {
    @Resource
    private WorkDao workDao;
    @Resource
    private CommentDao commentDao;
    @Resource
    private ThumbUpDao thumbUpDao;

    public void getWorkInfo(Integer work_id, BaseResult<WorkInfoResult> result){

        Optional<Work> byId = workDao.findById(work_id);
        Work work = new Work();
        if(byId.isPresent()) {
            work = byId.get();     //差(Actor、CommentPage、scoreBeanList) √ 、拓展Map字段（info）、tagList √
        }

        Pageable pageable = PageRequest.of(0,10, Sort.by(Sort.Direction.DESC, "time"));
        Page<Comment> commentPage = commentDao.findByWorkId(work_id, pageable);

        CommentBeanPage commentBeanPage = new CommentBeanPage();
        commentBeanPage.setCommentBeanList(commentPage.getContent().stream().map(comment -> {
            int userId = ((User)(SecurityUtils.getSubject().getPrincipal())).getId();
            CommentBean commentBean = new CommentBean(comment.getId(), comment.getUser().getId(), comment.getUser().getAvatar(), comment.getScore(), comment.getContent(), comment.getTime(), comment.getLikes(), thumbUpDao.existsByCommentIdAndUserId(comment.getId(),userId));
            return commentBean;
        }).collect(Collectors.toList()));
        commentBeanPage.setElement(commentPage.getNumberOfElements());

        List<CommentScoreBean> scoreBeans = commentDao.getCommentByWorkId(work_id);

        //TODO：拓展Map字段（info）=> mongodb
        Map<String, String> info = new HashMap<>();

        Set<ActorBean> actorBeanSet = new HashSet<>();
        for (Actor actor : work.getActors()) {
            ActorBean actorBean = new ActorBean();
            BeanUtils.copyProperties(actor,actorBean);
            actorBeanSet.add(actorBean);
        }

        WorkInfoResult workInfoResult = WorkInfoResult.builder()
                .actor(actorBeanSet)
                .avgScore(work.getScore())
                .workInfo(info)
                .workId(work_id)
                .workTitle(work.getTitle())
                .workProfile(work.getProfile())
                .commentBeanPage(commentBeanPage)
                .scoreMap(scoreBeans)
                .tag(work.getTags())
                .build();
        result.construct(true,"获取作品详情信息成功", workInfoResult);
    }


    @Transactional
    public MainPageResult displayMainPage() {
        var mainPageResult = new MainPageResult();
        mainPageResult.setAnime(workDao.limitByCategory("anime").stream().map(MainPageWorkResult::new).collect(Collectors.toList()));
        mainPageResult.setNovel(workDao.limitByCategory("novel").stream().map(MainPageWorkResult::new).collect(Collectors.toList()));
        mainPageResult.setGame(workDao.limitByCategory("game").stream().map(MainPageWorkResult::new).collect(Collectors.toList()));
        mainPageResult.setMusic(workDao.limitByCategory("music").stream().map(MainPageWorkResult::new).collect(Collectors.toList()));
        return mainPageResult;
    }

    public Page<WorkSimpleResult> pageByCategory(String category, String tag, String keyword, Pageable pageable) {
        keyword = keyword == null ? "%" : "%" + keyword + "%";
        Page<Work> works;
        if(tag == null) {
            works = workDao.findByCategoryAndTitleLike(category, keyword, pageable);
        } else {
            works = workDao.findByCategoryAndTag(category, tag, keyword, pageable);
        }
        return works.map(WorkSimpleResult::new);
    }

}
