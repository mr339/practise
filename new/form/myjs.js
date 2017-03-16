function  validate()
{
	let name = document.getElementById('name').value;
	let email = document.getElementById("email").value; 
	let contact = document.getElementById("contact").value;
	let age = parseInt(document.getElementById("age").value);

	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

	if (name != '' && email != '' && contact != '') 
		{ 
			if(email.match(emailReg))
			{
				if(document.getElementById("male").checked || document.getElementById("female").checked)
				{
					if(!isNaN(age) && age>=12 && age<=110)
					{
						if(contact.length == 10)
						{
							alert("All entered values are valid.Form successfully validated");
							return true;

						}
						else
						{
							alert('Enter contact number of 10 digits');
							return false;
						}

					}
					else
					{
						alert('Enter a valid age between 12 and 110');
						return false;
					}
				}
				else
				{
					alert("Pleasse select a gender");
					return false;
				}
			}
			else
			{
				alert('Enter a valid Email ');
				return false;
			}
		}
	else
	{
		alert('All fields are required');
		return false;
	}

}
		 