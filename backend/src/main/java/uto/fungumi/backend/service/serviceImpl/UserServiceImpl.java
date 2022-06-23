package uto.fungumi.backend.service.serviceImpl;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.UserDao;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.service.UserService;

@NoArgsConstructor
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserDao userDao;

    public User findByUsername(String username){
        return userDao.findByUsername(username);
    }

    public User save(User user){
        return userDao.save(user);
    }

    @Override
    public User findByUsernameAndPassword(String username, String password) {
        return userDao.findByUsernameAndPassword(username, password);
    }
}
