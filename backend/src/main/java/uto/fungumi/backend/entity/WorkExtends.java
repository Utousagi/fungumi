package uto.fungumi.backend.entity;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

/**
 * @author uto
 * @date 2022/6/29
 * @description
 */
@Document
@Data
public class WorkExtends {

    private Integer workId;
    private Map<String, String> params;
}
