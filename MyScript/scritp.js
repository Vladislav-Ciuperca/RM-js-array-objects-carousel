let team = [
    {
        Nome: "Wayne Barnett",
        Ruolo: "Founder & CEO",
        Immagine: "wayne-barnett-founder-ceo.jpg",
    },
    {
        Nome: "Angela Caroll",
        Ruolo: "Chief Editor",
        Immagine: "angela-caroll-chief-editor.jpg",
    },
    {
        Nome: "Walter Gordon",
        Ruolo: "Office Manager",
        Immagine: "walter-gordon-office-manager.jpg",
    },
    {
        Nome: "Angela Lopez",
        Ruolo: "Social Media Manager",
        Immagine: "angela-lopez-social-media-manager.jpg",
    },
    {
        Nome: "Scott Estrada",
        Ruolo: "Developer",
        Immagine: "scott-estrada-developer.jpg",
    },
    {
        Nome: "Barbara Ramos",
        Ruolo: "Graphic Designer",
        Immagine: "designer.jpg",
    },
]

let carousel = document.getElementById("carousel")
let buttons = document.getElementsByClassName("button")

// inserisco le immaginin nel DOM
for (const element of team) {

    carousel.innerHTML += `<div class="caption">${element.Nome}</div>`
    carousel.innerHTML += `<img src="img/${element.Immagine}" class="img">`

}

let images = document.getElementsByClassName("img")
let captions = document.getElementsByClassName("caption")


// do la classe active a solo un immmagine
for (const element of images) {
    // console.log(element);
    if (!element.classList.contains("active")) {
        !element.classList.add("active")
        break
    }
}
for (const element of captions) {
    // console.log(element);
    if (!element.classList.contains("active")) {
        !element.classList.add("active")
        break
    }
}


// itero sui bottoni
for (const button of buttons) {

    button.addEventListener('click', function () {
        // se clicco precedente
        if (button.classList.contains("prev")) {
            // console.log("cliccato Prev");

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const caption = captions[i];

                console.log(caption,i);
                

                if (image.classList.contains("active")) {
                    image.classList.remove("active")
                    caption.classList.remove("active")

                    if (i == 0) {
                        i = images.length - 1
                        images[i].classList.add("active")
                        captions[i].classList.add("active")
                    }
                    else {
                        i--
                        images[i].classList.add("active")
                        captions[i].classList.add("active")
                    }

                }
            }

        }

        // se clicco prossimo
        else {
            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const caption = captions[i];
                
                if (image.classList.contains("active")) {
                    image.classList.remove("active")
                    caption.classList.remove("active")
                    if(i == images.length - 1){
                        i = 0
                        images[i].classList.add("active")
                        captions[i].classList.add("active")
                    }
                    else{
                        i++
                        images[i].classList.add("active")
                        captions[i].classList.add("active")
                    }
                    console.log("immagine "+ i);
                }
            }
        }
    })
}




