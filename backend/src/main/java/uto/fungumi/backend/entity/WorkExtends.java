package uto.fungumi.backend.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Map;

/**
 * @author uto
 * @date 2022/6/29
 * @description
 */
@Document("Work")
@Data
public class WorkExtends {

    @Field
    private Integer workId;
    @Field
    private Map<String, String> params;
}
