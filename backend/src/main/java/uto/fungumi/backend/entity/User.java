package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonEnumDefaultValue;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;


@RequiredArgsConstructor
@Getter
@Setter
@Entity
public class User {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "del")
    private Boolean del;

    @Column(name = "description")
    private String description;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    @ToString.Exclude
    private Set<Favorite> favorites;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    @ToString.Exclude
    private Set<ThumbUp> thumbUps;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    @ToString.Exclude
    private Set<Comment> comments;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return id != null && Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Getter
    public enum Role {
        @JsonEnumDefaultValue
        USER("user"),
        ADMIN("admin");

        private final String roleName;
        Role(String roleName) {
            this.roleName = roleName;
        }
    }
}
