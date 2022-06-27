package uto.fungumi.backend.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import uto.fungumi.backend.entity.User;

import java.util.List;


@Repository
public interface UserDao extends JpaRepository<User, Integer> {
    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
}
