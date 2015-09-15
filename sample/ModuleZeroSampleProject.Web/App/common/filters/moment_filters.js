angular.module('app')
    .filter("momentFormat",function () {
        return function (input, sformat) {
            return input ? moment(input).format(sformat) : "-"
		}
	})
    .filter('fromNow', function () {
        return function(input) {
            return moment(input).fromNow();
        };
    });