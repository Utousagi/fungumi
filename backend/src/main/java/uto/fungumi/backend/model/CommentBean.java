package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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
}
