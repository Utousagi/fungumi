package uto.fungumi.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity(name = "work")
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class work {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String title;

    @Column
    private String profile;

    @Column
    private String score;

    @Column
    private String category;
}

