package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.aop.login.Login;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.FavoriteService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/favorite")
public class FavoriteController {
    @Resource
    FavoriteService favoriteService;

    @PostMapping("/update")
    @Login
    public BaseResult<Void> addFavorite(Integer workId,Integer type) {
        BaseResult<Void> result = new BaseResult<>();
        favoriteService.addFavorite(workId, type, result);
        return result;
    }

}
