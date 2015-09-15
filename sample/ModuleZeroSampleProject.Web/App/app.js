
var appModule = angular.module('app', [
        'ui.router',                    // Routing
        'ui.bootstrap',                 // ui bootstrap
        "ui.utils",
        'ui.jq',
        'ngSanitize',
        //'ngMaterial',
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.grid',                      // ui grid
        'ui.grid.pagination',
        'ngIdle',                       // Idle timer
        'abp'
]);
    
    //Configuration for angular Idle plugin.
    appModule.config(["IdleProvider",
        function (IdleProvider) {
            // Configure Idle settings
            IdleProvider.idle(5); // in seconds
            IdleProvider.timeout(120); // in seconds
        }]);


    /* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
    appModule.config(['$ocLazyLoadProvider',
        function ($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                cssFilesInsertBefore: 'ng_load_plugins_before',
                debug: true,
                events: false,
                modules: []
            });
        }]);

    /* Setup global settings */
    appModule.factory('settings', ['$rootScope', function ($rootScope) {
        // supported languages
        var settings = {
            layout: {
                pageSidebarClosed: false, // sidebar state
                pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
            },
            layoutImgPath: Metronic.getAssetsPath() + 'admin/layout/img/',
            layoutCssPath: Metronic.getAssetsPath() + 'admin/layout/css/'
        };

        $rootScope.settings = settings;

        return settings;
    }]);

    //Configuration for Angular UI routing.
    appModule.config([
        '$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/questions');
            $stateProvider
		.state('home', {
                    url: '/',
                    templateUrl: '/App/Main/views/home/home.cshtml',
                    menu: 'Home' //Matches to name of 'Home' menu in PropertyNavigationProvider
                })
                .state('about', {
                    url: '/about',
                    templateUrl: '/App/Main/views/about/about.cshtml',
                    menu: 'About' //Matches to name of 'About' menu in PropertyNavigationProvider
                })
                .state('questions', {
                    url: '/questions',
                    templateUrl: abp.appPath + 'App/Main/views/questions/index.cshtml',
                    menu: 'Questions' //Matches to name of 'Questions' menu in ModuleZeroSampleProjectNavigationProvider
                })
                .state('questionDetail', {
                    url: '/questions/:id',
                    templateUrl: abp.appPath + 'App/Main/views/questions/detail.cshtml',
                    menu: 'Questions' //Matches to name of 'Questions' menu in ModuleZeroSampleProjectNavigationProvider
                })
                .state('users', {
                    url: '/users',
                    templateUrl: abp.appPath + 'App/Main/views/users/index.cshtml',
                    menu: 'Users' //Matches to name of 'Users' menu in ModuleZeroSampleProjectNavigationProvider
                })
                .state('roles', {
                    url: '/roles',
                    templateUrl: abp.appPath + 'App/Main/views/roles/index.cshtml',
                    menu: 'Roles' //Matches to name of 'Roles' menu in ModuleZeroSampleProjectNavigationProvider
                });
        }
    ]);

    /* Init global settings and run the app */
    appModule.run(["$rootScope", "settings", "$state", function ($rootScope, settings, $state) {
        $rootScope.$state = $state; // state to be accessed from view
    }]);
