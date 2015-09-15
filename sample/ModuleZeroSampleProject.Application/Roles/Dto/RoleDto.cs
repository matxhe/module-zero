using System;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using ModuleZeroSampleProject.Authorization;

namespace ModuleZeroSampleProject.Roles.Dto
{
    [AutoMapFrom(typeof(Role))]
    public class RoleDto : EntityDto<int>
    {
        public int Id { get; set; }

        public string DisplayName { get; set; }

        public bool IsDefault { get; set; }

        public bool IsStatic { get; set; }

        public string Name { get; set; }

        public DateTime CreationTime { get; set; }
    }
}
