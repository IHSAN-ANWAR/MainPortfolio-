

// Loading bar by ai!

window.addEventListener('load', () => {
  document.querySelector('.loading-bar').style.width = '100%';
  setTimeout(() => {
    document.querySelector('.loading-bar').style.opacity = '0';
  }, 500);
});


function toggleNav() {
  document.getElementById('navLinks').classList.toggle('nav-active');
}


// Contact Information 
document.getElementById("contact-form").addEventListener('submit',(e)=>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  const nameregex = /^[A-Za-z\s'-]{2,50}$/
  const emailregex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageregex = /^.{10,1000}$/s
  
  let isValid = true;

// Clear Previous Error!
document.querySelectorAll(".error").forEach(currentElement =>{
    currentElement.textContent= "";
})

if(!nameregex.test(name)){
    document.getElementById("nameerror").textContent = "*Enter a Valid  Name!"
  isValid = false;
}

if (!emailregex.test(email)){
    document.getElementById("emailerror").textContent = "*Enter a Valid Email!"
  isValid = false;
}
 if(!messageregex.test(message)){
    document.getElementById("messageerror").textContent = "* Message Section mustn't be Empty!"
 isValid =false;
}


if (isValid) {
    let userData = [];
    let form = document.querySelectorAll("#contact-form input, #contact-form textarea");

    Array.from(form).forEach(currentElement => userData.push(currentElement.value));
    Array.from(form).forEach(currentElement => { currentElement.value = "" });

    // Show modal instead of alert
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = "Message Sent Successfully!";
    modal.style.display = "flex";

    // Close modal on button click
    document.getElementById('modal-close').onclick = () => {
      modal.style.display = "none";
    }
}

});

