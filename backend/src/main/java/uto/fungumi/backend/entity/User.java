package uto.fungumi.backend.entity;

import com.fasterxml.jackson.annotation.JsonEnumDefaultValue;
import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@ToString
@Table(name = "user")
public class User {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username", unique = true)
    private String username;

    //这么加没法传值
//    @JsonIgnore
    @Column(name = "password")
    private String password;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "avatar")
    private String avatar;

    @Column(name = "del")
    private Boolean del;

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
