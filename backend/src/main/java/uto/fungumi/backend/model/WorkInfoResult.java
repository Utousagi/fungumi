package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.domain.Page;
import uto.fungumi.backend.entity.Tag;

import java.util.List;
import java.util.Map;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkInfoResult {
    private Integer workId;
    private String workTitle;
    private Map<String,String> workParams;
    private String workProfile;
    private String workImage;   //new by zeesangpie
    private String category;   //new by zeesangpie
    private Integer favoriteStatus;   //new by zeesangpie
    private Set<TagResult> tagResults;
    private Set<ActorBean> actor;                    //演员
    private CommentBeanPage commentBeanPage;
    private Double avgScore;                   //平均分
    private List<CommentScoreBean> scoreMap;      //每个评分段=>人数  ？？？
}
