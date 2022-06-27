package uto.fungumi.backend.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class LoginCheckResult {
    private Boolean hasLogin;
    private Integer id;
    private String username;
    private String avatar;
}
