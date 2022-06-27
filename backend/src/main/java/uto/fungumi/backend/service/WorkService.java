package uto.fungumi.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.model.WorkInfoResult;

import javax.annotation.Resource;
import java.util.Optional;

@Service
@Slf4j
public class WorkService {
    @Resource
    private WorkDao workDao;

    public WorkInfoResult checkWorkInfo(Integer work_id){
        Optional<Work> byId = workDao.findById(work_id);
        if(byId.isPresent()) {
            Work work = byId.get();     //差Actor、CommentPage、scoreMap、拓展Map字段（info）、tagList
        }
        return null;

    }

}
