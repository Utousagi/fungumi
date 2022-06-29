package uto.fungumi.backend.service;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
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

    public void changeThumbStatus(Integer commentId, BaseResult<String> result) {
        User userNow = ((User) SecurityUtils.getSubject().getPrincipal());
        if (userNow == null) {
            result.construct(false, "请先登录");
            return;
        }
        int userId = userNow.getId();
        ThumbUp thumbUp = thumbUpDao.findByCommentIdAndUserId(commentId, userId);
        if (thumbUp == null) {
            User u = new User();
            u.setId(userId);
            Comment c = new Comment();
            c.setId(commentId);
            thumbUp = new ThumbUp();
            thumbUp.setUser(u);
            thumbUp.setComment(c);
            thumbUp.setStatus("1");
        } else {
            thumbUp.setStatus(thumbUp.getStatus().equals("1") ? "0" : "1");
        }
        thumbUpDao.save(thumbUp);

        result.construct(true, "点赞成功");
    }
}
