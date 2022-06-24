package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author uto
 * @date 2022/6/20
 * @description
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseResult<T> {
    private Boolean success;
    private String message;
    private T data;

    public BaseResult(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

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
