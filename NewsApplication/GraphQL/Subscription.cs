using HotChocolate;
using HotChocolate.Types;
using NewsApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL
{
    public class Subscription
    {
        [Subscribe]
        [Topic]
        public Platform OnPlatformAdded([EventMessage] Platform platform) => platform;
        // { return platform; }
    }
}
