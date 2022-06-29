package uto.fungumi.backend.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.TagDao;
import uto.fungumi.backend.model.TagResult;

import javax.annotation.Resource;

@Service
public class TagService {
    @Resource
    TagDao tagDao;

    public Page<TagResult> pageByCategory(String category, Pageable pageable){
        return tagDao.pageByCategory(category, pageable);
    }
}
