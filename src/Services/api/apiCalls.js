const baseURL = 'https://turingsolemates.herokuapp.com/api/v1'

const getAllShoes = async () => {
  const allShoes = await fetch(`${baseURL}/shoes`);
  return allShoes.json();
};

export { getAllShoes } 