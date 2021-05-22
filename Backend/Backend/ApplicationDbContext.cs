
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend
{
    public class ApplicationDbContext : DbContext
    {
      public DbSet<Comentario> Comentario { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) : base(options)
        {



        }
    }
}
