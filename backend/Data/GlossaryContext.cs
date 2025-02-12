using Microsoft.EntityFrameworkCore;
using BitcoinGlossaryAPI.Models;

namespace BitcoinGlossaryAPI.Data
{
  public class GlossaryContext : DbContext
  {
    public GlossaryContext(DbContextOptions<GlossaryContext> options) : base(options) { }

    public DbSet<GlossaryTerm> GlossaryTerms { get; set; }
  }
}
