import { conectApi } from "./conectApi.js"

const form = document.querySelector("[data-form]")

function createVideo(event){ 
    const title = document.querySelector("[data-titulo]").value
    const description = Math.floor(Math.random() * 10).toString()
    const url = document.querySelector("[data-url]").value
    const img = document.querySelector("[data-imagem]").value

    conectApi.createVideo(title, description, url, img)

    window.location.href = "../pages/envio-concluido.html"
}

form.addEventListener("submit", evento => createVideo(evento))