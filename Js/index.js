const humburugr = document.querySelector(".humburugr");
const navbar = document.querySelector(".navbar");

if (humburugr && navbar) {
  let isNavbarActive = false;

  humburugr.addEventListener("click", () => {
    isNavbarActive = !isNavbarActive;
    navbar.classList.toggle("active", isNavbarActive);
  });

  window.addEventListener("scroll", () => {
    const scrollThreshold = 60;
    const shouldHideNavbar = window.scrollY > scrollThreshold;

    if (shouldHideNavbar && isNavbarActive) {
      isNavbarActive = false;
      navbar.classList.remove("active");
    }
  });
}

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  if (answer.style.display === 'block') {
      answer.style.display = 'none';
  } else {
      answer.style.display = 'block';
  }
}

const contact = document.querySelector('.contact-fo')

let name = document.getElementById('name')
let email = document.getElementById('email')
let message = document.getElementById('message')


contact.addEventListener('submit',(e)=>{
  e.preventDefault();
  let fromData = {
    name: name.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000');
    xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email sent');
      name.value = '';
      email.value = '';
      message.value = ''
    }else{
      alert('Somthing went Wrong!')
    }
  }

  xhr.send(JSON.stringify(fromData));
})