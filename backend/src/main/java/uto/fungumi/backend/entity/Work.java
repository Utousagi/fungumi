package uto.fungumi.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity(name = "work")
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
    private String score;

    @Column(name = "category")
    private String category;

    @Column(name = "likes")
    private String likes;

    @Column(name = "picture")
    private String picture;
}

