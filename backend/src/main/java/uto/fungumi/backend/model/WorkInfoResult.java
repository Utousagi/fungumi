package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import uto.fungumi.backend.entity.Tag;

import java.util.List;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkInfoResult {
    private Integer work_id;
    private String work_title;
    private Map<String,String> work_info;
    private String work_profile;
    private List<Tag> tag;
    private ActorBean actor;                    //演员
    private List<CommentBean> commentItemList;
    private Double avg_score;                   //平均分
    private Map<Integer,Integer> scoreMap;      //每个评分段=>人数

}
