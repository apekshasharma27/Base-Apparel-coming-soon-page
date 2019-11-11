function validateEmail()
{

const email = document.getElementById("input-item");
if(!email.checkValidity())
{
  email.setCustomValidity("Please provide a valid email");
  document.getElementById("invalid-feedback").innerHTML = email.validationMessage;
}
else
{
  email.setCustomValidity("");
}
}
