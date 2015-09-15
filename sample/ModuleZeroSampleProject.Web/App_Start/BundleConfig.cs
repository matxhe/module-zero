using System.Web.Optimization;

namespace ModuleZeroSampleProject.Web
{
    public static class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();

            #region Bundles for Angular application (private pages, entered after login)
            
            //VENDOR RESOURCES

            //~/Bundles/App/vendor/opensans
            bundles.Add(
                new StyleBundle("~/Bundles/App/vendor/opensans")
                    .Include(
                        "~/Content/font-open-sans.css"
                    )
                );
            //<link href="../../../assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            //<link href="../../../assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
            //<link href="../../../assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            //<link href="../../../assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css" />
            
            //~/Bundles/App/vendor/css
            bundles.Add(
                new StyleBundle("~/Bundles/App/vendor/css")
                    .Include(
                        "~/Content/font-awesome.min.css",
                        "~/bower_components/simple-line-icons/css/simple-line-icons.css",
                        //"~/Content/themes/base/all.css",

                        "~/bower_components/bootstrap/dist/css/bootstrap.min.css",
                        "~/bower_components/jquery.uniform/themes/default/css/uniform.default.css",
                        //"~/bower_components/bootstrap-material-design/dist/css/ripples.min.css",
                        //"~/bower_components/bootstrap-material-design/dist/css/material-wfont.min.css",
                        //"~/bower_components/angular-material/angular-material.min.css",
                        //"~/bower_components/angular-material/themes/blue-theme.css",
                        "~/Content/toastr.min.css",
                        "~/bower_components/sweetalert/dist/sweetalert.css",
                        "~/Content/flags/famfamfam-flags.css",
                        "~/bower_components/angular-ui-grid/ui-grid.css"
                    )
                );

            //APPLICATION RESOURCES

            //<!-- DOC: To use 'rounded corners' style just load 'components-rounded.css' stylesheet instead of 'components.css' in the below style tag -->
            //<link href="../../../assets/global/css/components-md.css" id="style_components" rel="stylesheet" type="text/css" />
            //<link href="../../../assets/global/css/plugins-md.css" rel="stylesheet" type="text/css" />
            //<link href="../../../assets/admin/layout4/css/layout.css" rel="stylesheet" type="text/css" />
            //<link href="../../../assets/admin/layout4/css/themes/light.css" rel="stylesheet" type="text/css" id="style_color" />
            //<link href="../../../assets/admin/layout4/css/custom.css" rel="stylesheet" type="text/css" />
            //~/Bundles/App/Main/css
            bundles.Add(
                new StyleBundle("~/Bundles/App/Main/css")
                    .Include(
                        "~/App/Metronic/assets/global/css/components-md.css",
                        "~/App/Metronic/assets/global/css/plugins-md.css",
                        "~/App/Metronic/assets/admin/layout4/css/layout.css",
                        "~/App/Metronic/assets/admin/layout4/css/themes/light.css",
                        "~/App/Metronic/assets/admin/layout4/css/custom.css",
                        "~/App/Main/app.css"
                    )
                );

            //jquery

            //<!-- BEGIN CORE JQUERY PLUGINS -->
            //<script src="../../../assets/global/plugins/jquery.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/jquery-migrate.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/jquery.cokie.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
            bundles.Add(
                new ScriptBundle("~/Bundles/App/vendor/jquery")
                    .Include(
                        "~/Abp/Framework/scripts/utils/ie10fix.js",
                        "~/Scripts/json2.min.js",

                        "~/Scripts/modernizr-2.8.3.js",

                        "~/bower_components/jquery/dist/jquery.min.js",

                        "~/bower_components/bootstrap/dist/js/bootstrap.min.js",
                        "~/bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js",
                        "~/bower_components/slimScroll/jquery.slimscroll.min.js",
                        
                        //"~/bower_components/bootstrap-material-design/dist/css/ripples.min.js",
                        //"~/bower_components/bootstrap-material-design/dist/css/material.min.js",

                        "~/Scripts/moment-with-locales.min.js",
                        "~/Scripts/jquery.blockUI.js",
                        "~/bower_components/js-cookie/src/js.cookie.js",
                        "~/bower_components/jquery.uniform/jquery.uniform.js",
                        "~/Scripts/toastr.min.js",
                        "~/bower_components/spin.js/spin.js",
                        "~/bower_components/spin.js/jquery.spin.js",
                        "~/bower_components/sweetalert/dist/sweetalert.min.js"
                    )
                );
            //<!-- BEGIN CORE ANGULARJS PLUGINS -->
            //<script src="../../../assets/global/plugins/angularjs/angular.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/angularjs/angular-sanitize.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/angularjs/angular-touch.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/angularjs/plugins/angular-ui-router.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/angularjs/plugins/ocLazyLoad.min.js" type="text/javascript"></script>
            //<script src="../../../assets/global/plugins/angularjs/plugins/ui-bootstrap-tpls.min.js" type="text/javascript"></script>
            bundles.Add(
                new ScriptBundle("~/Bundles/App/vendor/angularjs")
                .Include(
                        "~/bower_components/angular/angular.min.js",
                        //"~/bower_components/angular-animate/angular-animate.min.js",
                        "~/bower_components/angular-sanitize/angular-sanitize.min.js",
                        //"~/bower_components/angular-aria/angular-aria.min.js",
                        "~/bower_components/angular-touch/angular-touch.js",
                        "~/bower_components/oclazyload/dist/ocLazyLoad.js",
                        "~/bower_components/angular-ui-router/release/angular-ui-router.min.js",
                        "~/bower_components/angular-ui-grid/ui-grid.js",
                        "~/bower_components/ng-idle/angular-idle.min.js",

                        //"~/bower_components/hammerjs/hammer.min.js",

                        //"~/bower_components/angular-material/angular-material.min.js",

                        //"~/Scripts/angular-ui/ui-bootstrap.min.js",
                        "~/Scripts/angular-ui/ui-bootstrap-tpls.min.js",
                        "~/Scripts/angular-ui/ui-utils.min.js",

                        
                        "~/Abp/Framework/scripts/abp.js",
                        "~/Abp/Framework/scripts/libs/abp.jquery.js",
                        "~/Abp/Framework/scripts/libs/abp.toastr.js",
                        "~/Abp/Framework/scripts/libs/abp.sweet-alert.js",
                        "~/Abp/Framework/scripts/libs/abp.blockUI.js",
                        "~/Abp/Framework/scripts/libs/abp.spin.js",
                        "~/Abp/Framework/scripts/libs/angularjs/abp.ng.js"
                    )
                );

            //~/Bundles/App/common/js
            bundles.Add(
                new ScriptBundle("~/Bundles/App/common/js")
                    .Include(
                        "~/App/app.js"
                    )
                    .IncludeDirectory("~/App/common", "*.js", true)
                );
            //~/Bundles/App/Main/js
            //<script src="js/app.js" type="text/javascript"></script>
            //<script src="js/directives.js" type="text/javascript"></script>
            bundles.Add(
                new ScriptBundle("~/Bundles/App/Main/js")
                    .IncludeDirectory("~/App/Main", "*.js", true)
                );
            //~/Bundles/App/Metronic/js
            //<script src="../../../assets/global/scripts/metronic.js" type="text/javascript"></script>
            //<script src="../../../assets/admin/layout4/scripts/layout.js" type="text/javascript"></script>
            //<script src="../../../assets/admin/layout4/scripts/demo.js" type="text/javascript"></script>
            bundles.Add(
                new ScriptBundle("~/Bundles/App/Metronic/js")
                    .Include(
                        "~/App/Metronic/assets/global/scripts/metronic.js",
                        "~/App/Metronic/assets/admin/layout4/scripts/layout.js",
                        "~/App/Metronic/assets/admin/layout4/scripts/demo.js"
                    )
                );
            #endregion

            #region Bundles for MVC application (public pages, can be seen without login)

            //VENDOR RESOURCES

            //~/Bundles/vendor/css
            bundles.Add(
                new StyleBundle("~/Bundles/vendor/css")
                    .Include(
                        "~/Content/themes/base/all.css",

                        "~/Content/bootstrap.min.css",
                        "~/bower_components/bootstrap-material-design/dist/css/ripples.min.css",
                        "~/bower_components/bootstrap-material-design/dist/css/material-wfont.min.css",

                        "~/Content/toastr.min.css",
                        "~/Content/flags/famfamfam-flags.css",
                        "~/Content/font-awesome.min.css"
                    )
                );

            //~/Bundles/vendor/js/top (These scripts should be included in the head of the page)
            bundles.Add(
                new ScriptBundle("~/Bundles/vendor/js/top")
                    .Include(
                        "~/Abp/Framework/scripts/utils/ie10fix.js",
                        "~/Scripts/modernizr-2.8.3.js"
                    )
                );

            //~/Bundles/vendor/bottom (Included in the bottom for fast page load)
            bundles.Add(
                new ScriptBundle("~/Bundles/vendor/js/bottom")
                    .Include(
                        "~/Scripts/json2.min.js",

                        "~/Scripts/jquery-2.1.3.min.js",
                        "~/Scripts/jquery-ui-1.11.4.min.js",

                        "~/Scripts/bootstrap.min.js",
                        "~/bower_components/bootstrap-material-design/dist/css/ripples.min.js",
                        "~/bower_components/bootstrap-material-design/dist/css/material.min.js",

                        "~/Scripts/moment-with-locales.min.js",
                        "~/Scripts/jquery.validate.min.js",
                        "~/Scripts/jquery.blockUI.js",
                        "~/Scripts/toastr.min.js",
                        "~/bower_components/spin.js/spin.js",
                        "~/bower_components/spin.js/jquery.spin.js",

                        "~/Abp/Framework/scripts/abp.js",
                        "~/Abp/Framework/scripts/libs/abp.jquery.js",
                        "~/Abp/Framework/scripts/libs/abp.toastr.js",
                        "~/Abp/Framework/scripts/libs/abp.blockUI.js",
                        "~/Abp/Framework/scripts/libs/abp.spin.js"
                    )
                );

            //APPLICATION RESOURCES

            //~/Bundles/css
            bundles.Add(
                new StyleBundle("~/Bundles/css")
                    .Include("~/css/main.css")
                );

            //~/Bundles/js
            bundles.Add(
                new ScriptBundle("~/Bundles/js")
                    .Include("~/js/main.js")
                );

            #endregion
        }
    }
}