package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserInfoResult {
    private Integer userId;
    private String username;
    private String avatar;
    private String description;
}
