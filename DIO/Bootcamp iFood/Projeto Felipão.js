let exp = 7200
let nome = "Gojo"
let nivel = ""

switch (true) {
  case exp < 1000:
    nivel = "Ferro"
    break

  case exp <= 2000:
    nivel = "Bronze"
    break

  case exp <= 5000:
    nivel = "Prata"
    break

  case exp <= 7000:
    nivel = "Ouro"
    break

  case exp <= 8000:
    nivel = "Platina"
    break

  case exp <= 9000:
    nivel = "Ascendente"
    break

  case exp <= 10000:
    nivel = "Imortal"
    break

  case exp > 10000:
    nivel = "Radiante"
    break
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel)
