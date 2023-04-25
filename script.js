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





