using Microsoft.EntityFrameworkCore;
using NewsApplication.Models;

namespace NewsApplication.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Rubricator> Rubricators { get; set; }
        public DbSet<Article> Articles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Article>()
                .HasOne(p => p.Rubricator)
                .WithMany(p => p.Articles)
                .HasForeignKey(p => p.RubricatorId);

            modelBuilder
                .Entity<Rubricator>()
                .HasMany(p => p.Articles)
                .WithOne(p => p.Rubricator)
                .HasForeignKey(p => p.RubricatorId);
        }
    }
}
