using Abp.Domain.Repositories;
using Abp.MultiTenancy;
using ModuleZeroSampleProject.Authorization;
using ModuleZeroSampleProject.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModuleZeroSampleProject.MultiTenancy
{
    public class TenantManager : AbpTenantManager<Tenant, Role, User>
    {
        public TenantManager(IRepository<Tenant> tenantRepository)
            : base(tenantRepository)
        {

        }
    }
}
