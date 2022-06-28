package uto.fungumi.backend.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.BaseResult;
import uto.fungumi.backend.model.MainPageResult;
import uto.fungumi.backend.model.WorkInfoResult;
import uto.fungumi.backend.service.WorkService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/work")
public class WorkController {
    @Resource
    private WorkService workService;
    @Resource
    private WorkDao workDao;
    @PostMapping ("/display")
    public BaseResult<MainPageResult>  selectByCategory() {
        var mainPageResult = workService.displayMainPage();
        return new BaseResult<>(true, "主页数据获取成功", mainPageResult);
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

    @PostMapping("/workInfo")
    public BaseResult<WorkInfoResult> getWorkInfo(@RequestParam Integer workId){
        BaseResult<WorkInfoResult> result = new BaseResult<WorkInfoResult>();
        workService.getWorkInfo(workId,result);
        return result;
    }
}
