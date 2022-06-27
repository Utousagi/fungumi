package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Table(name = "favorite")
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
    private String type;

    @Column(name = "time")
    private LocalDateTime time;

    @OneToMany(mappedBy = "favorite")
    private List<User_r_Favorite> user_r_favoriteList;
}
