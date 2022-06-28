package uto.fungumi.backend.dao;

import aj.org.objectweb.asm.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import uto.fungumi.backend.entity.Favorite;

public interface FavoriteDao extends JpaRepository<Favorite, Integer> {
    Favorite findByWorkIdAndUserId(int wordId, int userId);
}
