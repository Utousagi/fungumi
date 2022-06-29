package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "avatar")
    private String avatar;

    private String chineseName;

    @Enumerated(EnumType.STRING)
    private ActorRole role;

    @ManyToMany
    @JsonIgnoreProperties({"actors"})
    private Set<Work> works;

    @Getter
    public enum ActorRole {
        STAFF("staff"),
        CHARACTER("character");

        private final String roleName;

        ActorRole(String roleName) {
            this.roleName = roleName;
        }
    }
}
