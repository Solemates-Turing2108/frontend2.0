const baseURL = 'https://turingsolemates.herokuapp.com/api/v1'

const getAllShoes = async () => {
  try {
    const allShoes = await fetch(`${baseURL}/shoes`);
    return allShoes.json();
  } catch(error) {
    console.log(error);
  }
};

const postNewListing = async (data) => {
  return await fetch(`${baseURL}/shoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

const getUserListings = async (userID) => {
  return await (await fetch(`${baseURL}/users/${userID}/shoes`)).json()
}

const deleteListing = async (shoeID) => {
  const dog = (await fetch(`${baseURL}/shoes/${shoeID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }));
  return dog.status;
}

const filterListings = async (queries) => {
  try {
    const dogBoy = await fetch(`${baseURL}/shoes/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(queries)
    });
    return dogBoy.json();
  }catch(error) {
    console.log(error);
  }
}

export { getAllShoes, postNewListing, getUserListings, deleteListing, filterListings } 