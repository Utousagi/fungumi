package uto.fungumi.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.CommentDao;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.CommentScoreBean;
import uto.fungumi.backend.model.WorkInfoResult;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Service
@Slf4j
public class WorkService {
    @Resource
    private WorkDao workDao;
    @Resource
    private CommentDao commentDao;

    public WorkInfoResult checkWorkInfo(Integer work_id){
        Optional<Work> byId = workDao.findById(work_id);
        if(byId.isPresent()) {
            Work work = byId.get();     //差(Actor、CommentPage、scoreBeanList) √ 、拓展Map字段（info）、tagList √
        }
        Pageable pageable = PageRequest.of(0,10, Sort.by(Sort.Direction.DESC, "time"));
        Page<Comment> commentPage = commentDao.findByWorkId(work_id, pageable);
        List<CommentScoreBean> scoreBeans = commentDao.getCommentByWorkId(work_id);


        return null;
    }

}
