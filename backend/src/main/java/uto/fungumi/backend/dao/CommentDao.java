package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import uto.fungumi.backend.entity.Comment;
import uto.fungumi.backend.model.CommentBean;
import uto.fungumi.backend.model.CommentScoreBean;

import java.util.List;

public interface CommentDao extends JpaRepository<Comment, Integer> {

    @Query("SELECT c " +
            "FROM Comment c, ThumbUp tu " +
            "WHERE c.id = tu.comment.id AND tu.user.id = :id AND tu.type = 1 ")
    Page<Comment> findCommentUserLikes(Integer id, Pageable pageable);

    Page<Comment> findAllCommentByUserId(Integer id, Pageable pageable);

    Page<Comment> findByWorkId(Integer workId, Pageable pageable);

    @Query(value = "select new uto.fungumi.backend.model.CommentScoreBean(score, count(all score)) from Comment " +
            "where work.id = :workId " +
            "group by score")
    List<CommentScoreBean> getCommentByWorkId(Integer workId);

//    @Query("select new uto.fungumi.backend.model.CommentBean(c.id, c.user.id, c.user.avatar, c.score, c.content, c.time, c.likes, tu.) from Comment c " +
//            "left join c.thumbUps tu where tu.user.id = :userId " +
//            "and c.work.id = :workId")
    Page<CommentBean> pageByWorkId(Integer workId, Integer userId, Pageable pageable);
}
