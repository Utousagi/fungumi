package uto.fungumi.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import uto.fungumi.backend.dao.*;
import uto.fungumi.backend.model.*;
import uto.fungumi.backend.service.UserInfoService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/userInfo")
@Slf4j
public class UserInfoController {

    @Resource
    UserDao userDao;

    @Resource
    CommentDao commentDao;

    @Resource
    ThumbUpDao thumbUpDao;

    @Resource
    WorkDao workDao;

    @Resource
    FavoriteDao favoriteDao;

    @Resource
    UserInfoService userInfoService;

    @GetMapping("/info")
    public BaseResult<UserInfoResult> getUserInfo(@RequestParam Integer id) {
        BaseResult<UserInfoResult> result = new BaseResult<UserInfoResult>();
        userInfoService.getUserInfo(id, result);
        return result;
    }

    @GetMapping("/likes")
    public BaseResult<CommentPage> getUserLikes(@RequestParam Integer id, @RequestParam Integer page) {
        BaseResult<CommentPage> result = new BaseResult<CommentPage>();
        userInfoService.getUserLikes(id, page, 10, result);
        return result;
    }

    @GetMapping("/comments")
    public BaseResult<CommentPage> getUserComments(@RequestParam Integer id, @RequestParam Integer page) {
        BaseResult<CommentPage> result = new BaseResult<CommentPage>();
        userInfoService.getUserComments(id, page, 10, result);
        return result;
    }

    @GetMapping("/favorite")
    public BaseResult<FavouritePage> getUserFavorite(@RequestParam Integer id, @RequestParam Integer page) {
        BaseResult<FavouritePage> result = new BaseResult<FavouritePage>();
        userInfoService.getUserFavorite(id, page, 10, result);
        return result;
    }

    @GetMapping("/mainPage")
    public BaseResult<UserPageResult> getMainPage(@RequestParam Integer id) {
        BaseResult<UserPageResult> result = new BaseResult<UserPageResult>();
        userInfoService.getMainPage(id, result);
        return result;
    }
}
