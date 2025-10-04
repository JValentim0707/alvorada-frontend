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

const getAllFavoriteBreeds = ():Promise<string[]> => {
  const { data } = api.get<string[]>("/api/favorites")

  return data
}

export {
  addBreedFavorite
}