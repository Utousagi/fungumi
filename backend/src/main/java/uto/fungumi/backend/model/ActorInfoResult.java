package uto.fungumi.backend.model;

import lombok.Data;
import uto.fungumi.backend.entity.ActorInfo;

import java.util.List;
import java.util.Map;


@Data
public class ActorInfoResult  {
    private Integer id;
    private String name;
    private String avatar;
    private String chineseName;
    private List<WorkParticipateBean> works;

    private Map<String,String[]> params;

    public ActorInfoResult(Integer id, String name, String avatar, String chineseName/*, Set<Work> works*/) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.chineseName = chineseName;
        this.works = null;
    }

}