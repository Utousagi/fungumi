package uto.fungumi.backend.service;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import uto.fungumi.backend.dao.CommentDao;
import uto.fungumi.backend.dao.ThumbUpDao;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.ThumbUp;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.model.CommentResult;
import uto.fungumi.backend.utils.DateFormatUtil;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class CommentService {

    @Resource
    private WorkDao workDao;

    @Resource
    ThumbUpDao thumbUpDao;

    @Resource
    CommentDao commentDao;

    @Transactional
    public CommentResult addComment(Integer workId, String content, Integer score) {

        var comment = Comment.builder()
                .content(content)
                .score(score)
                .likes(0)
                .time(new Date())
                .user((User) SecurityUtils.getSubject().getPrincipal())
                .work(Work.builder().id(workId).build())
                .build();
        comment = commentDao.save(comment);
        workDao.updateScore(workId, score.doubleValue());
        return new CommentResult(comment.getId(), comment.getUser().getId(), comment.getUser().getUsername(),
                comment.getUser().getAvatar(), comment.getScore(), comment.getWork().getId(), comment.getWork().getTitle(),
                comment.getContent(), DateFormatUtil.standardFormat(comment.getTime()), false, comment.getLikes());
    }

    @Transactional
    public void changeThumbStatus(Integer commentId, BaseResult<String> result) {
        User userNow = ((User) SecurityUtils.getSubject().getPrincipal());
        int userId = userNow.getId();
        int type;
        ThumbUp thumbUp = thumbUpDao.findByCommentIdAndUserId(commentId, userId);
        if (thumbUp == null) {
            User u = new User();
            u.setId(userId);
            Comment c = new Comment();
            c.setId(commentId);
            thumbUp = new ThumbUp();
            thumbUp.setUser(u);
            thumbUp.setComment(c);
            thumbUp.setType(1);
            type = 1;
        } else {
            type = thumbUp.getType() == 1 ? 0 : 1;
            thumbUp.setType(type);
        }
        Comment comment = commentDao.findById(commentId).get();
        comment.setLikes(comment.getLikes() + (type == 1 ? 1 : -1));
        commentDao.save(comment);
        thumbUpDao.save(thumbUp);

        result.construct(true, "点赞成功");
    }
}
