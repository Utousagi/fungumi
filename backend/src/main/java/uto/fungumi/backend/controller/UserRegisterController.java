package uto.fungumi.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.serviceImpl.UserServiceImpl;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/register")
public class UserRegisterController {
    @Resource
    private UserServiceImpl userService;


    @GetMapping("/")
    public String regist(){
        return "register";
    }


    @ResponseBody
    @PostMapping("/addUser")
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


}
