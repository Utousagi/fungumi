package uto.fungumi.backend.controller;

import com.fasterxml.jackson.databind.util.BeanUtil;
import lombok.extern.slf4j.Slf4j;
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
    public BaseResult<User> register(@RequestBody UserBean userBean) {
        // TODO: 改一下呗
        //  需要注册成功的话直接登录
        // userService.register(user);
        BaseResult<User> baseResult = new BaseResult<>();
        if (userService.findByUsername(userBean.getUsername()) == null) {
            var user = userService.register(userBean.getUsername(),userBean.getPassword());
            var userInfoResult = new UserInfoResult();
            BeanUtils.copyProperties(user, userInfoResult);
            var userResult = UserInfoResult.builder()
                    .id(user.getId())
                    .avatar(user.getAvatar())
                    .username(user.getUsername())
                    .build();
            baseResult.setSuccess(true);
            baseResult.setData(user);
//            login(new User());
        } else {
            baseResult.setSuccess(false);
            baseResult.setMessage("failed to save! ");
        }
        return baseResult;
    }

    @PostMapping("/login")
    public BaseResult<User> login(@RequestBody User user) {
        var success = userService.login(user.getUsername(), user.getPassword());
        if(success) {
            BaseResult<User> baseResult = new BaseResult<>(true,"登录成功",user);
            return baseResult;
        }
        return new BaseResult<>(false, "用户名或密码错误");
    }

    @GetMapping("/checkLogin")
    public BaseResult<LoginCheckResult> checkLogin() {
        var checkResult = userService.checkLogin();
        return new BaseResult<>(true, "success", checkResult);
    }
}
