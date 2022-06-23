package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.service.DisplayService;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class DisplayController {
    @Resource
    private DisplayService displayService;
    @PostMapping ("/work/category")
    public List<Work> selectByCategory(@RequestParam("category") String category){
        System.out.println(category);
        return displayService.selectBycategory(category);
    }
}
