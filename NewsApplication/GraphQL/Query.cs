using HotChocolate;
using NewsApplication.Data;
using NewsApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL
{
    public class Query
    {
        public IQueryable<Platform> GetPlatforms([Service] AppDbContext context)
        {
            return context.Platforms;
        }
    }
}
