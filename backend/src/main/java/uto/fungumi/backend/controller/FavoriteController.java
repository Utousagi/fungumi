package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.FavoriteService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/favorite")
public class FavoriteController {
    @Resource
    FavoriteService favoriteService;

    @PostMapping("/update")
    public BaseResult<String> addFavorite(Integer workId,Integer type) {
        BaseResult<String> result = new BaseResult<>();
        favoriteService.addFavorite(workId, type, result);
        return result;
    }

}
