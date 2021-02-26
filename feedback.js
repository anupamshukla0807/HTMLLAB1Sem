//alert('java script attach successfully');
var val;
var name;
function subname()
{
	
	if(document.getElementById("gender").checked)
	{
		val=document.getElementById("gender").value;
		
		
		
	}
	else if(document.getElementById("gender2").checked)
	{
		val=document.getElementById("gender2").value;
	}

		
}

function fun()
{
	var firstname=document.getElementById("fname").value;
	var midname=document.getElementById("mname").value;
	var lastname=document.getElementById("lname").value;
	var suggest=document.getElementById("suggestion").value;

	
	if(firstname=="")
		alert('First name can not blank please enter your Firstname.');
	
	else if(lastname=="")
	{
		alert('last name can not blank please enter your lastname.');
	}
	else if(firstname=="1")
	{
		alert('only characters  and space allowed,numbers not allowed here');
	}
	else
	{
	var fullname;
	if(midname.trim()=="null")
		fullname=val.trim()+" "+firstname.trim()+" "+lastname.trim()+" "+suggest.trim();
	else
		fullname=val.trim()+" "+firstname.trim()+" "+midname.trim()+" "+lastname.trim()+"\n"+suggest.trim();

	document.getElementById("print").value=fullname;
	document.getElementById("print").style.color="Blue";
		
	}
	
}



