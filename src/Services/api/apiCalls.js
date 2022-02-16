const baseURL = 'https://turingsolemates.herokuapp.com/api/v1'

const getAllShoes = async () => {
  const allShoes = await fetch(`${baseURL}/shoes`);
  return allShoes.json();
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
  return (await fetch(`${baseURL}/shoes/search`))
}

export { getAllShoes, postNewListing, getUserListings, deleteListing, filterListings } 