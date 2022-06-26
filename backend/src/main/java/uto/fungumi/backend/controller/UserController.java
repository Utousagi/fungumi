package uto.fungumi.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.aop.login.Login;
import uto.fungumi.backend.aop.login.Role;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.UserService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserController {
    @Resource
    private UserService userService;

    @PostMapping("/register")
    @Login(needRole = Role.ADMIN)
    public BaseResult<User> register(User user) {
        // TODO: 改一下呗
        //  需要注册成功的话直接登录
        // userService.register(user);
        BaseResult<User> baseResult = new BaseResult<>();
        if (userService.findByUsername(user.getUsername()) == null) {
            userService.register(user.getUsername(),user.getPassword());
            baseResult.setSuccess(true);
            baseResult.setData(user);
            login(user);
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
}
