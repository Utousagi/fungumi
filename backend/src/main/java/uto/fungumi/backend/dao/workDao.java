package uto.fungumi.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import uto.fungumi.backend.entity.work;

public interface workDao extends JpaRepository<work,Integer> {
}
