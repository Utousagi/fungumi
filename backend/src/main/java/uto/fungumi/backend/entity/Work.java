package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Work {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title",unique = true)
    private String title;

    @Column(name = "profile")
    private String profile;

    @Column(name = "score")
    private Double score;

    @Column(name = "category")
    private String category;

    @Column(name = "favorite_person", columnDefinition = "int default 0")
    private Integer favoritePerson;

    @Column(name = "picture")
    private String picture;

    @Column(name = "release_date")
    private Date releaseDate;

    @Column(name = "rate_person",columnDefinition = "int default 0")
    private Integer ratePerson;

    @OneToMany(mappedBy = "work")
    @JsonIgnoreProperties({"work"})
    @ToString.Exclude
    private Set<Comment> comments;

    @ManyToMany(mappedBy = "works")
    @JsonIgnoreProperties({"works"})
    @ToString.Exclude
    private Set<Actor> actors;

    @ManyToMany(mappedBy = "works")
    @JsonIgnoreProperties({"works"})
    @ToString.Exclude
    private Set<Tag> tags;
}

