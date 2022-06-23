package uto.fungumi.backend.service;

import uto.fungumi.backend.entity.User;

public interface UserService {

    public User findByUsername(String username);
    public User save(User user);
    public User findByUsernameAndPassword(String username, String password);

}
