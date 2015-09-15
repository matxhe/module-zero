(function () {
    /***
    GLobal Directives
    ***/
    "use strict";
    appModule.directive("autoFocus",function(){
        return{
            restrict:"A",
            link: function (scope, element) {
                element[0].focus()
            }
        }
    });
    appModule.directive("busyIf", [function () {
        return {
            restrict: "A",
            scope: { busyIf: "=" },
            link: function (scope, element) {
                scope.$watch("busyIf",
                    function () {
                        scope.busyIf ? abp.ui.setBusy($(element)) :
                        abp.ui.clearBusy($(element))
                    })
            }
        }
    }]);

    appModule.directive("buttonBusy", function () {
        return {
            restrict: "A", scope: { buttonBusy: "=" },
            link: function (scope, element, attrs) {
                var isBusy = false, $element = $(element), span = $element.find("span"), spanText = null, icon = $element.find("i"), iconClass = null;
                scope.$watch("buttonBusy", function () {
                    if (scope.buttonBusy)
                        $element.attr("disabled", "disabled"),
                    icon.length && (iconClass = icon.attr("class"),
                    icon.removeClass(),
                    icon.addClass("fa fa-spin fa-spinner")),
                    attrs.busyText && span.length && (spanText = span.html(), span.html(attrs.busyText)), isBusy = true;
                    else {
                        if (!isBusy) return;
                        $element.removeAttr("disabled");
                        icon.length && iconClass && (icon.removeClass(), icon.addClass(iconClass));
                        span.length && spanText && span.html(spanText)
                    }
                })
            }
        }
    });
    appModule.directive("enterKey", [
        function () {
            return function (scope, element, params) {
                element.bind("keydown keypress",
                    function (element) {
                        element.which === 13 && (scope.$apply(
                            function () {
                                scope.$eval(params.enterKey)
                            }),
                        element.preventDefault())
                    }
                )
            }
        }]);
    appModule.directive("permissionTree", [
    function () {
        return {
            restrict: "E",
            template: '<div class="permission-tree"><\/div>',
            scope: { editData: "=" },
            link: function (n, t) {
                function e() {
                    u && i.jstree("destroy");
                    var t = _.map(n.editData.permissions, function (t) {
                        return { id: t.name, parent: t.parentName ? t.parentName : "#", text: t.displayName, state: { opened: !0, selected: _.contains(n.editData.grantedPermissionNames, t.name) } }
                    }); i.jstree({
                        core: { data: t },
                        types: {
                            "default": { icon: "fa fa-folder tree-item-icon-color icon-lg" },
                            file: { icon: "fa fa-file tree-item-icon-color icon-lg" }
                        }, checkbox: { keep_selected_style: !1, three_state: !1, cascade: "" },
                        plugins: ["checkbox", "types"]
                    }); u = !0;
                    i.on("changed.jstree", function (t, u) {
                        var s, e; u.node && (s = r, s || (r = !0), u.node.state.selected ? (f(i.jstree("get_parent", u.node)), e = $.makeArray(i.jstree("get_children_dom", u.node)), i.jstree("select_node", e)) : (e = $.makeArray(i.jstree("get_children_dom", u.node)), i.jstree("deselect_node", e)), s || (n.$apply(function () { n.editData.grantedPermissionNames = o() }), r = !1))
                    })
                } function f(n) { i.jstree("select_node", n, !0); var t = i.jstree("get_parent", n); t && f(t) } function o() { for (var t = [], r = i.jstree("get_selected", !0), n = 0; n < r.length; n++) t.push(r[n].original.id); return t } var i = $(t).find(".permission-tree"), u = !1, r = !1; n.$watch("editData", function () { n.editData && e() })
            }
        }
    }]);

    // Route State Load Spinner(used on page or content load)
    appModule.directive('ngSpinnerBar', ['$rootScope',
        function($rootScope) {
            return {
                link: function(scope, element, attrs) {
                    // by defult hide the spinner bar
                    element.addClass('hide'); // hide spinner bar by default

                    // display the spinner bar whenever the route changes(the content part started loading)
                    $rootScope.$on('$stateChangeStart', function() {
                        element.removeClass('hide'); // show spinner bar  
                    });

                    // hide the spinner bar on rounte change success(after the content loaded)
                    $rootScope.$on('$stateChangeSuccess', function() {
                        element.addClass('hide'); // hide spinner bar
                        $('body').removeClass('page-on-load'); // remove page loading indicator
                        Layout.setSidebarMenuActiveLink('match'); // activate selected link in the sidebar menu

                        // auto scorll to page top
                        setTimeout(function () {
                            Metronic.scrollTop(); // scroll to the top on content load
                        }, $rootScope.settings.layout.pageAutoScrollOnLoad);                    
                    });

                    // handle errors
                    $rootScope.$on('$stateNotFound', function() {
                        element.addClass('hide'); // hide spinner bar
                    });

                    // handle errors
                    $rootScope.$on('$stateChangeError', function() {
                        element.addClass('hide'); // hide spinner bar
                    });
                }
            };
        }
    ])

    // Handle global LINK click
    appModule.directive('a',
        function() {
            return {
                restrict: 'E',
                link: function(scope, elem, attrs) {
                    if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
                        elem.on('click', function(e) {
                            e.preventDefault(); // prevent link click for above criteria
                        });
                    }
                }
            };
        });

    // Handle Dropdown Hover Plugin Integration
    appModule.directive('dropdownMenuHover', function () {
        return {
            link: function (scope, elem) {
                elem.dropdownHover();
            }
        };  
    });

    appModule.factory('appSession', [
        "abp.services.app.session", function (sessionService) {

            var _session = {
                user: null,
                tenant: null
            };
            sessionService.getCurrentLoginInformations({ async: false })
                .success(function (result) {
                    _session.user = result.user;
                    _session.tenant = result.tenant;
                });

            return _session;
        }]);
})();