let table = document.querySelector('.table-group-divider')
let Qudratjon = document.getElementById("Qudratjon")
let Akbarxon = document.getElementById("Akbarxon")
// let Nazarov = document.getElementById("Azizbek")
// let Mazokirov = document.getElementById("Sultonbek")
// let Xokimov = document.getElementById("Xokimov")
// let p = document.getElementById("Polatjon")
// let Ixtiyorjon = document.getElementById("Ixtiyorjon")
let trr = document.querySelector(".tr")
let Title = document.querySelector(".wrapper h1")
const searchInput = document.querySelector('.input')
const clearButton = document.getElementById('clear')

const db = [ "Abdulaziz", "Bahodir", "Nuriddin"]
const database = [
    {
        numbers: 1,
        name: "Kamoliddin",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Sirojiddin",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Doston",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Ahmadillo",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Abdubannob",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Xayrullo",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Akbarxon",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Boburjon",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Muxriddin",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Abdulloxon Mamatov",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Asil domla",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Hosiljon",
        money: 0,
        count: "0",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 13,
        name: "Qudrat 83",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 14,
        name: "Abdulloxon",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 15,
        name: "Sarvarbek",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 15,
        name: "Sardorbek",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    }


]
const Akbar = [
    {
        numbers: 1,
        name: "Qudratjon",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Ahmadillo",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Qudratjon 83",
        money: 0,
        count: "1",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Kamoliddin",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Hosiljon",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Sirojiddin",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Sardorbek",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Abdubannob",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Muxriddin",
        money: 0,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Dostonbek",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Boburjon",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Xayrullo",
        money: 0,
        count: "0",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 13,
        name: "Sarvar",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 14,
        name: "Azizbek",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    }
]



Qudratjon.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = database.length,
        element = null;
    for (let i = 0; i < length; i++) {
        element =  database[i];
        // let number = 1
        let html = `
        <tr class="tr">
        <th class="number" scope="row">${element.numbers}</th>
        <td class="person" >${element.name}</td>
        <td class="money">${element.money} ${element.equivalent} </td>
      </tr>
        `
    
        table.innerHTML += html
      console.log(element)
    }
    Title.innerHTML = "Qudartjon oshida yig'ildi"
}

Akbarxon.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Akbar.length,
        element = null;
    for (let i = 0; i < length; i++) {
        element =  Akbar[i];
        // let number = 1
        let html = `
        <tr class="tr">
        <th class="number" scope="row">${element.numbers}</th>
        <td class="person" >${element.name}</td>
        <td class="money">${element.money} ${element.equivalent} </td>
      </tr>
        `
    
        table.innerHTML += html
      console.log(element)
    }
    Title.innerHTML = "Akbarxon aka oshida yig'ildi"
}

