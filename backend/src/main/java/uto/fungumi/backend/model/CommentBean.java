package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import uto.fungumi.backend.entity.ThumbUp;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentBean {
    private Integer commentId;
    private Integer userId;
    private String userAvatar;
    private Integer score;
    private String content;
    private Date time;
    private Integer likes;
    private Boolean hasLike;


    public CommentBean(int commentId, int userId, String userAvatar, int score, String content, Date time, int likes, ThumbUp tu) {
        this.commentId = commentId;
        this.userId = userId;
        this.userAvatar = userAvatar;
        this.score = score;
        this.content = content;
        this.time = time;
        this.likes = likes;
        this.hasLike = tu != null;
    }
}
