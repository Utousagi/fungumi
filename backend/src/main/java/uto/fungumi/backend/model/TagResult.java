package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author uto
 * @date 2022/6/28
 * @description
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TagResult {
    private Integer id;
    private String name;
    private String category;
    private Integer relatedWork;
}
