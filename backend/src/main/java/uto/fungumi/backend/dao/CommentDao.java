package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.model.CommentScoreBean;

import java.util.List;

public interface CommentDao extends JpaRepository<Comment, Integer> {

    @Query("SELECT c " +
            "FROM Comment c, ThumbUp l " +
            "WHERE c.id = l.commentId AND l.userId = :id ")
    Page<Comment> findCommentUserLikes(Integer id, Pageable pageable);

    Page<Comment> findAllCommentByUserId(Integer id, Pageable pageable);

    Page<Comment> findByWorkId(int workId, Pageable pageable);

    @Query(value = "select new uto.fungumi.backend.model.CommentScoreBean(score, count(all score)) from Comment " +
            "where workId = :workId " +
            "group by score")
    List<CommentScoreBean> getCommentByWorkId(Integer workId);
}
