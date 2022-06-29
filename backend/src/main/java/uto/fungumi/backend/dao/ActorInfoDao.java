package uto.fungumi.backend.dao;

import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.ActorInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

@Repository
public interface ActorInfoDao extends MongoRepository<ActorInfo,String> {
    ActorInfo getAllByActorId(Integer actorId);
}
