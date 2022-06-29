package uto.fungumi.backend.service;

import org.apache.shiro.SecurityUtils;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.CommentDao;
import uto.fungumi.backend.dao.FavoriteDao;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.entity.Favorite;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.BaseResult;

import javax.annotation.Resource;

@Service
public class FavoriteServie {

    @Resource
    FavoriteDao favoriteDao;

    @Resource
    WorkDao workDao;

    public void addFavorite(Integer workId, Integer type, BaseResult<String> result) {
        User user = (User) SecurityUtils.getSubject().getPrincipal();
        if (user == null) {
            result.construct(false, "请先登录");
            return;
        }
        Work work = workDao.findById(workId).get();
        if (work == null) {
            result.construct(false, "作品不存在");
            return;
        }
        int add=0;
        Favorite favorite = favoriteDao.findByWorkIdAndUserId(workId, user.getId());
        if (favorite == null) {
            favorite = new Favorite();
            work.setId(workId);
            favorite.setWork(work);
            favorite.setUser(user);
            favorite.setType(type);
            add = type!=0 ? 1 :0;
        } else {
            add -= favorite.getType()!=0 ? 1 : 0;
            add += type!=0 ? 1 : 0;
            favorite.setType(type);
        }
        favoriteDao.save(favorite);
        work.setFavoritePerson(work.getFavoritePerson()+add);
        workDao.save(work);
        result.construct(true, "操作成功");
    }
}
