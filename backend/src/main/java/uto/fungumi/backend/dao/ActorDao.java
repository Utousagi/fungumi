package uto.fungumi.backend.dao;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.Actor;
import uto.fungumi.backend.model.ActorInfoResult;
import uto.fungumi.backend.model.WorkParticipateBean;

import java.util.List;

@Repository
public interface ActorDao extends JpaRepository<Actor,Integer> {

    @Query(value = "SELECT new uto.fungumi.backend.model.ActorInfoResult(a.id, a.name, a.avatar, a.chineseName) from Actor a " +
            "join a.works w " +
            "where a.id = :id")
    ActorInfoResult getActorByWorkId(Integer id);
    @Query("SELECT new uto.fungumi.backend.model.WorkParticipateBean(w.id, w.picture, w.title, w.profile) from Actor a " +
            "join a.works w " +
            "where a.id = :id")
    List<WorkParticipateBean> getWorkByActorId(Integer id);
}
