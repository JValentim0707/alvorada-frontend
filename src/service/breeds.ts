import api from './api'

const getAllBreeds = async ():Promise<string[]> => {
  try {
    const { data } = await api.get<string[]>("/api/breeds")
  
    return data
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Sorry, we encountered some problems while retrieving your data."); // lança o erro
  }
}

export {
  getAllBreeds
}