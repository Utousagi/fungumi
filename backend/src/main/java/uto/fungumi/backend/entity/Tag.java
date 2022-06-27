package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@Table(name = "tag")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToMany(mappedBy = "tags")
    @ToString.Exclude
    @JsonIgnoreProperties({"tags"})
    private Set<Work> works = new HashSet<>();

    @Column(name = "category")
    private String category;

    @Column(name = "name")
    private String name;

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
