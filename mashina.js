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



const Azizbek = [
    {
        numbers: 1,
        name: "Zaks",
        money: 50000,
        equivalent: "qilingan"
    },

]

const Sultonbek = [
    {
        numbers: 1,
        name: "Ahmadjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Po'latjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Abdulaziz",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Baxodir",
        money: 100000,
        equivalent: "so'm"
    },
    
    {
        numbers: 5,
        name: "Jahongirxon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Saydahmadxon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Nuriddin",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Baxodirxon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Abdubannob",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Ikrom",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Azam",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Ixtiyorjon",
        money: 100000,
        equivalent: "so'm"
    },

    {
        numbers: 13,
        name: "Sardorbek",
        money: 100000,
        equivalent: "so'm"
    },

]

const XokimovX = [
    {
        numbers: 1,
        name: "Ixtiyorjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Ayubxon",
        money: 100000,
        equivalent: "so'm"
    },
 
    {
        numbers: 3,
        name: "Abdulaziz",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Baxodirxon",
        money: 100000,
        equivalent: "so'm"
    },
  
    {
        numbers: 5,
        name: "Saydahmadxon",
        money: 100000,
        equivalent: "so'm"
    },
  

    {
        numbers: 6,
        name: "Ikrom",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Azam",
        money: 100000,
        equivalent: "so'm"
    },
    

]

const Ixtiyor = [
    {
        numbers: 1,
        name: "Sultonbek",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Abulqosimov X",
        money: 100000,
        equivalent: "so'm"
    },
 
    {
        numbers: 3,
        name: "Abdulaziz",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Baxodir",
        money: 100000,
        equivalent: "so'm"
    },
  
    {
        numbers: 5,
        name: "Saydahmadxon",
        money: 100000,
        equivalent: "so'm"
    },
  

    {
        numbers: 6,
        name: "Ikrom",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Po'latjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Halimjon",
        money: 100000,
        equivalent: "so'm"
    },
]

const Pulatjon = [
    {
        numbers: 1,
        name: "Ahmadjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 2,
        name: "Xurshidbek",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 3,
        name: "Abdulaziz",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 4,
        name: "Baxodirxon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 5,
        name: "Azizbek",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 6,
        name: "Ayubxon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 7,
        name: "Saydahmadxon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 8,
        name: "Abulqosimov X",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 9,
        name: "Halimjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 10,
        name: "Sultonbek",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 11,
        name: "Abdubannob",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 12,
        name: "Ikrom",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 13,
        name: "Azam",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 14,
        name: "Ixtiyorjon",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 15,
        name: "Qudrat",
        money: 100000,
        equivalent: "so'm"
    },
    {
        numbers: 16,
        name: "Sardorbek",
        money: 100000,
        equivalent: "so'm"
    },

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
    <th class="number" scope="row">1</th>
    <td class="person">Zaks qilingan</td>
    <td class="money"> </td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Azizbekka Mashina puli"
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

  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Sultonbekka Mashina puli"
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
    let length = Pulatjon.length,
    element = null;
for (let i = 0; i < length; i++) {
    element = Pulatjon[i];
    // let number = 1
    let html = `
    <tr>
    <th class="number" scope="row">${element.numbers}</th>
    <td class="person" >${element.name}</td>
    <td class="money">${element.money} ${element.equivalent}</td>
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Po'latjonga Mashina puli"
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
  </tr>
    `

    table.innerHTML += html
  console.log(element)
}

Title.innerHTML = "Ixtiyorjonga Mashina puli"
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
