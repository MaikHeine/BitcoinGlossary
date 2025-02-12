using BitcoinGlossaryAPI.Data;
using BitcoinGlossaryAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BitcoinGlossaryAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class GlossaryTermsController : ControllerBase
  {
    private readonly GlossaryContext _context;

    public GlossaryTermsController(GlossaryContext context)
    {
      _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<GlossaryTerm>>> GetGlossaryTerms()
    {
      return await _context.GlossaryTerms.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GlossaryTerm>> GetGlossaryTerm(int id)
    {
      var term = await _context.GlossaryTerms.FindAsync(id);

      if (term == null) return NotFound();

      return term;
    }

    [HttpPost]
    public async Task<ActionResult<GlossaryTerm>> PostGlossaryTerm(GlossaryTerm term)
    {
      _context.GlossaryTerms.Add(term);
      await _context.SaveChangesAsync();

      return CreatedAtAction(nameof(GetGlossaryTerm), new { id = term.Id }, term);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutGlossaryTerm(int id, GlossaryTerm term)
    {
      if (id != term.Id) return BadRequest();

      _context.Entry(term).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!_context.GlossaryTerms.Any(e => e.Id == id))
          return NotFound();
        else
          throw;
      }

      return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteGlossaryTerm(int id)
    {
      var term = await _context.GlossaryTerms.FindAsync(id);
      if (term == null) return NotFound();

      _context.GlossaryTerms.Remove(term);
      await _context.SaveChangesAsync();

      return NoContent();
    }
  }
}
