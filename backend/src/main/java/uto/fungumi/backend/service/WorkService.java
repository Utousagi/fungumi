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
import uto.fungumi.backend.dao.*;
import uto.fungumi.backend.entity.*;
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
    @Resource
    private WorkExtendsDao workExtendsDao;

    @Resource
    private FavoriteService favoriteService;

    @Resource
    private ActorDao actorDao;

    public void getWorkInfo(Integer work_id, BaseResult<WorkInfoResult> result) {

        Optional<Work> byId = workDao.findById(work_id);
        Work work;
        if (byId.isPresent()) {
            work = byId.get();     //差(Actor、CommentPage、scoreBeanList) √ 、拓展Map字段（info）、tagList √
        }
        else {
            result.construct(false,"作品id查找失败！");
            return;
        }

        Pageable pageable = PageRequest.of(0, 5, Sort.by(Sort.Direction.DESC, "time"));
        Page<Comment> commentPage = commentDao.findByWorkId(work_id, pageable);
        CommentBeanPage commentBeanPage = new CommentBeanPage();
        commentBeanPage.setComments(pageRelatedComments(work_id, pageable).getContent());
        commentBeanPage.setElement(commentPage.getNumberOfElements());

        List<CommentScoreBean> scoreBeans = commentDao.getCommentByWorkId(work_id);

        //TODO：拓展Map字段（info）=> mongodb
        WorkExtends byWorkId = workExtendsDao.findByWorkId(work_id);
        Map<String, String> params = new HashMap<>();
        if (byWorkId != null){
            log.info(byWorkId.toString());
            params = byWorkId.getParams();
        }
        else log.info("获取作品param信息失败！");

        Set<ActorBean> actorBeanSet = new HashSet<>();
        for (Actor actor : work.getActors()) {
            ActorBean actorBean = new ActorBean();
            BeanUtils.copyProperties(actor, actorBean);
            actorBeanSet.add(actorBean);
        }

        Set<TagResult> tagResultSet = new HashSet<>();
        for (Tag tag : work.getTags()) {
            TagResult tagResult = new TagResult();
            BeanUtils.copyProperties(tag, tagResult);
            tagResultSet.add(tagResult);
        }

        int favoriteStatus = favoriteService.getFavoriteType(work_id);

        WorkInfoResult workInfoResult = WorkInfoResult.builder()
                .actor(actorBeanSet)
                .avgScore(work.getScore())
                .workParams(params)
                .workId(work_id)
                .workImage(work.getPicture())
                .category(work.getCategory())
                .favoriteStatus(favoriteStatus)
                .workTitle(work.getTitle())
                .workProfile(work.getProfile())
                .commentBeanPage(commentBeanPage)
                .scoreMap(scoreBeans)
                .tagResults(tagResultSet)
                .build();
        result.construct(true, "获取作品详情信息成功", workInfoResult);
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

    public Page<CommentResult> pageRelatedComments(Integer workId, Pageable pageable) {
        var subject = SecurityUtils.getSubject();
        var user = (User) subject.getPrincipal();
        var userId = user == null ? null : user.getId();
        return commentDao.pageByWorkId(workId, userId, pageable);
    }

    public List<ActorSimpleResult> listRelatedActors(Integer workId, Actor.ActorRole role) {
        return actorDao.listByWorkId(workId, role);
    }

}
