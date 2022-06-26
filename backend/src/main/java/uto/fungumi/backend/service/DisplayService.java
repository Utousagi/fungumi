package uto.fungumi.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uto.fungumi.backend.dao.WorkDao;
import uto.fungumi.backend.entity.Work;

import java.util.List;
@Service
public class DisplayService{
    @Autowired
    WorkDao workDao;

    public List<Work> selectByCategory(String category) {
        List<Work> works = workDao.findAllByCategory(category);
        if (works.size() > 6) {
            for (int i = 6; i < works.size(); i++) {
                works.remove(i);
            }
        }
        return works;
    }
}