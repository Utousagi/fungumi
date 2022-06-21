package uto.fungumi.backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author uto
 * @date 2022/6/20
 * @description
 */
@Data
@NoArgsConstructor
public class BaseResult<T> {
    private Boolean success;
    private String message;
    private T data;

    public void construct(Boolean success, String message, T data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

    public void construct(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public void construct(Boolean success, T data) {
        this.success = success;
        this.data = data;
    }
}
