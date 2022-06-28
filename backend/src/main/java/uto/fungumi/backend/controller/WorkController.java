package uto.fungumi.backend.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.model.WorkInfoResult;
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
    @Resource
    private WorkDao workDao;
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
    @GetMapping("/find")
    public BaseResult<Page<Work>> findAllWorkBy(@RequestParam(defaultValue = "0", value = "pageNo") Integer pageNo,
                                                  @RequestParam(defaultValue = "10", value = "pageSize") Integer pageSize,
                                                @RequestParam(defaultValue = "id",value = "attribute") String attribute){
        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.DESC, attribute);
        BaseResult<Page<Work>> baseResult = new BaseResult<>();
        Page<Work> pages = workDao.findAll(pageable);
        // 当前页数
        System.out.println("当前页数：" + pages.getNumber());
        // 总页数
        System.out.println("总页数：" + pages.getTotalPages());
        // 查询出来的所有数据
        System.out.println("查询出来的所有数据：" + pages.getContent());
        // 是否有上一页
        System.out.println("是否有上一页：" + pages.hasPrevious());
        // 是否有下一页
        System.out.println("是否有下一页：" + pages.hasNext());
        // 当前页的上一页
        System.out.println("当前页的上一页：" + (pages.hasPrevious() ? pages.previousPageable().getPageNumber() : pages.getNumber()));
        // 当前页的下一页
        System.out.println("当前页的下一页：" + (pages.hasNext() ? pages.nextPageable().getPageNumber() : pages.getNumber()));
        if(pages != null){
            baseResult.setData(pages);
            baseResult.setSuccess(true);
            baseResult.setMessage("分页数据传输成功");
        }else {
            baseResult.setSuccess(false);
            baseResult.setMessage("分页数据传输失败");
        }
        return baseResult;
    }

    @PostMapping("/showWorkInfo")
    public BaseResult<WorkInfoResult> showWorkInfo(Integer work_id){
        return null;
    }
}
