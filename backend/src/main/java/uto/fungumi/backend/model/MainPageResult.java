package uto.fungumi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * @author uto
 * @date 2022/6/28
 * @description
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MainPageResult {
    private List<MainPageWorkResult> anime;
    private List<MainPageWorkResult> novel;
    private List<MainPageWorkResult> music;
    private List<MainPageWorkResult> game;
}
