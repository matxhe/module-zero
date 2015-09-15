(function () {
    var controllerId = 'app.views.roles.index';
    angular.module('app').controller(controllerId, [
        "$scope", "$modal", "$templateCache", "abp.services.app.role", "uiGridConstants",
        function ($scope, $modal, $templateCache, roleService, gridConst) {
            var vm = this;
            vm.loading = false;
            function showNewOrEditDialog(currentItem) {
                var modalInstancei = $modal.open({
                    templateUrl: "~/App/common/views/roles/createOrEditModal.cshtml",
                    controller: "common.views.roles.createOrEditModal as vm",
                    backdrop: "static",
                    resolve: {
                        roleId: function ()
                        {
                            return currentItem;
                        }
                    }
                });
                modalInstance.result.then(function () {
                    f.getRoles()
                })
            }
            $scope.$on("$viewContentLoaded",
                function () {
                    Metronic.initAjax()
                });

            abp.ui.setBusy(
                null,
                roleService.getRoles().success(function (data) {
                    vm.gridOptions.data = data.items;
                })
            );

            vm.gridOptions = {
                paginationPageSizes: app.consts.grid.defaultPageSizes,
                paginationPageSize: app.consts.grid.defaultPageSize,
                useExternalPagination: gridConst.scrollbars.WHEN_NEEDED,
                useExternalSorting: gridConst.scrollbars.WHEN_NEEDED,
                appScopeProvider: vm,
                columnDefs: [
                    {
                        name: app.localize("Actions"),
                        width: 120,
                        cellTemplate: '<div class="ui-grid-cell-contents">  <div class="btn-group dropdown" dropdown="">    <button class="btn btn-xs btn-primary blue" dropdown-toggle="" aria-haspopup="true" aria-expanded="false"><i class="fa fa-cog"><\/i> ' + app.localize("Actions") + ' <span class="caret"><\/span><\/button>    <ul class="dropdown-menu">      <li><a ng-if="grid.appScope.permissions.edit" ng-click="grid.appScope.editRole(row.entity)">' + app.localize("Edit") + '<\/a><\/li>      <li><a ng-if="!row.entity.isStatic && grid.appScope.permissions.delete" ng-click="grid.appScope.deleteRole(row.entity)">' + app.localize("Delete") + "<\/a><\/li>    <\/ul>  <\/div><\/div>"
                    },
                    {
                        name: app.localize("RoleName"),
                        field: "displayName",
                        cellTemplate: '<div class="ui-grid-cell-contents">  {{COL_FIELD CUSTOM_FILTERS}} &nbsp;  <span ng-show="row.entity.isStatic" class="label label-info" popover="' + app.localize("StaticRole_Tooltip") + '" popover-placement="bottom" popover-trigger="hover click">' + app.localize("Static") + '<\/span>&nbsp;  <span ng-show="row.entity.isDefault" class="label label-default" popover="' + app.localize("DefaultRole_Description") + '" popover-placement="bottom" popover-trigger="hover click">' + app.localize("Default") + "<\/span><\/div>"
                    },
                    {
                        name: app.localize("CreationTime"),
                        field: "creationTime",
                        //cellFilter: "date:'dd/MM/yyyy'"
                        cellFilter: "momentFormat: 'L'"
                    }
                ],
                data: []
            };
            //vm.permissions.edit || vm.permissions.delete || vm.gridOptions.columnDefs.shift();
            vm.getRoles = function () {
                vm.loading = true;
                roleService.getRoles({})
                    .success(function ($scope) { vm.gridOptions.data = $scope.items })
                    .finally(function () { vm.loading = false })
            };
            vm.editRole = function (currentItem) { showNewOrEditDialog(currentItem.id) };
            vm.deleteRole = function (currentItem) {
                abp.message.confirm(app.localize("RoleDeleteWarningMessage", currentItem.displayName),
                    function ($modal) {
                        $modal && roleService.deleteRole({ id: currentItem.id })
                        .success(function () {
                            vm.getRoles();
                            abp.notify.success(app.localize("SuccessfullyDeleted"))
                        })
                })
            };
            vm.createRole = function () { showNewOrEditDialog(null) };
            vm.getRoles()
        }
    ]);
})();