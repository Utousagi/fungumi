package uto.fungumi.backend.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.ActorExtends;

import java.util.Optional;

/**
 * @author uto
 * @date 2022/6/29
 * @description
 */
@Repository
public interface ActorExtendsDao extends MongoRepository<ActorExtends, Integer> {

    Optional<ActorExtends> findByActorId(Integer actorId);
}
