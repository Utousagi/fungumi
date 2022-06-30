package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.aop.login.Login;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.model.CommentResult;
import uto.fungumi.backend.service.CommentService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Resource
    CommentService commentService;

    @PostMapping("/thumbUp")
    @Login
    public BaseResult<String> changeThumbStatus(Integer commentId) {
        BaseResult<String> result = new BaseResult<>();
        commentService.changeThumbStatus(commentId, result);
        return result;
    }

    @PostMapping("/add")
    @Login
    public BaseResult<CommentResult> addComment(@RequestParam Integer workId,
                                                @RequestParam String content,
                                                @RequestParam Integer score) {
        var res = commentService.addComment(workId, content, score);

        return new BaseResult<>(true, "评论成功", res);
    }
}
