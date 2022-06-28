package uto.fungumi.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.UserDao;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.LoginCheckResult;
import uto.fungumi.backend.model.UserInfoResult;
import uto.fungumi.backend.utils.Md5Util;

@Service
@Slf4j
public class UserService {
    @Autowired
    private UserDao userDao;

    public User findByUsername(String username){
        return userDao.findByUsername(username);
    }

    public User save(User user){
        return userDao.save(user);
    }

    public User findByUsernameAndPassword(String username, String password) {
        return userDao.findByUsernameAndPassword(username, password);
    }

    public UserInfoResult login(String username, String password) {
        var token = new UsernamePasswordToken(username, password);
        var subject = SecurityUtils.getSubject();
        try {
            subject.login(token);
            var user = (User) subject.getPrincipal();
            return UserInfoResult.builder()
                    .hasLogin(true)
                    .id(user.getId())
                    .username(user.getUsername())
                    .avatar(user.getAvatar())
                    .build();
        } catch (AuthenticationException e) {
            log.warn(e.getMessage());
            return UserInfoResult.builder().hasLogin(false).build();
        }
    }

    public User register(String username, String password) {
        User user = new User();
        password = Md5Util.getMd5(password);
        user.setUsername(username);
        user.setPassword(password);
        user.setRole(User.Role.USER);
        return userDao.save(user);
    }

    public UserInfoResult checkLogin() {
        var subject = SecurityUtils.getSubject();
        if(!subject.isAuthenticated()) {
            return UserInfoResult.builder().hasLogin(false).build();
        }
        var user = (User) subject.getPrincipal();
        return UserInfoResult.builder()
                .id(user.getId())
                .username(user.getUsername())
                .avatar(user.getAvatar())
                .hasLogin(true)
                .build();
    }

    public void logout() {
        var subject = SecurityUtils.getSubject();
        subject.logout();
    }

}
