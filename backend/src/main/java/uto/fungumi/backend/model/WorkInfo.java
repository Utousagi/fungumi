package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class WorkInfo {
    Integer id;
    String title;
    String profile;
    String picture;
    String category;
    Double score;
    Integer votes;
    Integer type;
}
