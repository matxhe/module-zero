(function () {
    /* Setup App Main Controller */
    angular.module('app').controller('common.views.layout', [
        '$scope', '$rootScope',
        function ($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function () {
            Metronic.initComponents(); // init core components
            //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive 
        });
    }]);
    /***
    Layout Partials.
    By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial 
    initialization can be disabled and Layout.init() should be called on page load complete as explained above.
    ***/

    /* Setup Layout Part - Header */
    appModule.controller('common.views.layout.header', [
        "$rootScope", "$scope", "appSession", 
        function ($rootScope, $scope, appSession) {
            var vm = this;

            vm.languages = abp.localization.languages;
            vm.currentLanguage = abp.localization.currentLanguage;

            $scope.$on('$includeContentLoaded', function () {
                Layout.initHeader(); // init header
            });
            vm.getShownUserName = function () {
                if (!abp.multiTenancy.isEnabled) {
                    return appSession.user.userName;
                } else {
                    if (appSession.tenant) {
                        return appSession.tenant.tenancyName + '\\' + appSession.user.userName;
                    } else {
                        return '.\\' + appSession.user.userName;
                    }
                }
            };
            vm.editMySettings = function () {
                i.open({
                    templateUrl: "~/App/common/views/profile/mySettingsModal.cshtml",
                    controller: "common.views.profile.mySettingsModal as vm",
                    backdrop: "static"
                })
            };
            vm.changePassword = function () {
                i.open({
                    templateUrl: "~/App/common/views/profile/changePassword.cshtml",
                    controller: "common.views.profile.changePassword as vm",
                    backdrop: "static"
                })
            };
            vm.changePicture = function () {
                i.open({
                    templateUrl: "~/App/common/views/profile/changePicture.cshtml",
                    controller: "common.views.profile.changePicture as vm",
                    backdrop: "static"
                })
            };
            vm.changeLanguage = function (n) {
                location.href = abp.appPath + "AbpLocalization/ChangeCulture?cultureName=" + n + "&returnUrl=" + window.location.href
            }
        }]);

    /* Setup Layout Part - Sidebar */
    appModule.controller('common.views.layout.sidebar', [
        '$rootScope','$scope', '$state',
        function ($rootScope, $scope, $state) {

            var vm = this;

            vm.menu = abp.nav.menus.MainMenu;
            vm.currentMenuName = $state.current.menu;

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                vm.currentMenuName = toState.menu;
            });

            $scope.$on('$includeContentLoaded', function () {
                Layout.initSidebar(); // init sidebar
            });
        }]);

    /* Setup Layout Part - Sidebar */
    appModule.controller('common.views.layout.pagehead', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Demo.init(); // init theme panel
        });
    }]);

    /* Setup Layout Part - Footer */
    appModule.controller('common.views.layout.footer', ['$scope', function ($scope) {
        $scope.$on('$includeContentLoaded', function () {
            Layout.initFooter(); // init footer
        });
    }]);
})();