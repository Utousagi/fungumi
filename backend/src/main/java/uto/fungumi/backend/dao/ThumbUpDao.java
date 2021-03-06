package uto.fungumi.backend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import uto.fungumi.backend.entity.ThumbUp;

public interface ThumbUpDao extends JpaRepository<ThumbUp, Integer> {
    Boolean existsByCommentIdAndUserId(Integer commentId, Integer userId);

    ThumbUp findByCommentIdAndUserIdAndType(int commentId, int userId, int type);

    ThumbUp findByCommentIdAndUserId(Integer id, int userId);
}
