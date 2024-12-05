// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// let num  = 0
// const h1 =
// setInterval(() => {
//     num++
// })


// characters

const characters = [
    {
        name: "John",
        age: 42
    },
    {
        name: "Dayneris",
        age: 25
    },
    {
        name: "Edvard",
        age: 103
    },
    {
        name: "ron",
        age: 0
    },
    {
        name: "masha",
        age: 0
    },
    {
        name: "azula",
        age: 0
    },
    {
        name: "harry potter",
        age: 0
    },
    {
        name: "jacky chan",
        age: 0
    },
    {
        name: "germiona",
        age: 0
    },
    {
        name: "rapunsel",
        age: 0
    },
    {
        name:"kitana",
        age: 7000
    },
    {
        name:"sirius",
        age: 41
    },
    {
        name: "Tony stark",
        age: 51
    },
    {
        name: "Ipman",
        age: 56
    },
    {
        name: "Mike Tyson",
        age: 59
    }
]

const wrapper = document.querySelector('.wrapper');

characters.forEach((character) => {
    const characterBlock = document.createElement("div");

    wrapper.appendChild(characterBlock);
})