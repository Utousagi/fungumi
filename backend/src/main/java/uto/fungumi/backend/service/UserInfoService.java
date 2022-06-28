package uto.fungumi.backend.service;

import org.apache.shiro.SecurityUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.ThumbUpDao;
import uto.fungumi.backend.dao.CommentDao;
import uto.fungumi.backend.dao.FavoriteDao;
import uto.fungumi.backend.dao.UserDao;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.*;

import javax.annotation.Resource;
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
    FavoriteDao favoriteDao;

    public void getUserInfo(Integer id, BaseResult result) {
        UserInfoResult info = userDao.getUserInfoById(id);
        result.construct(true, "获取用户信息成功", info);
    }

    public void getUserLikes(Integer id, Integer page, Integer pageSize,BaseResult<CommentPage> result) {
        int userId = ((User) SecurityUtils.getSubject().getPrincipal()).getId();
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.DESC, "time");
        Page<Comment> comments = commentDao.findCommentUserLikes(id, pageable);
        CommentPage commentPage = new CommentPage();
        commentPage.setComments(comments.getContent().stream().map( c -> {
            CommentResult commentResult = new CommentResult( c.getId(), c.getUserId(), c.getWorkId(), c.getScore(), c.getContent(), thumbUpDao.existsByCommentIdAndUserId(c.getId(),userId), c.getLikes());
            return commentResult;
        }).collect(Collectors.toList()));
        commentPage.setElements(comments.getNumberOfElements());
        result.construct(true, "获取用户点赞信息成功", commentPage);
    }

    public void getUserComments(Integer id, Integer page, Integer pageSize,BaseResult<CommentPage> result) {
        int userId = ((User)SecurityUtils.getSubject().getPrincipal()).getId();
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.DESC, "time");
        Page<Comment> comments = commentDao.findAllCommentByUserId(id, pageable);
        CommentPage commentPage = new CommentPage();
        commentPage.setComments(comments.getContent().stream().map( c -> {
            CommentResult commentResult = new CommentResult( c.getId(), c.getUserId(), c.getWorkId(), c.getScore(), c.getContent(), thumbUpDao.existsByCommentIdAndUserId(c.getId(),userId), c.getLikes());
            return commentResult;
        }).collect(Collectors.toList()));
        commentPage.setElements(comments.getNumberOfElements());
        result.construct(true, "获取用户评论信息成功", commentPage);
    }

    public void getUserFavorite(Integer id, Integer page, Integer pageSize,BaseResult<FavouritePage> result) {
        int userId = ((User)SecurityUtils.getSubject().getPrincipal()).getId();
        boolean isSelf = userId == id;
        Pageable pageable = PageRequest.of(page, pageSize, Sort.Direction.DESC, "id");
        Page<Work> works = workDao.findWorkUserFavorites(id, pageable);
        FavouritePage favouritePage = new FavouritePage();
        favouritePage.setWorks(works.getContent().stream().map( w -> {
            int type;
            if (!isSelf) {
                type = 0;
            } else {
                type = favoriteDao.findByWorkIdAndUserId(w.getId(), userId).getType();
            }
            WorkInfo workResult = new WorkInfo( w.getId(), w.getTitle(), w.getProfile(), w.getPicture(), w.getCategory(), w.getScore(), w.getRatePerson(), type);
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
        getUserLikes(id, 1, 5,commentResult);
        page.setLikes(commentResult.getData().getComments());

        BaseResult<CommentPage> commentResult2 = new BaseResult<>();
        getUserComments(id, 1, 5,commentResult2);
        page.setComments(commentResult2.getData().getComments());

        BaseResult<FavouritePage> favouriteResult = new BaseResult<>();
        getUserFavorite(id, 1, 5,favouriteResult);
        page.setFavorites(favouriteResult.getData().getWorks());

        result.construct(true, "获取用户主页信息成功", page);
    }
}
