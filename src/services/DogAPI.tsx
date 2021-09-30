import { DogType } from "../App";

export const DogBreeds = {
    Rottweiler: "rottweiler",
    Retriever: "retriever",
    Chihuahua: "chihuahua",
};

export const fetchDogImg = async (breedQuery: string): Promise<DogType> => {
    const response = await fetch(
        `https://dog.ceo/api/breed/${breedQuery}/images/random`
    );
    const body: Promise<DogType> = response.json();
    // console.log(body);
    // const message = (await body).message;
    return body;
};
