const users = [
  {
    name: "Dash Parr",
    powerLevel: 7,
    age: 10,
    favColor: "red",
    superName: null
  },
  {
    name: "Violet Parr",
    powerLevel: 9,
    age: 14,
    favColor: "violet",
    superName: null
  },
  {
    name: "Bob Parr",
    powerLevel: 6,
    age: 40,
    favColor: "orange",
    superName: "Mr. Incredible"
  },
  {
    name: "Helen Parr",
    powerLevel: 7,
    age: 38,
    favColor: "white",
    superName: "Elastigirl"
  },
  {
    name: "Lucius Best",
    powerLevel: 6,
    age: 41,
    favColor: "lightblue",
    superName: "Frozone"
  }
];


//Derived State: State that was derived from other state

//Filter method
//Only show the super heros with a powerLevel of 7 or greater
//Create a new array somehow to plug in down below
const filteredUsers = users.filter((element) => {
    return (element.powerLevel >= 7);
});

//Map Method
//Create a new array that has all the previous users,
//but does not contain their powerLevel or age properties
const mappedUsers = users.map((element) => {
    console.log(element);
    return {
        name: element.name,
        favColor: element.favColor,
        superName: element.superName
    }
});
console.log(mappedUsers);

//A few ways to copy an array in order to prevent mutating the original array
let copiedArr = users.slice(0);
copiedArr = [...users];
copiedArr = Array.from(users);
//"Array" is a built-in class that has static methods
//available on it for you to use

const sortedUsers = copiedArr.sort((a, b) => {
    // return b.powerLevel - a.powerLevel;
    if (b.powerLevel > a.powerLevel){
        return 1;
    } else if (a.powerLevel > b.powerLevel){
        return -1;
    }else {
        return a.age - b.age;
    }

});

function renderCardsData(data){
    const placeholder = document.querySelector("#placeholder");
    placeholder.innerHTML = "";

    data.forEach((user) => {
        const superCard = document.createElement("div");
        superCard.classList.add("superCard");
        const cardHeader = document.createElement("h2");
        cardHeader.textContent = `${user.name}`;
        superCard.appendChild(cardHeader);
        superCard.style.backgroundColor = user.favColor;
        
        Object.entries(user).forEach((entry) => {
            if (entry[1]){
                const cardInfo = document.createElement("p");
                cardInfo.textContent = `${entry[0]}: ${entry[1]}`;
                superCard.appendChild(cardInfo);
            }
        });

        placeholder.appendChild(superCard);
    });
    
}

//Changing this variable changes what gets displayed on the page
//We can choose any of our derived state to render instead of the whole original array
renderCardsData(sortedUsers);