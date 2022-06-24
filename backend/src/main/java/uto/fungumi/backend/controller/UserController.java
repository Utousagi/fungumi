package uto.fungumi.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.springframework.web.bind.annotation.*;
import uto.fungumi.backend.aop.login.Login;
import uto.fungumi.backend.aop.login.Role;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.UserService;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
            userService.save(user);
            baseResult.setSuccess(true);
            baseResult.setData(user);
        } else {
            baseResult.setSuccess(false);
            baseResult.setMessage("failed to save! ");
        }
        return baseResult;
    }

    @PostMapping("/login")
    public BaseResult<Void> login(@RequestBody User user) {
        var success = userService.login(user.getUsername(), user.getPassword());
        if(success) {
            return new BaseResult<>(true, "登录成功");
        }
        return new BaseResult<>(false, "用户名或密码错误");
    }
}
