using System.Drawing;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
//commented out 6/9 smackey- 'replaced controllerbase with BaseApicontroller'
//[ApiController]
//[Route("api/[controller]")] // /api/users

public class UsersController : BaseApiController

{
    private readonly DataContext _context;

    public UsersController(DataContext context)
{
    _context = context;
}

[HttpGet]
public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
{
    var users = await _context.Users.ToListAsync();
    
    return users;
}

[HttpGet("{id}")] // /api/users/2
public async Task<ActionResult<AppUser>> GetUser(int id)
{
   
    return await _context.Users.FindAsync(id);
}

}


