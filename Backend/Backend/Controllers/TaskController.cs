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
                var listTasks=   _context.Task.ToList();

                return Ok(listTasks);
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
                var task = await _context.Task.FindAsync(id);
                
                if(task == null)
                {
                    NotFound();
                }

                return Ok(task);
            }

            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Addtask([FromBody] Models.Task comentario)
         {
            DateTime Fecha = DateTime.Now;

            _context.Add(comentario);
            

            _context.SaveChanges();
            return Ok(comentario);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> EditTask(int id, [FromBody] Models.Task comentario)
        {
            try
            {

                if (id!= comentario.Id)
                {
                    return BadRequest();
                }
                _context.Update(comentario);

                await _context.SaveChangesAsync();
                return Ok();
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
                var task = await _context.Task.FindAsync(id);

                if(task == null)
                {
                    return NotFound();
                }
                _context.Task.Remove(task);

                await _context.SaveChangesAsync();
                return Ok();
            }

            catch(Exception ex )
            {

                return BadRequest(ex.Message);
            }
           
            
        }
    }
}
