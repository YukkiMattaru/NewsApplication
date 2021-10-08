using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL.Articles
{
    public record AddArticleInput(string Title, string Body, Guid RubricatorId, string Announce = "");

    public class ArticleNotFoundException : Exception
    {
        public Guid Id { get; internal set; }
    }
}

