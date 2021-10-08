using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL.Articles
{
    public record RemovePayload(bool isRemoved, string error);
}
