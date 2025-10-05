import api from "./api"

const addBreedFavorite = async (breedName: string):Promise<undefined> => {
  try {
    await api.post<string>("/api/favorites", { breed: breedName})
    return
  } catch (error) {
    console.log(error)
    throw new Error("Something unexpected happened, try again later")
  }
}

const getAllFavoriteBreeds = async ():Promise<string[]> => {
  try {
    const { data } = await api.get<string[]>("/api/favorites")

    return data
  } catch (error) {
    console.log(error)
    throw new Error("Something unexpected happened, try again later")
  }
}

const removeBreedFavorite = async (breedName: string):Promise<undefined> => {
  try {
    await api.delete<string[]>(`/api/favorites/${breedName}`)
    return
  } catch (error) {
    console.log(error)
    throw new Error("Something unexpected happened, try again later")
  }
}

export {
  addBreedFavorite,
  getAllFavoriteBreeds,
  removeBreedFavorite
}