using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/tasks")]
    [ApiController]
    public class TaskController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public TaskController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task <IActionResult> GetTasks()
        {
            try
            {
                var listComentarios =   _context.Comentario.ToList();

                return Ok(listComentarios);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

       
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTask(int id)
        {
            try
            {
                var comentario = await _context.Comentario.FindAsync(id);
                
                if(comentario == null)
                {
                    NotFound();
                }

                return Ok(comentario);
            }

            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Addtask([FromBody] Comentario comentario)
         {
            DateTime Fecha = DateTime.Now;

            _context.Add(comentario);
            

            _context.SaveChanges();
            return Ok(comentario);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> EditTask(int id, [FromBody] Comentario comentario)
        {
            try
            {

                if (id!= comentario.Id)
                {
                    return BadRequest();
                }
                _context.Update(comentario);

                await _context.SaveChangesAsync();
                return Ok(new { messsage = "Tarea actualizada con exito" });
            }

            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            try
            {
                var comentario = await _context.Comentario.FindAsync(id);

                if(comentario == null)
                {
                    return NotFound();
                }
                _context.Comentario.Remove(comentario);

                await _context.SaveChangesAsync();
                return Ok(new{ messsage = "Tarea eliminada con exito" });
            }

            catch(Exception ex )
            {

                return BadRequest(ex.Message);
            }
           
            
        }
    }
}
