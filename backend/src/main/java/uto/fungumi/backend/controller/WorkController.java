package uto.fungumi.backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.service.DisplayService;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/work")
public class WorkController {
    @Resource
    private DisplayService displayService;
    @PostMapping ("/display")
    public BaseResult<Map<String,List<Work>>>  selectByCategory() {
        BaseResult<Map<String,List<Work>>> baseResult = new BaseResult<>();
        List<Work> game = displayService.selectByCategory("game");
        List<Work> anime = displayService.selectByCategory("anime");
        List<Work> music = displayService.selectByCategory("music");
        List<Work> book = displayService.selectByCategory("book");
        Map<String, List<Work>> displaymap = new HashMap<>();
        displaymap.put("game", game);
        displaymap.put("anime", anime);
        displaymap.put("music", music);
        displaymap.put("book", book);
        baseResult.setData(displaymap);
        baseResult.setMessage("首页展示数据传输");
        return baseResult;

    }
}
