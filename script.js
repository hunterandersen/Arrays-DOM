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
    favColor: "black",
    superName: null
  },
  {
    name: "Bob Parr",
    powerLevel: 6,
    age: 40,
    favColor: "yellow",
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
    age: 40,
    favColor: "blue",
    superName: "Frozone"
  }
];


function renderCardsData(data){
    const placeholder = document.querySelector("#placeholder");
    placeholder.innerHTML = "";

    data.forEach((user) => {
        const superCard = document.createElement("div");
        superCard.classList.add("superCard");
        const cardHeader = document.createElement("h2");
        cardHeader.textContent = `${user.name}`;
        superCard.appendChild(cardHeader);
        
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

renderCardsData(users);