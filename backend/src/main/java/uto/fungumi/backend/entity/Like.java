package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "comment_id")
    private int commentId;

    @Column(name = "type")
    private String status;

    @Column(name = "time")
    private Date time;
}
