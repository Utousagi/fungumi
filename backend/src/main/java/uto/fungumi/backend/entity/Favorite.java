package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "type")
    private Integer type;

    @Column(name = "time")
    private Date time;

    @ManyToOne
    @JsonIgnoreProperties({"favorites"})
    private User user;

    @ManyToOne
    private Work work;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Favorite favorite = (Favorite) o;
        return id != null && Objects.equals(id, favorite.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
