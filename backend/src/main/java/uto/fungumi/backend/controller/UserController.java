package uto.fungumi.backend.controller;

import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.serviceImpl.UserServiceImpl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {
    @Resource
    private UserServiceImpl userService;


    @GetMapping("/register")
    public String regist(){
        return "register";
    }


    @ResponseBody
    @PostMapping("/register/addUser")
    public BaseResult<User> addUser(User user){
        BaseResult<User> baseResult = new BaseResult<>();
        if (userService.findByUsername(user.getUsername()) == null){
            userService.save(user);
            baseResult.setSuccess(true);
            baseResult.setData(user);
        }

        else {
            baseResult.setSuccess(false);
            baseResult.setMessage("failed to save! ");
        }
        return baseResult;
    }


    @GetMapping("/login")
    public String login(){
        return "login";
    }


    @ResponseBody
    @PostMapping("/login/checkUsernameAndPassword")
    public BaseResult<User> checkUsernameAndPassword(User user, HttpServletRequest request){
        BaseResult<User> baseResult = new BaseResult<>();
        User byUsernameAndPassword = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (byUsernameAndPassword == null){
            baseResult.setSuccess(false);
            baseResult.setMessage("failed to login！");
        }
        else {
            baseResult.setSuccess(true);
            baseResult.setData(byUsernameAndPassword);
            request.getSession().setAttribute("username",byUsernameAndPassword.getUsername());

        }
        return baseResult;
    }

}
