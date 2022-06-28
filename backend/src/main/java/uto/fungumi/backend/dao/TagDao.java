package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.Tag;

import java.util.List;

@Repository
public interface TagDao extends JpaRepository<Tag, Integer> {
    Page<Tag> findAll(Pageable pageable);
}
