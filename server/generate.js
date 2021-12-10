var database = { products: [] };

database.products.push([
  {
    name: "MACBOOK PRO",
    description: "Development Machine",
    state: "new",
    category: "laptop",
    date: 1635842615,
    tag: ["LAPTOP", "APPLE"],
    id: "5",
  },
  {
    name: "HP OMEN",
    description: "Gaming machine",
    state: "new",
    category: "laptop",
    date: 1635842615,
    tag: ["HP", "LAPTOP"],
    id: "6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4MchLKUmVNdpGEcYNuzfc3g64grbtup9lQ&usqp=CAU",
  },
  {
    name: "HP BEAST",
    description: "DEPLOYMENT",
    state: "new",
    category: "laptop",
    date: 1635842615,
    tag: ["HP", "SERVER"],
    id: "7",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4MchLKUmVNdpGEcYNuzfc3g64grbtup9lQ&usqp=CAU",
  },
  {
    name: "HP OMEN",
    description: "Gaming machine",
    state: "new",
    category: "laptop",
    date: 1635842615,
    tag: ["HP", "LAPTOP"],
    id: "8",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4MchLKUmVNdpGEcYNuzfc3g64grbtup9lQ&usqp=CAU",
  },
  {
    name: "MSI",
    description: "Presentation machine",
    state: "new",
    category: "laptop",
    date: 1635842615,
    tag: ["HP"],
    id: "9",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4MchLKUmVNdpGEcYNuzfc3g64grbtup9lQ&usqp=CAU",
  },
]);

console.log(JSON.stringify(database));
