package uto.fungumi.backend.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
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

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "rate_person",columnDefinition = "int default 0")
    private Integer ratePerson;
}

