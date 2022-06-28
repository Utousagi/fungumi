package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.sql.*;
import java.util.HashSet;
import java.util.Set;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Work {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToMany
    @JoinTable(name = "work_r_tag",joinColumns = {@JoinColumn(name = "work_id",referencedColumnName = "id")},inverseJoinColumns = @JoinColumn(name = "tag_id",referencedColumnName = "id"))
    @JsonIgnoreProperties({"works"})
    private Set<Tag> tags = new HashSet<>();

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

