$(document).ready(function () {

    var eventData = baEventList;

    var strHtml = "<tbody>";
    // 时间区间
    for (var hour = 0; hour < 24; hour += baGapHour) {
        var endHour = hour + baGapHour;
        var strStartHour = hour >= 10 ? hour : ("0" + hour);
        var strEndHour = endHour >= 10 ? endHour : ("0" + endHour);
        strStartHour += ":00";
        strEndHour += ":00";

        // 时间段：每一个时间间隔占用一个行格子
        strHtml += '<tr><td>' + strStartHour + ' 至 ' + strEndHour + '</td>';

        // 每个周几当前时间段的任务
        for (var weekOfDay = 1; weekOfDay <= 7; weekOfDay++) {
            for (var m = 0; m < eventData.length; m++) {
                var name = "";
                var tempEvents = eventData[m].event.split("^");
                if (tempEvents.length == 2) {
                    name += eventMapName[tempEvents[0]];
                    name += "(" + eventMapName[tempEvents[1]] + ")";
                } else {
                    for (var k = 0; k < tempEvents.length; k++) {
                        if (k != 0) {
                            name += "^";
                        }
                        name += eventMapName[tempEvents[k]];
                    }
                }
                var start = eventData[m].start;
                var end = eventData[m].end;
                var day = eventData[m].day;

                // 对应的周且起始时间匹配
                if (day == weekOfDay && start == hour) {
                    var cha = (end - start) / 4;
                    // 当前时间段的任务
                    strHtml += '<td rowspan="' + cha + '">' + name + '</td>';
                }
            }
        }
        strHtml += '</tr>';
    }
    strHtml += '</tbody>';

    $("#content").append(strHtml);
});
