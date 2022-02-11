const shoes = {
  "shoes":[
    {
      "description": "comfortable shoes",
      "id": 1,
      "brand": "Nike",
      "side": "right",
      "size": 9,
      "style": "sneakers",
      "user_id": 1,
      "url": "some_url"
    },
    {
      "description": "adidas boots",
      "id": 2,
      "brand": "Adidas",
      "side": "right",
      "size": 6,
      "style": "boots",
      "user_id": 2,
      "url": "some_url"
    },
    {
      "description": "NOT comfortable",
      "id": 3,
      "brand": "Nike",
      "side": "left",
      "size": 8,
      "style": "heels",
      "user_id": 3,
      "url": "some_url"
    }
  ]
}

const returnValidShoes = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => resolve(shoes), 1000);
  });
};

export { returnValidShoes };