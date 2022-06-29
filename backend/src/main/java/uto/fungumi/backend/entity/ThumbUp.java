package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@Entity
@Table
@RequiredArgsConstructor
public class ThumbUp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "time")
    private Date time;

    @ManyToOne
    @JsonIgnoreProperties({"thumbUps"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"thumbUps"})
    private Comment comment;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        ThumbUp thumbUp = (ThumbUp) o;
        return id != null && Objects.equals(id, thumbUp.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
