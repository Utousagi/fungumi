package uto.fungumi.backend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.model.PageResult;
import uto.fungumi.backend.model.TagResult;
import uto.fungumi.backend.service.TagService;

/**
 * @author uto
 * @date 2022/6/28
 * @description
 */
@RestController
@RequestMapping("/tag")
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class TagController {

    private final TagService tagService;

    @GetMapping("/page")
    public PageResult<TagResult> pageByCategory(@RequestParam String category,
                                                @RequestParam(defaultValue = "0") Integer pageNo,
                                                @RequestParam(defaultValue = "100") Integer pageSize) {
        Pageable pageable = PageRequest.of(pageNo, pageSize);
        var page = tagService.pageByCategory(category, pageable);
        return new PageResult<>(true, "查询成功", page);
    }
}
