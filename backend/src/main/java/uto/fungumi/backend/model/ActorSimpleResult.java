package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author uto
 * @date 2022/6/29
 * @description
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ActorSimpleResult {
    private Integer id;
    private String name;
    private String chineseName;
    private String description;
    private String avatar;

}
