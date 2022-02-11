const shoes = {
  "shoes":[
    {
      "brand": "nike",
      "description": "one cool shoe",
      "id": 1,
      "photo_url": "https://imgur.com/67Zsobn",
      "side": "left",
      "size": 10,
      "style": "sneaker",
      "user_id": 3
      },
      {
      "brand": "redwing",
      "description": "there's a boot in my snake",
      "id": 2,
      "photo_url": "https://i.imgur.com/8PHxguM.jpg",
      "side": "right",
      "size": 9,
      "style": "boot",
      "user_id": 2
      },
      {
      "brand": "Nordstrom",
      "description": "super slick shoe",
      "id": 3,
      "photo_url": "https://i.imgur.com/nAQO1Tk.jpg",
      "side": "left",
      "size": 12,
      "style": "dress",
      "user_id": 1
      }
  ]
}

const returnValidShoes = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(shoes), 1000);
  });
};

export { returnValidShoes };