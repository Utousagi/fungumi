package uto.fungumi.backend.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Work;
import uto.fungumi.backend.service.DisplayService;

import java.util.List;
@Service
public class DisplayServiceImpl implements DisplayService {
    @Autowired
    WorkDao workDao;
    @Override
    public List<Work> selectBycategory(String category) {
        List<Work> works = workDao.findAllByCategory(category);
        return works;
    }
}
