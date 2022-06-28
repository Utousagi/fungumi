package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CommentResult {
    Integer id;
    Integer userId;
    Integer workId;
    Integer score;
    String content;
    boolean isLike;
    Integer likes;
}
