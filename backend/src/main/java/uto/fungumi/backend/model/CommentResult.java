package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import uto.fungumi.backend.entity.ThumbUp;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CommentResult {
    private Integer id;
    private Integer userId;
    private String username;
    private String avatar;
    private Integer score;
    private Integer workId;
    private String workName;
    private String content;
    private String time;
    private Boolean hasLike;
    private Integer likes;

    public CommentResult(int id, int userId, String username, String avatar, int score,
                         int workId, String workName, String content, Date time, int likes, ThumbUp tu) {
        DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");

        this.id = id;
        this.userId = userId;
        this.username = username;
        this.avatar = avatar;
        this.score = score;
        this.workId = workId;
        this.workName = workName;
        this.content = content;
        this.time = formatter.format(time);
        this.likes = likes;
        this.hasLike = tu != null;
    }
}
