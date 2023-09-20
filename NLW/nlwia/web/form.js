import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const videoURL = input.value

  if (videoURL.includes("shorts")) {
    content.textContent = "Esse vídeo é um short, escolha outro."
    return
  }
  //https://www.youtube.com/watch?v=m7buegVDEhE
  //https://youtu.be/m7buegVDEhE
  //https://youtu.be/m7buegVDEhE?t=738
  //https://youtu.be/m7buegVDEhE?si=68eC1hZnAXJlEbMa

  let finalID = ""

  if (videoURL.includes("https://youtu.be/")) {
    const [_, params] = videoURL.split("be/")
    const [videoID] = params.split("?t")[0].split("?si")
    console.log({ videoID })
    finalID = videoID
  } else {
    const [_, videoID] = videoURL.split("/watch?v=")
    console.log(videoID)
    finalID = videoID
  }

  content.textContent = "Obtendo o texto do áudio..."
  try {
    console.log("Entrou")
    const transcription = await server.get("/summary/" + finalID)
    content.textContent = transcription.data.result
    console.log(transcription)
  } catch (error) {
    console.log(error)
    content.textContent = error.response.data.error
  }
})
