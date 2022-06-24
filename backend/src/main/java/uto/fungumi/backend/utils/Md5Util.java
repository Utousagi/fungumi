package uto.fungumi.backend.utils;

import org.apache.shiro.crypto.hash.Md5Hash;

/**
 * @author uto
 * @date 2022/6/24
 * @description
 */
public class Md5Util {
    private final static Integer HASH_ITER = 15;
    private final static String SALT = "d0H5hyD49tad2";

    public static String getMd5(String str) {
        return new Md5Hash(str, SALT, HASH_ITER).toString();
    }

    public static String getMd5(char[] str) {
        return getMd5(new String(str));
    }

}
