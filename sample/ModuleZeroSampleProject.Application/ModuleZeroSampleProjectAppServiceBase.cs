using Abp.Application.Services;
using Abp.Runtime.Session;
using ModuleZeroSampleProject.MultiTenancy;
using ModuleZeroSampleProject.Users;
using System;
using System.Threading.Tasks;

namespace ModuleZeroSampleProject
{
    /// <summary>
    /// Derive your application services from this class.
    /// </summary>
    public abstract class ModuleZeroSampleProjectAppServiceBase : ApplicationService
    {
        protected ModuleZeroSampleProjectAppServiceBase()
        {
            LocalizationSourceName = ModuleZeroSampleProjectConsts.LocalizationSourceName;
        }

        private TenantManager _tenantManager;

        public TenantManager TenantManager
        {
            get { 
                return _tenantManager; 
            }
            set { 
                _tenantManager = value; 
            }
        }

        private UserManager _userManager;

        public UserManager UserManager
        {
            get { 
                return _userManager; 
            }
            set { 
                _userManager = value; 
            }
        }

        protected virtual Task<User> GetCurrentUserAsync()
        {
            var user = UserManager.FindByIdAsync(AbpSession.GetUserId());
            if (user == null)
            {
                throw new ApplicationException("There is no current user!");
            }

            return user;
        }

        protected virtual Task<Tenant> GetCurrentTenantAsync()
        {
            return TenantManager.GetByIdAsync(AbpSession.GetTenantId());
        }
    }
}