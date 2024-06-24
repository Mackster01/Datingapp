

using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddApplicationService(builder.Configuration);
builder.Services.AddIdentityService(builder.Configuration);

var app = builder.Build();


app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200", 
"http://localhost:4200"));

app.UseAuthentication();
app.UseAuthorization();
//app.UseHttpsRedirection();

//app.UseAuthorization();

app.MapControllers();

app.Run();
