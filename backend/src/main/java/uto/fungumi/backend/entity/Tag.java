package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "category")
    private String category;

    @Column(name = "name")
    private String name;

    @ManyToMany
    @JsonIgnoreProperties({"tags"})
    @ToString.Exclude
    private Set<Work> works;

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
