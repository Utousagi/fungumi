package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;

import java.util.List;

/**
 * @author uto
 * @date 2022/6/28
 * @description
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult<T> {
    private Boolean success;
    private String message;

    private Integer pageSize;
    private Integer pageNo;
    private Long totalCount;
    private Integer totalPage;
    private Boolean hasPre;
    private Boolean hasNext;

    private List<T> data;

    public PageResult(Boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public PageResult(Boolean success, String message, Page<T> page) {
        this.success = success;
        this.message = message;

        this.pageSize = page.getSize();
        this.pageNo = page.getNumber();
        this.totalCount = page.getTotalElements();
        this.totalPage = page.getTotalPages();
        this.hasPre = page.hasPrevious();
        this.hasNext = page.hasNext();

        this.data = page.getContent();
    }
}
