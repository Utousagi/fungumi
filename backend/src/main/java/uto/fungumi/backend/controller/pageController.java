package uto.fungumi.backend.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.BaseResult;

import javax.annotation.Resource;

@RestController
public class pageController {
    @Resource
    private WorkDao workDao;


    @GetMapping("/page/rank")
    public BaseResult<Page<Work>> findAllById(@RequestParam(defaultValue = "0", value = "pageNo") Integer pageNo,
                                                @RequestParam(defaultValue = "10", value = "pageSize") Integer pageSize){
        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.DESC, "id");
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
    @GetMapping("/page/rank")
    public BaseResult<Page<Work>> findAllByRank(@RequestParam(defaultValue = "0", value = "pageNo") Integer pageNo,
                              @RequestParam(defaultValue = "10", value = "pageSize") Integer pageSize){
        Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.Direction.DESC, "score");
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

}
