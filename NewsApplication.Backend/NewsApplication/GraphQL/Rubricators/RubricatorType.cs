using HotChocolate;
using HotChocolate.Types;
using NewsApplication.Data;
using NewsApplication.Models;
using System.Linq;

namespace NewsApplication.GraphQL.Rubricators
{
    public class RubricatorType : ObjectType<Rubricator>
    {
        protected override void Configure(IObjectTypeDescriptor<Rubricator> descriptor)
        {
            descriptor.Description("Сущность представляет собой рубрику новостей");

            descriptor
                .Field(c => c.Articles)
                .ResolveWith<Resolvers>(c => c.GetArticles(default!, default!))
                .UseDbContext<AppDbContext>()
                .Description("Это новости, которые принадлежат рубрике");
        }

        private class Resolvers
        {
            public IQueryable<Article> GetArticles(Rubricator rubricator, [ScopedService] AppDbContext context)
            {
                return context.Articles.Where(p => p.RubricatorId == rubricator.Id);
            }
        }
    }
}
