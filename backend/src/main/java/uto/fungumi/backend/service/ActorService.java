package uto.fungumi.backend.service;

import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.ActorDao;
import uto.fungumi.backend.dao.ActorInfoDao;
import uto.fungumi.backend.entity.ActorInfo;
import uto.fungumi.backend.model.ActorInfoResult;
import uto.fungumi.backend.model.WorkParticipateBean;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ActorService {
    @Resource
    private ActorDao actorDao;
    @Resource
    private ActorInfoDao actorInfoDao;

    public ActorInfoResult getActorByWorkId(Integer workId){
        ActorInfoResult actor = actorDao.getActorByWorkId(workId);
        try {
            List<WorkParticipateBean> work = actorDao.getWorkByActorId(actor.getId());
            actor.setWorks(work);
            ActorInfo actorInfo = actorInfoDao.getAllByActorId(actor.getId());
            Map<String,String[]> params = new HashMap<>();
            params.put("alias",actorInfo.getAlias());
            params.put("voiceActor", actorInfo.getVoiceActor());
            actor.setParams(params);
            return actor;
        }
        catch (NullPointerException exception){
            return null;
        }
    }
}
