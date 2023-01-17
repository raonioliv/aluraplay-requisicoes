import { conectApi } from "./conectApi.js";
const list = document.querySelector("[data-list]")

function buildCard(title, description, url, img){ 
    const video = document.createElement("li")
    video.className = "videos__item"
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}
    title="${title}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
    </iframe>
    <div class="descricao-video">
        <img src="${img}">
        <h3>${title}</h3>
        <p>${description}</p>
    </div>

    `

    return video
}

async function listVideos(){ 
    const videosDB = await conectApi.conectEndpoint()
    videosDB.forEach(element => list.appendChild(
        buildCard(element.titulo, element.descricao, element.url, element.imagem)
    ))
}

listVideos()