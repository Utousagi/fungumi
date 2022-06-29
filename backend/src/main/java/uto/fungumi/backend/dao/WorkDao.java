package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uto.fungumi.backend.entity.Work;

import java.util.List;

public interface WorkDao extends JpaRepository<Work,Integer> {

    @Query(value = "select * from work w " +
            "where w.category = :category limit 6",
            nativeQuery = true)
    List<Work> limitByCategory(String category);

    Page<Work> findAll(Pageable pageable);

    @Query("SELECT w " +
            "FROM Work w, Favorite f " +
            "WHERE w.id = f.work.id AND f.user.id = :id ")
    Page<Work> findWorkUserFavorites(Integer id, Pageable pageable);

    Page<Work> findByCategoryAndTitleLike(String category, String keyword, Pageable pageable);

    @Query("select w from Work w " +
            "join w.tags as t " +
            "where w.category = :category and t.name = :tag " +
            "and w.title like :keyword")
    Page<Work> findByCategoryAndTag(String category, String tag, String keyword, Pageable pageable);
}
