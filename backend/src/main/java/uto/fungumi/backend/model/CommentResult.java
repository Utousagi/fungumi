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
    String username;
    String avatar;
    Integer score;
    Integer workId;
    String workName;
    String content;
    String time;
    boolean hasLike;
    Integer likes;
}
