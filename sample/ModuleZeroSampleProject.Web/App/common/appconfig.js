var app = app || {};
(function () {
    $.extend(app, {
        consts: {
            grid: {
                defaultPageSize: 10,
                defaultPageSizes: [10, 20, 50, 100]
            },
            userManagement: {
                defaultAdminUserName: "admin"
            },
            contentTypes: {
                formUrlencoded: "application/x-www-form-urlencoded; charset=UTF-8"
            }
        }
    })
})();
app = app || {}, function () {
    var n = abp.localization.getSource("ModuleZeroSampleProject");
    app.localize = function () {
        return n.apply(this, arguments)
    };
    app.downloadTempFile = function (n) {
        location.href = abp.appPath + "File/DownloadTempFile?fileType=" + n.fileType + "&fileToken=" + n.fileToken + "&fileName=" + n.fileName
    };
    app.createDateRangePickerOptions = function () {
        var t = moment().format("YYYY-MM-DD"),
            n = {
                min: "2015-05-01",
                max: t,
                ranges: {}
            };
        return n.ranges[app.localize("Today")] = [moment().startOf("day"), moment().endOf("day")],
            n.ranges[app.localize("Yesterday")] = [moment().subtract(1, "days").startOf("day"), moment().subtract(1, "days").endOf("day")],
            n.ranges[app.localize("Last7Days")] = [moment().subtract(6, "days").startOf("day"), moment().endOf("day")],
            n.ranges[app.localize("Last30Days")] = [moment().subtract(29, "days").startOf("day"), moment().endOf("day")],
            n.ranges[app.localize("ThisMonth")] = [moment().startOf("month"), moment().endOf("month")],
            n.ranges[app.localize("LastMonth")] = [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
            n
    }
}()