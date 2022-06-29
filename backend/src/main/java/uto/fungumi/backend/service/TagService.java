package uto.fungumi.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.TagDao;
import uto.fungumi.backend.model.TagBean;
import uto.fungumi.backend.model.TagResult;

@Service
public class TagService {
    @Autowired
    TagDao tagDao;
    public TagBean findAll(){

        return null;
    }

    public Page<TagResult> pageByCategory(String category, Pageable pageable){
        return tagDao.pageByCategory(category, pageable);
    }
}
