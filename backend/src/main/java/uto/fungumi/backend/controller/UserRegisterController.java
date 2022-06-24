package uto.fungumi.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.UserService;

import javax.annotation.Resource;

@Controller
@RequestMapping("/register")
public class UserRegisterController {
    @Resource
    private UserService userService;


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
