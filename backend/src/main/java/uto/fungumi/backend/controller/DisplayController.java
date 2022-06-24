package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.service.DisplayService;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class DisplayController {
    @Resource
    private DisplayService displayService;
    @PostMapping ("/category")
    public Map<String,List<Work>> selectByCategory(){
        List<Work> game = displayService.selectByCategory("game");
        List<Work> anime = displayService.selectByCategory("anime");
        List<Work> music = displayService.selectByCategory("music");
        List<Work> book = displayService.selectByCategory("book");
        Map<String,List<Work>> displaymap = new HashMap<>();
        displaymap.put("game",game);
        displaymap.put("anime",anime);
        displaymap.put("music",music);
        displaymap.put("book",book);
        return displaymap;
    }
}
