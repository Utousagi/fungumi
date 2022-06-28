package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserPageResult {
    Integer id;
    String description;
    List<CommentResult> comments;
    List<CommentResult> likes;
    List<WorkInfo> favorites;
}
