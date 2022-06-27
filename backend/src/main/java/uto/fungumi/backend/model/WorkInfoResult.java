package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import uto.fungumi.backend.entity.Tag;

import javax.persistence.Column;
import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkInfoResult {
    private Integer workId;
    private String workTitle;
    private Map<String,String> workInfo;
    private String workProfile;
    private List<Tag> tag;
    private ActorBean actor;                    //演员
    private Page<CommentBean> commentItemList;
    private Double avgScore;                   //平均分
    private Map<Integer,Integer> scoreMap;      //每个评分段=>人数  ？？？

}
