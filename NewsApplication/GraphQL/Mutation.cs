using HotChocolate;
using HotChocolate.Data;
using NewsApplication.Data;
using NewsApplication.GraphQL.Commands;
using NewsApplication.GraphQL.Platforms;
using NewsApplication.Models;
using System.Threading.Tasks;

namespace NewsApplication.GraphQL
{
    public class Mutation
    {
        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddPlatformPayload> AddPlatformAsync(AddPlatformInput input, [ScopedService] AppDbContext context)
        {
            var platform = new Platform
            {
                Name = input.Name
            };

            context.Platforms.Add(platform);
            await context.SaveChangesAsync();

            return new AddPlatformPayload(platform);
        }

        [UseDbContext(typeof(AppDbContext))]
        public async Task<AddCommandPayload> AddCommandAsync(AddCommandInput input, [ScopedService] AppDbContext context)
        {
            var command = new Command
            {
                HowTo = input.HowTo,
                PlatformId = input.PlatformId,
                CommandLine = input.CommandLine
            };
            context.Commands.Add(command);
            await context.SaveChangesAsync();

            return new AddCommandPayload(command);
        }
    }
}
