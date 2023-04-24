/*=============== scroll sections active link ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== scroll sections active link ===============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    /*=============== sticky navbar ===============*/
    let header = document.querySelector('header');

    header.classList.toggle('stick', window.scrollY > 100);

    /*===== remove toggle icon and navbar when click navbar link =====*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*=============== scroll reveal ===============*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=============== typed js ===============*/
const typed = new Typed('.multiple-text', {
    strings: ['Técnico de Enfermagem'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/*=============== Forms ===============*/


const handleSubmit = (event) => {
    event.preventDefault();


    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const phone = document.querySelector('input[name=phone]').value;

    fetch('https://api.sheetmonkey.io/form/5TWSKHymrkCZuiwtC3cjQj', {

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ NAME: name, EMAIL: email, PHONE: phone }),
    })
};

document.querySelector('form').addEventListener('submit', handleSubmit);


const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

/*=============== Validação Forms ===============*/

const fields = document.querySelectorAll("[required]")



function customValidation(event) {

    const field = event.target

    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verificar se tem erro
            if (error != "customError" && field.validity[error]){
                foundError = error
            }
        }

        return foundError;
    }

const error = verifyErrors()

if (error) {
        // trocar mensagem de required
        field.setCustomValidity("Esse campo é obrigatório");

    }

 else {
        field.setCustomValidity("");
        openThanks();
    }
    
}

for ( const field of fields) {

    field.addEventListener("invalid", customValidation)


}

/*=============== Thanks ===============*/

let thanks = document.getElementById("thanks");
let container = document.querySelector(".home-content")
let containerImg = document.querySelector(".home-img ")




function  openThanks(){
    
    thanks.classList.add("open-thanks");
     
    container.style.display = 'none';
    //containerImg.style.display = 'none';
        
    }



function  closeThanks(){
    thanks.addEventListener("click", () => {
        location.reload();
    })

   
}





