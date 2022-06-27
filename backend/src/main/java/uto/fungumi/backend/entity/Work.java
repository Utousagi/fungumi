package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.sql.*;
import java.util.HashSet;
import java.util.Set;
import java.util.List;

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

    @ManyToMany
    @JoinTable(name = "work_r_tag",joinColumns = {@JoinColumn(name = "work_id",referencedColumnName = "id")},inverseJoinColumns = @JoinColumn(name = "tag_id",referencedColumnName = "id"))
    @JsonIgnoreProperties({"works"})
    private Set<Tag> tags = new HashSet<>();

    @Column(name = "title",unique = true)
    private String title;

    @Column(name = "profile")
    private String profile;

    @Column(name = "score")
    private Double score;

    @Column(name = "category")
    private String category;

    @Column(name = "likes")
    private String likes;

    @Column(name = "picture")
    private String picture;

    @Column(name = "releasedate")
    private Date date;

    @Column(name = "ratep",columnDefinition = "int default 0")
    private Integer rateperson;


    @ManyToMany(targetEntity = Actor.class)
    @JoinTable(name = "work_r_actor",joinColumns = {@JoinColumn(name = "work_id")},inverseJoinColumns = @JoinColumn(name = "actor_id",referencedColumnName = "id"))
    @JsonIgnoreProperties({"workList"})
    private List<Actor> actorList;
}

