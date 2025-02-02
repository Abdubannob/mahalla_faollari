let table = document.querySelector('.table-group-divider')
let Qudratjon = document.getElementById("Qudratjon")
let Akbarxons = document.getElementById("Akbarxons")
let Ahmadullo = document.getElementById("Ahmadullo")
let Kamol = document.getElementById("Kamol")
// let Nazarov = document.getElementById("Azizbek")
// let Mazokirov = document.getElementById("Sultonbek")
// let Xokimov = document.getElementById("Xokimov")
// let p = document.getElementById("Polatjon")
// let Ixtiyorjon = document.getElementById("Ixtiyorjon")
let trr = document.querySelector(".tr")
let Title = document.querySelector(".wrapper h1")
const searchInput = document.querySelector('.input')
const clearButton = document.getElementById('clear')

const database = [
    {
        numbers: 1,
        name: "Kamoliddin",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Sirojiddin",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Doston",
        money: 100000,
        count: "1",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Ahmadillo",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Abdubannob",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Xayrullo",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Akbarxon",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Boburjon",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Muxriddin",
        money: 100000,
        count: 1,
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
        money: 100000,
        count: "1",
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
const Akbars = [
    {
        numbers: 1,
        name: "Qudratjon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Ahmadillo",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Qudratjon 83",
        money: 110000,
        count: "1",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Kamoliddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Hosiljon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Sirojiddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Sardorbek",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Abdubannob",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Muxriddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Dostonbek",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Boburjon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Xayrullo",
        money: 110000,
        count: 1,
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

const Ahmad = [
    {
        numbers: 1,
        name: "Qudratjon",
        money: "OSHPAZ",
        count: 0,
        value: "",
        equivalent: ""
    },
    {
        numbers: 2,
        name: "Ahmadillo",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Qudratjon 83",
        money: 0,
        count: "0",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Kamoliddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Hosiljon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Sirojiddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Sardorbek",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Abdubannob",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Muxriddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Dostonbek",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Boburjon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Xayrullo",
        money: 110000,
        count: 1,
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
    },
    {
        numbers: 15,
        name: "Akbarxon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    }
]

const Kamoljon = [
    {
        numbers: 1,
        name: "Qudratjon",
        money: "OSHPAZ",
        count: 0,
        value: "",
        equivalent: ""
    },
    {
        numbers: 2,
        name: "Ahmadillo",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Qudratjon 83",
        money: 0,
        count: "0",
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Kamoliddin",
        money: 0,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Hosiljon",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Sirojiddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Sardorbek",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Abdubannob",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Muxriddin",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Dostonbek",
        money: 110000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Boburjon",
        money: 100000,
        count: 1,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Xayrullo",
        money: 110000,
        count: 1,
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
    },
    {
        numbers: 15,
        name: "Akbarxon",
        money: 110000,
        count: 1,
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
        <td class="value">${element.count} ${element.value}</td>
      </tr>
        `
    
        table.innerHTML += html
      console.log(element)
    }
    Title.innerHTML = "Qudrat akaga toplangan"
}

Akbarxons.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Akbars.length,
    element = null;
for (let i = 0; i < length; i++) {
    element =  Akbars[i];
    
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person">${element.name}</td>
    <td class="money">${element.money} ${element.equivalent} </td>
    <td class="value">${element.count} ${element.value}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Akbarxon akaga to'plangan"
}

Ahmadullo.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Ahmad.length,
    element = null;
for (let i = 0; i < length; i++) {
    element =  Ahmad[i];
    
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person">${element.name}</td>
    <td class="money">${element.money} ${element.equivalent} </td>
    <td class="value">${element.count} ${element.value}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Ahmadullo akaga to'plangan"
}

Kamol.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Kamoljon.length,
    element = null;
for (let i = 0; i < length; i++) {
    element =  Kamoljon[i];
    
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person">${element.name}</td>
    <td class="money">${element.money} ${element.equivalent} </td>
    <td class="value">${element.count} ${element.value}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Kamoliddin akaga to'plangan"
}