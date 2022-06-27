package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentBean {
    private Integer comment_id;
    private Integer user_id;
    private String user_avatar;
    private Integer score;
    private String content;
    private LocalDateTime time;
    private Integer like;
    private Boolean hasLike;
}
