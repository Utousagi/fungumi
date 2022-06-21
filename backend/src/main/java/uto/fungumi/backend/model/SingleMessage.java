package uto.fungumi.backend.model;

import com.fasterxml.jackson.annotation.JsonInclude;

/**
 * @author uto
 * @date 2022/6/20
 * @description
 */
public class SingleMessage {
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String id;

    public static SingleMessage id(String id) {
        SingleMessage message = new SingleMessage();
        message.id = id;
        return message;
    }
}
