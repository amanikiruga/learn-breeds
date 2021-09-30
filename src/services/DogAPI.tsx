import { DogType } from "../App";

export const fetchDogImg = async (): Promise<DogType> => {
    const response = await fetch(
        `https://dog.ceo/api/breed/hound/images/random`
    );
    const body: Promise<DogType> = response.json();
    // console.log(body);
    // const message = (await body).message;
    return body;
};
