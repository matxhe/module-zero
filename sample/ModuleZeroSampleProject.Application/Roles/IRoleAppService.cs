using Abp.Application.Services;
using Abp.Application.Services.Dto;
using ModuleZeroSampleProject.Roles.Dto;

namespace ModuleZeroSampleProject.Roles
{
    public interface IRoleAppService: IApplicationService
    {
        ListResultOutput<RoleDto> GetRoles();
    }
}
