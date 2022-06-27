package uto.fungumi.backend.controller;

import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;
import uto.fungumi.backend.aop.login.Login;
import uto.fungumi.backend.aop.login.Role;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.model.LoginCheckResult;
import uto.fungumi.backend.model.UserBean;
import uto.fungumi.backend.model.UserInfoResult;
import uto.fungumi.backend.service.UserService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/register")
    public BaseResult<UserInfoResult> register(@RequestBody UserBean userBean) {
        if (userService.findByUsername(userBean.getUsername()) == null) {
            var user = userService.register(userBean.getUsername(),userBean.getPassword());
            userService.login(userBean.getUsername(), userBean.getPassword());
            var subject = SecurityUtils.getSubject();
            var userInfo = UserInfoResult.builder()
                    .hasLogin(subject.isAuthenticated())
                    .id(user.getId())
                    .avatar(user.getAvatar())
                    .username(user.getUsername())
                    .build();
            return new BaseResult<>(true, "注册成功", userInfo);
        }
        return new BaseResult<>(false, "用户名已存在");
    }

    @PostMapping("/login")
    public BaseResult<UserInfoResult> login(@RequestBody UserBean userBean) {
        var userInfo = userService.login(userBean.getUsername(), userBean.getPassword());
        if(userInfo.getHasLogin()) {
            return new BaseResult<>(true,"登录成功", userInfo);
        }
        return new BaseResult<>(false, "用户名或密码错误", userInfo);
    }

    @GetMapping("/checkLogin")
    public BaseResult<UserInfoResult> checkLogin() {
        var userInfo = userService.checkLogin();
        return new BaseResult<>(true, "success", userInfo);
    }

    @PostMapping("/logout")
    public BaseResult<Void> logout() {
        userService.logout();
        return new BaseResult<>(true, "退出成功");
    }
}
