package uto.fungumi.backend.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.entity.ThumbUp;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.CommentService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/comment")
public class CommentController {

    @Resource
    CommentService commentService;

    @PostMapping("/thumbUp")
    public BaseResult<String> changeThumbStatus(Integer commentId) {
        BaseResult<String> result = new BaseResult<>();
        commentService.changeThumbStatus(commentId, result);
        return result;
    }
}
