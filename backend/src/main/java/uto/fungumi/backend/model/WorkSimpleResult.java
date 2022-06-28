package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import uto.fungumi.backend.entity.Work;

/**
 * @author uto
 * @date 2022/6/28
 * @description
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class WorkSimpleResult {

    private Integer id;
    private String title;
    private String description;
    private String imageUrl;
    private Double score;
    private Integer ratePerson;

    public WorkSimpleResult(Work work) {
        this.id = work.getId();
        this.title = work.getTitle();
        this.description = work.getProfile();
        this.imageUrl = work.getPicture();
        this.score = work.getScore();
        this.ratePerson = work.getRatePerson();
    }

}
