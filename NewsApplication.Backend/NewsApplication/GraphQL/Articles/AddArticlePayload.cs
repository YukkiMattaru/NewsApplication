using NewsApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL.Articles
{
    public record AddArticlePayload(Article article);
}
