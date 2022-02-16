const baseURL = 'https://turingsolemates.herokuapp.com/api/v1'

const getAllShoes = async () => {
  const allShoes = await fetch(`${baseURL}/shoes`);
  return allShoes.json();
};

const postNewListing = async (data) => {
  console.log(data);
  return await fetch(`${baseURL}/shoes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

const getUserListings = async (userID) => {
  console.log(userID);
  return await (await fetch(`${baseURL}/users/${userID}/shoes`)).json()
} 

export { getAllShoes, postNewListing, getUserListings } 