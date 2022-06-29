package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import uto.fungumi.backend.entity.Work;

import java.sql.Time;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkParticipateBean {
    private Integer id;
    private String picture;
    private String title;
    private String profile;

    public WorkParticipateBean(Work work) {
        this.id = work.getId();
        this.picture = work.getPicture();
        this.title = work.getTitle();
        this.profile = work.getProfile();
    }
}
