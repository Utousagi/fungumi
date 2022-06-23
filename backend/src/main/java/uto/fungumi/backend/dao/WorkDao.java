package uto.fungumi.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uto.fungumi.backend.entity.Work;

import java.util.List;

public interface WorkDao extends JpaRepository<Work,Integer> {
    @Query("select w from work w where w.category = ?1")
    List<Work> findAllByCategory(String category);
}
