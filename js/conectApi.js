import { application } from "express"
import { stringify } from "querystring"

async function conectEndpoint(){ 
    const res = await fetch("http://localhost:3000/videos")
    const resConvert = await res.json()
    return resConvert
}


async function createVideo(title, description, url, img ){ 
    const res = await fetch("http://localhost:3000/videos", { 
        method: "POST",
        headers: { 
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil vizualizações`,
            url: url,
            imagem: img
        })
    })
    const resConvert = await res.json()
    return resConvert
}


conectEndpoint()
export const conectApi = { 
    conectEndpoint,
    createVideo
}