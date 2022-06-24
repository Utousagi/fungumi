package uto.fungumi.backend.aop.login;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author uto
 * @date 2022/6/23
 * @description
 */
@Target({java.lang.annotation.ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface Login {
    Role needRole() default Role.USER;
}
