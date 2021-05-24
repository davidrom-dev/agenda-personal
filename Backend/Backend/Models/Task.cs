using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Task
    {
        public int Id { get; set; }
        [Required]
        public string Titulo { get; set; }
        [Required]

        public string Creador { get; set; }
        [Required]

        public string Texto { get; set; }
        [Required]

        public DateTime fecha { get; set; }

    }
}
