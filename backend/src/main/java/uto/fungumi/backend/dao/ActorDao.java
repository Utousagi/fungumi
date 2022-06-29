package uto.fungumi.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.Actor;

/**
 * @author uto
 * @date 2022/6/29
 * @description
 */
@Repository
public interface ActorDao extends JpaRepository<Actor, Integer> {
}
