$(function() {


    $("#name").click(sendajax);
    
   
    });

function sendajax()
{
    console.log("open fun")
        $.get("student.txt",namecheck);

}
function namecheck(res)
{

  
    $("#result").empty();
    $("#result").append(res);
}

 