package uto.fungumi.backend.dao;

import org.hibernate.boot.jaxb.mapping.spi.JaxbAssociationOverride;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.UserInfoResult;


@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);

    @Query(value = "SELECT new uto.fungumi.backend.model.UserInfoResult(u.id, u.username, u.avatar, u.description) FROM User u WHERE u.id = :userId")
    UserInfoResult getUserInfoById(Integer userId);

    User getUserById(Integer id);
}
