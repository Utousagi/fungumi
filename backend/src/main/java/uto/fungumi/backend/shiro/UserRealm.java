package uto.fungumi.backend.shiro;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.authc.*;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.realm.AuthenticatingRealm;
import uto.fungumi.backend.dao.UserDao;
import uto.fungumi.backend.utils.Md5Util;

import javax.annotation.Resource;

/**
 * @author uto
 * @date 2022/6/24
 * @description
 */
@Slf4j
public class UserRealm extends AuthenticatingRealm {

    @Resource
    private UserDao userDao;

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        var token = (UsernamePasswordToken) authenticationToken;
        var username = token.getUsername();
        var password = Md5Util.getMd5(token.getPassword());
        var user = userDao.findByUsername(username);
        if(user == null || !user.getPassword().equals(password)) {
            throw new AuthenticationException("用户名或密码错误");
        }
        return new SimpleAuthenticationInfo(user, token.getPassword(), "userRealm");
    }
}
