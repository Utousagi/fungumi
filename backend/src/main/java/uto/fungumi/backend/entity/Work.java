package uto.fungumi.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.sql.*;

@Entity(name = "work")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Table(name = "work")
public class Work {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "title",unique = true)
    private String title;

    @Column(name = "profile")
    private String profile;

    @Column(name = "score")
    private Integer score;

    @Column(name = "category")
    private String category;

    @Column(name = "likes")
    private String likes;

    @Column(name = "picture")
    private String picture;

    @Column(name = "releasedate")
    private Date date;

    @Column(name = "ratep",columnDefinition = "int default 0")
    private int rateperson;


}

