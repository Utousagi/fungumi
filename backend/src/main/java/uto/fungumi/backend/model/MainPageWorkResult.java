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
public class MainPageWorkResult {
    private Integer id;
    private String title;
    private Integer favoritePerson;
    private String picture;
    private String category;

    public MainPageWorkResult(Work work) {
        this.id = work.getId();
        this.category = work.getCategory();
        this.title = work.getTitle();
        this.picture = work.getPicture();
        this.favoritePerson = work.getFavoritePerson();
    }
}
