package uto.fungumi.backend.service;

import org.apache.shiro.SecurityUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.*;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.ThumbUp;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.*;

import javax.annotation.Resource;
import java.text.DateFormat;
import java.util.stream.Collectors;

@Service
public class UserInfoService {

    @Resource
    UserDao userDao;

    @Resource
    CommentDao commentDao;

    @Resource
    ThumbUpDao thumbUpDao;

    @Resource
    WorkDao workDao;

    @Resource
    FavoriteServie favoriteServie;

    public void getUserInfo(Integer id, BaseResult result) {
        UserInfoResult info = userDao.getUserInfoById(id);
        if (info== null) {
            result.construct(false, "用户不存在");
            return;
        }
        result.construct(true, "获取用户信息成功", info);
    }

    public void getUserLikes(Integer id, Integer page, Integer pageSize,BaseResult<CommentPage> result) {
        User userNow = ((User) SecurityUtils.getSubject().getPrincipal());
        int userId = userNow==null? 0 : userNow.getId();

        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.DESC, "time");
        Page<Comment> comments = commentDao.findCommentUserLikes(id, pageable);
        CommentPage commentPage = new CommentPage();
        commentPage.setReviews(comments.getContent().stream().map(c -> {
            User user = userDao.findById(c.getUser().getId()).get();
            Work work = workDao.findById(c.getWork().getId()).get();
            DateFormat format = new java.text.SimpleDateFormat("yyyy-MM-dd");
            ThumbUp thumbUp = thumbUpDao.findByCommentIdAndUserId(c.getId(), userId);
            boolean hasLike = thumbUp != null && thumbUp.getType() == 1;
            return new CommentResult(c.getId(), user.getId(), user.getUsername(), user.getAvatar(), c.getScore(), work.getId(), work.getTitle(), c.getContent(), format.format(c.getTime()), hasLike, c.getLikes());
        }).collect(Collectors.toList()));
        commentPage.setTotal(comments.getNumberOfElements());
        result.construct(true, "获取用户点赞信息成功", commentPage);
    }

    public void getUserComments(Integer id, Integer page, Integer pageSize,BaseResult<CommentPage> result) {
        User userNow = ((User) SecurityUtils.getSubject().getPrincipal());
        int userId = userNow==null? 0 : userNow.getId();

        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.DESC, "time");
        Page<Comment> comments = commentDao.findAllCommentByUserId(id, pageable);
        CommentPage commentPage = new CommentPage();
        commentPage.setReviews(comments.getContent().stream().map(c -> {
            User user = userDao.findById(c.getUser().getId()).get();
            Work work = workDao.findById(c.getWork().getId()).get();
            DateFormat format = new java.text.SimpleDateFormat("yyyy-MM-dd");
            ThumbUp thumbUp = thumbUpDao.findByCommentIdAndUserId(c.getId(), userId);
            boolean hasLike = thumbUp != null && thumbUp.getType() == 1;
            CommentResult commentResult = new CommentResult(c.getId(), user.getId(), user.getUsername(), user.getAvatar(), c.getScore(), work.getId(), work.getTitle(), c.getContent(), format.format(c.getTime()), hasLike, c.getLikes());
            return commentResult;
        }).collect(Collectors.toList()));
        commentPage.setTotal(comments.getNumberOfElements());
        result.construct(true, "获取用户评论信息成功", commentPage);
    }

    public void getUserFavorite(Integer id, Integer page, Integer pageSize,BaseResult<FavouritePage> result) {
        User userNow = ((User) SecurityUtils.getSubject().getPrincipal());
        int userId = userNow==null? 0 : userNow.getId();
        boolean isSelf = userId == id;

        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.DESC, "id");
        Page<Work> works = workDao.findWorkUserFavorites(id, pageable);
        FavouritePage favouritePage = new FavouritePage();
        favouritePage.setWorks(works.getContent().stream().map( w -> {
            int type = favoriteServie.getFavoriteType(w.getId());
            WorkAbstract workResult = new WorkAbstract( w.getId(), w.getTitle(), w.getProfile(), w.getPicture(), w.getCategory(), w.getScore(), w.getRatePerson(),  type);
            return workResult;
        }).collect(Collectors.toList()));
        favouritePage.setElements(works.getNumberOfElements());
        result.construct(true, "获取用户收藏信息成功", favouritePage);
    }

    public void getMainPage(Integer id, BaseResult<UserPageResult> result) {
        UserPageResult page = new UserPageResult();
        page.setId(id);
        page.setDescription(userDao.getUserById(id).getDescription());

        BaseResult<CommentPage> commentResult = new BaseResult<>();
        getUserLikes(id, 0, 5,commentResult);
        page.setLikes(commentResult.getData().getReviews());

        BaseResult<CommentPage> commentResult2 = new BaseResult<>();
        getUserComments(id, 0, 5,commentResult2);
        page.setComments(commentResult2.getData().getReviews());

        BaseResult<FavouritePage> favouriteResult = new BaseResult<>();
        getUserFavorite(id, 0, 5,favouriteResult);
        page.setFavorites(favouriteResult.getData().getWorks());

        result.construct(true, "获取用户主页信息成功", page);
    }

    public void updateDescription(String description, BaseResult<String> result) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user == null) {
            result.construct(false, "请先登录");
            return;
        }
        user.setDescription(description);
        userDao.save(user);
        result.construct(true, "更新用户描述成功");
    }

    public void updateAvatar(String avatar, BaseResult<String> result) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user == null) {
            result.construct(false, "请先登录");
            return;
        }
        user.setAvatar(avatar);
        userDao.save(user);
        result.construct(true, "更新用户头像成功");
    }
}
