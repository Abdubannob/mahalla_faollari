let table = document.querySelector('.table-group-divider')
let Qudratjon = document.getElementById("Qudratjon")
let Akbarxon = document.getElementById("Akbarxon")
let Nazarov = document.getElementById("Azizbek")
let Mazokirov = document.getElementById("Sultonbek")
let Xokimov = document.getElementById("Xokimov")
let p = document.getElementById("Polatjon")
let Ixtiyorjon = document.getElementById("Ixtiyorjon")
let trr = document.querySelector(".tr")
let Title = document.querySelector(".wrapper h1")
const searchInput = document.querySelector('.input')
const clearButton = document.getElementById('clear')

const db = [ "Abdulaziz", "Bahodir", "Nuriddin"]
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
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Boburjon",
        money: 110000,
        count: 0,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Xayrullo",
        money: 110000,
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

const Akbars = [
    {
        numbers: 1,
        name: "Saidahmadxon",
        money: 900000,
        count: 12,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Sherzodbek",
        money: 225000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Nuriddin",
        money: 100,
        count: "",
        value: "$",
        equivalent: "$"
    },
    {
        numbers: 4,
        name: "Abdubannob",
        money: 225000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Halimjon",
        money: 225000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Azizbek",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Ixtiyorjon",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Ahmadjon",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Jasurbek",
        money: 750000,
        count: 10,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Ayubxon",
        money: 150000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Ikromjon",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Po'latjon",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 13,
        name: "Qudratjon",
        money: 150000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 14,
        name: "Jahongirxon",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 15,
        name: "Xokimov X",
        money: 150000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 16,
        name: "Azamjon",
        money: 500000,
        count: "Pulga",
        value: "",
        equivalent: "so'm"
    },

]

const Azizbek = [
    {
        numbers: 1,
        name: "Ayubxon",
        money: 150000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Jasurbek",
        money: 750000,
        count: 10,
        value: "kg",
        equivalent: "so'm"
    },
  
    {
        numbers: 3,
        name: "Saidahmadxon",
        money: 525000,
        count: 7,
        value: "kg",
        equivalent: "so'm"
    },

    {
        numbers: 4,
        name: "Nuriddin",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Halimjon",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },

    {
        numbers: 6,
        name: "Ahmadjon",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
  
    {
        numbers: 7,
        name: "Abdulaziz",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Xokimov X",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Sultonbek",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },

    {
        numbers: 10,
        name: "Ikrom",
        money: 375000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },


]

const Sultonbek = [
    {
        numbers: 1,
        name: " Ahmadjon",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Ixtiyorjon",
        money: 300000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
     
    },
    {
        numbers: 3,
        name: "Abdulaziz",
        money: 200,
        count: "",
        value: "$",
        equivalent: "$"
    },
    {
        numbers: 4,
        name: "Saidahmadxon",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Ayubxon",
        money: 160000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: " Bahodir",
        money: 240000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Nuriddin",
        money: 400000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: " Ikrom ",
        money: 400000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Jasurbek",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Azamjon",
        money: 400000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: " Halimjon ",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Sherzodbek",
        money: 240000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },

    {
        numbers: 13,
        name: "Azizbek",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },

]

const XokimovX = [
    {
        numbers: 1,
        name: "  Jasurbek",
        money: 400000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Ayubxon",
        money: 160000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
     
    },
    {
        numbers: 3,
        name: "Azizbek",
        money: 400000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Halimjon",
        money: 160000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Abdulaziz",
        money: 160000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Ixtiyorjon",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Nuriddin",
        money: 240000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "  Azamjon",
        money: 320000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: " Ikrom",
        money: 400000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Abdubannob ",
        money: 160000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    }
]

const Ixtiyor = [
    {
        numbers: 1,
        name: "  Jasurbek",
        money: 255000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Jo'rayev B",
        money: 425000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
     
    },
    {
        numbers: 3,
        name: "Ahmadjon",
        money: 255000,
        count: 3,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Halimjon",
        money: 170000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Abdulaziz",
        money: 340000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Xokimov X",
        money: 340000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Nuriddin",
        money: 340000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Azamjon",
        money: 750000,
        count: 0,
        value: "O'zlari kelishadi",
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: " Ikrom",
        money: 425000,
        count: 5,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Abdubannob ",
        money: 170000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Sultonbek",
        money: 340000,
        count: 4,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Abulqosimov X",
        money: 170000,
        count: 2,
        value: "kg",
        equivalent: "so'm"
    },
    {
        numbers: 13,
        name: "Saydahmadxon",
        money: 340000,
        count: 4,
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

Akbarxon.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Akbar.length,
    element = null;
for (let i = 0; i < length; i++) {
    element =  Akbar[i];
    // let number = 1
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

Nazarov.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Azizbek.length,
    element = null;
for (let i = 0; i < length; i++) {
    element =  Azizbek[i];
    // let number = 1
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

Title.innerHTML = "Azizbekka To'yona"
}

Mazokirov.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Sultonbek.length,
    element = null;
for (let i = 0; i < length; i++) {
    element =  Sultonbek[i];
    // let number = 1
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person" >${element.name}</td>
    <td  class="money">${element.money} ${element.equivalent} </td>
    <td class="value">${element.count} ${element.value}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Sultonbekka To'yona"
}

Xokimov.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = XokimovX.length,
    element = null;
for (let i = 0; i < length; i++) {
    element = XokimovX[i];
    // let number = 1
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person" >${element.name}</td>
    <td class="money">${element.money} ${element.equivalent} </td>
    <td class="value">${element.count} ${element.value}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Xurshidbekka To'yona"
}

p.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    // let length = XokimovX.length,
    element = null;
for (let i = 0; i < length; i++) {
    // element = XokimovX[i];
    // let number = 1
    let html = `
    <tr>
    <th class="number" scope="row"></th>
    <td class="person" ></td>
    <td class="money"> </td>
    <td class="value"></td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Po'latjon o'zi olgan"
}


Ixtiyorjon.onclick = () => {
    table.innerHTML = ""
    Title.innerHTML = ""
    let length = Ixtiyor.length,
    element = null;
for (let i = 0; i < length; i++) {
    element = Ixtiyor[i];
    // let number = 1
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person" >${element.name}</td>
    <td class="money">${element.money} ${element.equivalent} </td>
    <td class="value">${element.count} ${element.value}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Ixtiyorjonga to'yona"
}
















// function search_animal() {
//     let input = document.getElementById('searchbar').value
//     input=input.toLowerCase();
//     let x = document.getElementsByClassName('person');
//     let m = document.getElementsByClassName('money');
//     let v = document.getElementsByClassName('value'); 
//     let n = document.getElementsByClassName('number');
//     let el = document.getElementsByClassName("person").nextElementSibling;
    
//     for (i = 0; i < x.length; i++) { 
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display="none";
//             m[i].style.display="none";
//             v[i].style.display="none";
//             n[i].style.display="none";
//         }
//         else {
//             x[i].style.display="list-item";    
//             m[i].style.display="list-item";
//             v[i].style.display="list-item";
//             n[i].style.display="list-item";

//         }
//     }
// }
