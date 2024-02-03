const cardContainer = document.querySelector(".card-container");

const data = [
  {
    image: "https://i.pravatar.cc/150",
    name: "Ciara Lee",
    trees: "20",
  },
  {
    image: "https://i.pravatar.cc/150",
    name: "Jeffrey Perrine",
    trees: "64",
  },
  {
    image: "https://i.pravatar.cc/150",
    name: "Anette Roberts",
    trees: "28",
  },
  {
    image: "https://i.pravatar.cc/150",
    name: "Jeremy Brown",
    trees: "84",
  },
];

const appendHtml = () => {
  let count = 1;
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img
        class="profile-image"
        src="https://i.pravatar.cc/150/${count++}"
        alt="profile pic"
        height="150"
        width="auto"
        />
        <p class="name">${item.name}</p>
        <span class="trees-span">${item.trees} Trees</span>
`;
    cardContainer.appendChild(div);
  });
};

appendHtml();
