using HotChocolate;
using HotChocolate.Data;
using NewsApplication.Data;
using NewsApplication.Models;
using System.Linq;

namespace NewsApplication.GraphQL
{
    public class Query
    {
        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Article> GetArticles([ScopedService] AppDbContext context)
        {
            return context.Articles;
        }

        [UseDbContext(typeof(AppDbContext))]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Rubricator> GetRubricators([ScopedService] AppDbContext context)
        {
            return context.Rubricators;
        }
    }
}
