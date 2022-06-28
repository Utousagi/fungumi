package uto.fungumi.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.TagDao;
import uto.fungumi.backend.model.TagBean;

@Service
public class TagService {
    @Autowired
    TagDao tagDao;
    public TagBean findAll(){

        return null;
    }
}
