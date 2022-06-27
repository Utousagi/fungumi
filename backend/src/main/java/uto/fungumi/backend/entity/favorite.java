package uto.fungumi.backend.entity;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
@Data
@Table(name = "favorite")
@Entity
public class favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "user_id")
    private int user_id;

    @Column(name = "work_id")
    private int work_id;

    @Column(name = "type")
    private String type;

    @Column(name = "time")
    private LocalDateTime time;
}
