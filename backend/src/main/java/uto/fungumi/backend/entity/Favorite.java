package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "work_id")
    private int workId;

    @Column(name = "type")
    private int type;

    @Column(name = "time")
    private Date time;
}
