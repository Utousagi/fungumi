package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.model.ActorInfoResult;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.model.WorkParticipateBean;
import uto.fungumi.backend.service.ActorService;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/actor")
public class ActorController {
    @Resource
    private ActorService actorService;
    @GetMapping("/actorInfo")
    public BaseResult<ActorInfoResult> getActorInfo( @RequestParam Integer workId){
        BaseResult<ActorInfoResult> baseResult = new BaseResult<>();
        var actor = actorService.getActorByWorkId(workId);
        if(actor == null){
            baseResult.setSuccess(false);
            baseResult.setMessage("数据库中不存在与该作品有关的角色");
            baseResult.setData(null);

            return baseResult;
        }
        baseResult.setData(actor);
        baseResult.setSuccess(true);
        return baseResult;
    }
}
