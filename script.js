function validateSyntax() {
  let input = document.getElementById("petInput").value;
  // Validation logic goes here
  document.getElementById('petInput').addEventListener("validateSyntax", function(event) {
    event.preventDefault;

    let result = document.getElementById("Valid Syntax").value;
    let petInput = document.getElementById("pet_numAlpha").value;
  
  }
  petInput.addEventListener('validateSyntax',(e)=>{
    if (petInput === pet_numAlpha) {
        e.preventDefault();
        console.log(result);
      } else {
        console.log("Invalid Syntax");
      } 
  } )
    
  

  // Placeholder for validation result

  // TODO: Write your validation logic here
  
  // Check if input starts with 'pet_' and followed  by alphanumeric characters
}
