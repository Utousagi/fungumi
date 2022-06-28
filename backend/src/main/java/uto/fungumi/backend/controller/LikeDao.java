package uto.fungumi.backend.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import uto.fungumi.backend.entity.Like;

public interface LikeDao extends JpaRepository<Like, Integer> {
    Boolean existsByCommentIdAndUserId(Integer commentId, Integer userId);
}
