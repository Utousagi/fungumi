package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uto.fungumi.backend.entity.Work;

import java.util.List;

public interface WorkDao extends JpaRepository<Work,Integer> {

    @Query(value = "select w.id, w.title, w.rate_person, w.picture, w.category from work w " +
            "where w.category = :category limit 6",
            nativeQuery = true)
    List<Work> limitByCategory(String category);

    Page<Work> findAll(Pageable pageable);

    @Query("SELECT w " +
            "FROM Work w, Favorite f " +
            "WHERE w.id = f.work.id AND f.user.id = :id ")
    Page<Work> findWorkUserFavorites(Integer id, Pageable pageable);
}
