package uto.fungumi.backend.aop.log;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import uto.fungumi.backend.model.BaseResult;

/**
 * @author uto
 * @date 2022/6/27
 * @description
 */
@Aspect
@Component
@Slf4j
public class LogAspect {

    @Pointcut("execution(* uto.fungumi.backend.controller.*.*(..))")
    public void logPointcut() {
    }

    @Around("logPointcut()")
    public Object log(ProceedingJoinPoint pjt) throws Throwable {
        var signature = (MethodSignature) pjt.getSignature();
        var method = signature.getMethod();
        var res = (BaseResult) pjt.proceed();
        log.info("-------------------------");
        log.info("method: {}", method.getName());
        log.info("-------------------------");
        log.info("args: {}", pjt.getArgs());
        log.info("-------------------------");
        log.info("result: {}", res.getData());
        log.info("-------------------------");
        return res;
    }
}
