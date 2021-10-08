using HotChocolate;
using HotChocolate.Data;
using NewsApplication.Data;
using NewsApplication.GraphQL.Articles;
using NewsApplication.GraphQL.Rubricators;
using NewsApplication.Models;
using System;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL
{
    public class Mutation
    {
        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddRubricatorPayload> AddRubricatorAsync(
            AddRubricatorInput input,
            [ScopedService] AppDbContext context)
        {
            var rubricator = new Rubricator
            {
                Path = input.Path,
                Title = input.Title
            };

            context.Rubricators.Add(rubricator);
            await context.SaveChangesAsync();

            return new AddRubricatorPayload(rubricator);
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddArticlePayload> AddArticleAsync(AddArticleInput input, [ScopedService] AppDbContext context)
        {
            var article = new Article
            {
                Title = input.Title,
                Body = input.Body,
                RubricatorId = input.RubricatorId,
                Announce = input.Announce,
                PublicationTime = DateTime.Now
            };
            context.Articles.Add(article);
            await context.SaveChangesAsync();

            return new AddArticlePayload(article);
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<RemovePayload> RemoveArticleAsync(RemoveArticleInput input, [ScopedService] AppDbContext context)
        {
            var articleToDelete = context.Articles.Find(input.Id);
            if (articleToDelete == null)
            {
                return new RemovePayload(false, "Новость с заданным ID не найдена");
            }
            context.Articles.Remove(articleToDelete);
            await context.SaveChangesAsync();

            return new RemovePayload(true, "");
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<RemovePayload> RemoveRubricatorAsync(RemoveRubricatorInput input, [ScopedService] AppDbContext context)
        {
            var rubricatorToDelete = context.Rubricators.Find(input.Id);
            if (rubricatorToDelete == null)
            {
                return new RemovePayload(false, "Рубрика с заданным ID не найдена");
            }
            context.Rubricators.Remove(rubricatorToDelete);
            await context.SaveChangesAsync();

            return new RemovePayload(true, "");
        }
    }
}
