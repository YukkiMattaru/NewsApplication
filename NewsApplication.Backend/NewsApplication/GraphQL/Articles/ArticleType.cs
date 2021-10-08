using HotChocolate;
using HotChocolate.Types;
using NewsApplication.Data;
using NewsApplication.Models;
using System.Linq;

namespace NewsApplication.GraphQL.Articles
{
    public class ArticleType : ObjectType<Article>
    {
        protected override void Configure(IObjectTypeDescriptor<Article> descriptor)
        {
            descriptor.Description("Сущность представляет собой одну отдельно взятую новость");

            descriptor
                .Field(c => c.Rubricator)
                .ResolveWith<Resolvers>(c => c.GetRubricators(default!, default!))
                .UseDbContext<AppDbContext>()
                .Description("Это рубрика, которой принадлежит новость");
        }

        private class Resolvers
        {
            public IQueryable<Rubricator> GetRubricators(Article article, [ScopedService] AppDbContext context)
            {
                return context.Rubricators.Where(p => p.Id == article.RubricatorId);
            }
        }
    }
}
