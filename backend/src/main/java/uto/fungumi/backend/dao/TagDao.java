package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.Tag;
import uto.fungumi.backend.model.TagResult;

@Repository
public interface TagDao extends JpaRepository<Tag, Integer> {
    Page<Tag> findAll(Pageable pageable);

    @Query("select new uto.fungumi.backend.model.TagResult(t.id, t.name, t.category, size(t.works) ) from Tag t " +
            "where t.category = :category " +
            "group by t.id " +
            "order by size(t.works) desc")
    Page<TagResult> pageByCategory(String category, Pageable pageable);
}
