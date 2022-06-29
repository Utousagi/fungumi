package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Date;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "score")
    private Integer score;

    @Column(name = "content")
    private String content;

    @Column(name = "time")
    private Date time;

    @Column(name = "likes")
    private Integer likes;

    @ManyToOne
    @JsonIgnoreProperties({"comments"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"comments"})
    private Work work;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Comment comment = (Comment) o;
        return id != null && Objects.equals(id, comment.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
