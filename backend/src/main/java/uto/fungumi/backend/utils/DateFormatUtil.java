package uto.fungumi.backend.utils;

import java.util.Date;

/**
 * @author uto
 * @date 2022/6/30
 * @description
 */
public class DateFormatUtil {

    public static String standardFormat(Date date) {
        var formatter = new java.text.SimpleDateFormat("yyyy/MM/dd");
        return formatter.format(date);
    }
}
