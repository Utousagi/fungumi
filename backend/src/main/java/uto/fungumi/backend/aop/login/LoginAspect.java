package uto.fungumi.backend.aop.login;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import uto.fungumi.backend.entity.User;
import uto.fungumi.backend.model.BaseResult;

/**
 * @author uto
 * @date 2022/6/23
 * @description
 */
@Aspect
@Slf4j
@Component
public class LoginAspect {

    @Pointcut("@annotation(uto.fungumi.backend.aop.login.Login)")
    public void loginPointCut() {
    }

    @Around(value = "loginPointCut()")
    public Object checkLoginStatus(ProceedingJoinPoint pjt) throws Throwable {
        log.info("login aspect");
        var signature = (MethodSignature) pjt.getSignature();
        var method = signature.getMethod();
        log.info(method.getName());
        log.info("--------");
        log.info(String.valueOf(method.getAnnotations().length));
        var login = method.getAnnotation(Login.class);
        var subject = SecurityUtils.getSubject();
        if(!subject.isAuthenticated()) {
            return new BaseResult<>(false, "请先登录");
        }
        var user = (User) subject.getPrincipal();
        if(login.needRole() == Role.ADMIN && !"admin".equals(user.getRole())) {
            return new BaseResult<>(false, "没有权限");
        }
        return pjt.proceed();
    }
}
