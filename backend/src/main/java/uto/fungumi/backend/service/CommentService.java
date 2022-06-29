package uto.fungumi.backend.service;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.CommentDao;
import uto.fungumi.backend.dao.ThumbUpDao;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.ThumbUp;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;

import javax.annotation.Resource;

@Service
public class CommentService {

    @Resource
    ThumbUpDao thumbUpDao;

    @Resource
    CommentDao commentDao;

    public void changeThumbStatus(Integer commentId, BaseResult<String> result) {
        User userNow = ((User) SecurityUtils.getSubject().getPrincipal());
        if (userNow == null) {
            result.construct(false, "请先登录");
            return;
        }
        int userId = userNow.getId();
        int type ;
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
            type=1;
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
