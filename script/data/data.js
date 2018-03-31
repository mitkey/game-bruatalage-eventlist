// 间隔小时
var baGapHour = 4;

// 活动名映射
var eventMapName = {
    "xys": "许愿树",
    "dsc": "大扫除",
    "tssl": "提升实力",
    "yjds": "研究大师",
    "qsjz": "全速建筑",
    "fwdy": "符文低语",
    "ysr": "原始人",
    "blsl": "部落杀狼",
    "zmsb": "招募士兵",
    "jch": "虎"
};

// 活动列表
var baEventList = function () {
    //周一
    var baDay1 = [
        {"day": 1, "start": 0, "end": 4, "event": "xys"},
        {"day": 1, "start": 4, "end": 12, "event": "dsc"},
        {"day": 1, "start": 12, "end": 16, "event": "tssl"},
        {"day": 1, "start": 16, "end": 20, "event": "yjds"},
        {"day": 1, "start": 20, "end": 24, "event": "qsjz"}
    ];

    // 周二
    var baDay2 = [
        {"day": 2, "start": 0, "end": 4, "event": "zmsb"},
        {"day": 2, "start": 4, "end": 8, "event": "xys"},
        {"day": 2, "start": 8, "end": 12, "event": "qsjz"},
        {"day": 2, "start": 12, "end": 16, "event": "zmsb"},
        {"day": 2, "start": 16, "end": 20, "event": "xys"},
        {"day": 2, "start": 20, "end": 24, "event": "fwdy"}
    ];

    // 周三
    var baDay3 = [
        {"day": 3, "start": 0, "end": 4, "event": "tssl"},
        {"day": 3, "start": 4, "end": 8, "event": "yjds"},
        {"day": 3, "start": 8, "end": 12, "event": "xys"},
        {"day": 3, "start": 12, "end": 16, "event": "fwdy"},
        {"day": 3, "start": 16, "end": 20, "event": "dsc"},
        {"day": 3, "start": 20, "end": 24, "event": "tssl"}
    ];

    // 周四
    var baDay4 = [
        {"day": 4, "start": 0, "end": 4, "event": "yjds"},
        {"day": 4, "start": 4, "end": 8, "event": "qsjz"},
        {"day": 4, "start": 8, "end": 12, "event": "yjds^jch"},
        {"day": 4, "start": 12, "end": 20, "event": "blsl^jch"},
        {"day": 4, "start": 20, "end": 24, "event": "xys^jch"}
    ];

    // 周五
    var baDay5 = [
        {"day": 5, "start": 0, "end": 4, "event": "tssl^jch"},
        {"day": 5, "start": 4, "end": 8, "event": "zmsb^jch"},
        {"day": 5, "start": 8, "end": 12, "event": "dsc"},
        {"day": 5, "start": 12, "end": 16, "event": "fwdy"},
        {"day": 5, "start": 16, "end": 20, "event": "tssl"},
        {"day": 5, "start": 20, "end": 24, "event": "yjds"}
    ];

    // 周六
    var baDay6 = [
        {"day": 6, "start": 0, "end": 4, "event": "qsjz"},
        {"day": 6, "start": 4, "end": 8, "event": "zmsb"},
        {"day": 6, "start": 8, "end": 24, "event": "ysr"}
    ];

    // 周日
    var baDay7 = [
        {"day": 7, "start": 0, "end": 8, "event": "ysr"},
        {"day": 7, "start": 8, "end": 12, "event": "tssl"},
        {"day": 7, "start": 12, "end": 16, "event": "yjds"},
        {"day": 7, "start": 16, "end": 20, "event": "fwdy"},
        {"day": 7, "start": 20, "end": 24, "event": "zmsb"}
    ];

    var concatResult = baDay1.concat(baDay2, baDay3, baDay4, baDay5, baDay6, baDay7);
    concatResult.sort(function (o1, o2) {
        var day1 = o1.day;
        var day2 = o2.day;
        var cmDay = day1 - day2;

        if (cmDay == 0) {
            // 同一天
            var start1 = o1.start;
            var start2 = o2.start;
            var cmStart = start1 - start2;
            if (cmStart == 0) {
                // 开始时间相同
                var gap1 = o1.end - o1.start;
                var gap2 = o2.end - o2.start;
                var cmGap = gap1 - gap2;
                return cmGap;
            } else {
                return cmStart;
            }
        } else {
            return cmDay;
        }
    })
    return concatResult;
}();