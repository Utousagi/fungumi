package uto.fungumi.backend.service;

import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.ActorDao;
import uto.fungumi.backend.dao.ActorExtendsDao;
import uto.fungumi.backend.model.ActorInfoResult;
import uto.fungumi.backend.model.WorkParticipateBean;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;

@Service
public class ActorService {
    @Resource
    private ActorDao actorDao;
    @Resource
    private ActorExtendsDao actorExtendsDao;

    public ActorInfoResult getActorByWorkId(Integer workId){
        ActorInfoResult actor = actorDao.getActorByWorkId(workId);
        if(actor != null){
            List<WorkParticipateBean> work = actorDao.getWorkByActorId(actor.getId());
            actor.setWorks(work);
            var actorExtends = actorExtendsDao.findByActorId(actor.getId());
            actorExtends.ifPresentOrElse((ext) -> actor.setParams(ext.getParams()), () -> actor.setParams(new HashMap<>()));
        }
        return actor;
    }
}
