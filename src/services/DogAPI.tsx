import { DogType } from "../App";

export const DogBreeds = {
    Rottweiler: "rottweiler",
    "Golden Retriever": "retriever/golden",
    "Irish Terrier": "terrier/irish",
    Labrador: "labrador",
    Shiba: "shiba",
    "English Springer": "springer/english",
    "Border Collie": "collie/border",
    Dachshund: "dachshund",
    "Tibetan Mastiff": "mastiff/tibetan",
    Pitbull: "pitbull",
    "German Shepherd": "germanshepherd",
    Chihuahua: "chihuahua",
    "Yorkshire Terrier": "terrier/yorkshire",
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
