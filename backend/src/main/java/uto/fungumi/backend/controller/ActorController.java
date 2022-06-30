package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.model.ActorInfoResult;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.ActorService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/actor")
public class ActorController {
    @Resource
    private ActorService actorService;
    @GetMapping("/actorInfo")
    public BaseResult<ActorInfoResult> getActorInfo( @RequestParam Integer workId){
        var actor = actorService.getActorByWorkId(workId);
        if(actor == null){
            return new BaseResult<>(false, "数据库中不存在与该作品有关的角色");
        }
        return new BaseResult<>(true, "获取成功", actor);
    }
}
