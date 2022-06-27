package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table
public class ThumbUp {
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

    @OneToMany(mappedBy = "thumbUp")
    private List<User_r_ThumbUp> user_r_thumbUpList;


}
