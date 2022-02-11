import { returnValidShoes } from "../TestData/validData";

const getAllShoes = async () => {
  const allShoes = await returnValidShoes();
  return allShoes;
};

export { getAllShoes } 