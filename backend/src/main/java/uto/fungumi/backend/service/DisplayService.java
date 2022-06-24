package uto.fungumi.backend.service;
import uto.fungumi.backend.entity.Work;

import java.util.List;
public interface DisplayService {
    List<Work> selectByCategory(String category);
}
