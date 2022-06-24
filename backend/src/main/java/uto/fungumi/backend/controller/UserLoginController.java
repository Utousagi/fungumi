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
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/login")
public class UserLoginController {
    @Resource
    private UserService userService;


    @GetMapping("/")
    public String login(){
        return "login";
    }


    @ResponseBody
    @PostMapping("/checkUsernameAndPassword")
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
