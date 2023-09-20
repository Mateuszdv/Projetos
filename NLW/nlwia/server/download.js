import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) =>
  new Promise((resolve, reject) => {
    const videoURL = "https://www.youtube.com/watch?v=" + videoId
    console.log("Realizando o download do vídeo:", videoId)

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
      .on("info", (info) => {
        //  Situação exclusiva para shorts do youtube.
        // const seconds = info.formats[0].approxDurationMs / 1000
        // if(seconds > 60){
        //   throw new Error("Esse vídeo não é um Shorts, ele possui mais de 60 segundos")
        // }
      })
      .on("end", () => {
        console.log("Download do vídeo finalizado.")
        resolve()
      })
      .on("error", (error) => {
        console.log("Não foi possível fazer o download do vídeo:", error)
        reject(error)
      })
      .pipe(fs.createWriteStream("./tmp/audio.mp4"))
  })
