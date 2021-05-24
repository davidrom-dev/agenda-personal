
using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Task = Backend.Models.Task;

namespace Backend
{
    public class ApplicationDbContext : DbContext
    {
      public DbSet<Task> Task { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options) : base(options)
        {



        }
    }
}
