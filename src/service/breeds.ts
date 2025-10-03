import api from './api'

const getAllBreeds = async ():Promise<string[]> => {
  try {
    const { data } = await api.get<string[]>("/api/breeds")
  
    return data
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Sorry, we encountered some problems while retrieving your data.");
  }
}

const getBreedImages = async (breedName: string):Promise<string[]> => {
  try {
    const { data } = await api.get<string[]>(`/api/breeds/${breedName}/images`)
    
    return data
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Sorry, we encountered some problems while retrieving your data.");
  }
}

export {
  getAllBreeds,
  getBreedImages
}