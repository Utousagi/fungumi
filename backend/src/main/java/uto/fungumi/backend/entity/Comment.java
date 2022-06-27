package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Table(name = "comment")
@Entity

public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "work_id")
    private Integer workId;

    @Column(name = "score")
    private Integer score;

    @Column(name = "content")
    private String content;

    @Column(name = "time")
    private LocalDateTime time;

    @Column(name = "likes")
    private Integer likes;

    @OneToMany(mappedBy = "comment")
    private List<User_r_Comment> user_r_commentList;
}
