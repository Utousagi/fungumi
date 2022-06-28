package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uto.fungumi.backend.entity.Comment;

public interface CommentDao extends JpaRepository<Comment, Integer> {

    @Query("SELECT c " +
            "FROM Comment c, Like l " +
            "WHERE c.id = l.commentId AND l.userId = :id ")
    Page<Comment> findCommentUserLikes(Integer id, Pageable pageable);

    Page<Comment> findAllCommentByUserId(Integer id, Pageable pageable);
}
