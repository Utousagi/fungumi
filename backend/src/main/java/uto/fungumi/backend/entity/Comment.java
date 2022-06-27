package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int user_id;

    @Column(name = "work_id")
    private int work_id;

    @Column(name = "score")
    private int score;

    @Column(name = "content")
    private String content;

    @Column(name = "time")
    private LocalDateTime time;

    @Column(name = "like")
    private int like;

    @Column(name = "dislike")
    private int dislike;
}
