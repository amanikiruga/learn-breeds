import { DogType } from "../App";

export const easyBreeds = {
    Chihuahua: "chihuahua",
    "Labrador Retriever": "labrador",
    "Border Collie": "collie/border",
    "German Shepherd": "germanshepherd",
    "Siberian Husky": "husky",
    "Doberman Pinscher": "doberman",
    "Saint Bernard": "stbernard",
    Rottweiler: "rottweiler",
    Dachshund: "dachshund",
    "Golden Retriever": "retriever/golden",
    "English Bulldog": "bulldog/english",
    "Shih Tzu": "shihtzu",
    "West Highland White Terrier": "terrier/westhighland",
    "French Bulldog": "bulldog/french",
    "Cardigan Welsh Corgi": "corgi/cardigan",
    "English Springer Spaniel": "springer/english",
    // Dalmatian: "dalmatian", // only showing two different images
    "Great Dane": "dane/great",
    Beagle: "beagle",
    "Cocker Spaniel": "spaniel/cocker",
};

export const hardBreeds = {
    Affenpinscher: "affenpinscher",
    "African Wild Dog": "african",
    "Airedale Terrier": "airedale",
    Akita: "akita",
    Appenzeller: "appenzeller",
    "Australian Shepherd": "australian/shepherd",
    Basenji: "basenji",

    "Bluetick Coonhound": "bluetick",
    Borzoi: "borzoi",
    "Bouvier des Flandres": "bouvier",
    Boxer: "boxer",
    "Brabancon Griffon": "brabancon",
    Briard: "briard",
    "Norwegian Buhund": "buhund/norwegian",
    "Boston Bulldog": "bulldog/boston",

    "Staffordshire Bull Terrier": "bullterrier/staffordshire",
    "Australian Cattle Dog": "cattledog/australian",

    Chow: "chow",
    "Clumber Spaniel": "clumber",
    Cockapoo: "cockapoo",

    Coonhound: "coonhound",

    "Coton de Tulear": "cotondetulear",

    "Scottish Deerhound": "deerhound/scottish",
    Dhole: "dhole",
    Dingo: "dingo",

    "Norwegian Elkhound": "elkhound/norwegian",
    Entlebucher: "entlebucher",
    "Eskimo Dog": "eskimo",
    "Finnish Lapphund": "finnish/lapphund",
    "Bichon Frise": "frise/bichon",

    "Italian Greyhound": "greyhound/italian",
    Groenendael: "groenendael",
    Havanese: "havanese",
    "Afghan Hound": "hound/afghan",
    "Basset Hound": "hound/basset",
    "Blood Hound": "hound/blood",
    "English Hound": "hound/english",
    "Ibizan Hound": "hound/ibizan",
    "Plott Hound": "hound/plott",
    "Walker Hound": "hound/walker",

    Keeshond: "keeshond",
    Kelpie: "kelpie",
    Komondor: "komondor",
    Kuvasz: "kuvasz",
    Labradoodle: "labradoodle",

    Leonberg: "leonberg",
    "Lhasa Apso": "lhasa",
    Malamute: "malamute",
    Malinois: "malinois",
    Maltese: "maltese",
    Bullmastiff: "mastiff/bull",
    "English Mastiff": "mastiff/english",
    "Tibetaan Mastiff": "mastiff/tibetan",
    "Mexican Hairless": "mexicanhairless",
    "Bernese Mountain Dog": "mountain/bernese",
    "Swiss Mountain Dog": "mountain/swiss",
    Newfoundland: "newfoundland",
    Otterhound: "otterhound",
    "Caucasian Ovcharka": "ovcharka/caucasian",
    Papillon: "papillon",
    Pekinese: "pekinese",
    Pembroke: "pembroke",
    "Miniature Pinscher": "pinscher/miniature",

    "German Longhaired Pointer": "pointer/germanlonghair",
    "German Pointer": "pointer/german",
    Pomeranian: "pomeranian",
    "Miniature Poodle": "poodle/miniature",
    "Standard Poodle": "poodle/standard",
    "Toy Poodle": "poodle/toy",
    Pug: "pug",
    Puggle: "puggle",
    "Great Pyrenees": "pyrenees",
    "Redbone Coonhound": "redbone",
    "Chesapeake Bay Retriever": "retriever/chesapeake",
    "Curly Retriever": "retriever/curly",
    "Flatcoated Retriever": "retriever/flatcoated",

    "Rhodesian Ridgeback": "ridgeback/rhodesian",

    Saluki: "saluki",
    Samoyed: "samoyed",
    Schipperke: "schipperke",
    "Giant Schnauzer": "schnauzer/giant",
    "Miniature Schnauzer": "schnauzer/miniature",
    "English Setter": "setter/english",
    "Gordon Setter": "setter/gordon",
    "Irish Setter": "setter/irish",
    "English Sheepdog": "sheepdog/english",
    "Shetland Sheepdog": "sheepdog/shetland",
    "Shiba Inu": "shiba",

    "Blenheim Spaniel": "spaniel/blenheim",
    "Brittany Spaniel": "spaniel/brittany",

    "Irish Water Spaniel": "spaniel/irishwater",
    "Japanese Spaniel": "spaniel/japanese",
    "Sussex Spaniel": "spaniel/sussex",
    "Welsh Springer Spaniel": "spaniel/welshspringer",

    "American Staffordshire Terrier": "terrier/american",
    "Australian Terrier": "terrier/australian",
    "Bedlington Terrier": "terrier/bedlington",
    "Border Terrier": "terrier/border",
    "Cairn Terrier": "terrier/cairn",
    "Dandie Dinmont Terrier": "terrier/dandie",
    "Fox Terrier": "terrier/fox",
    "Irish Terrier": "terrier/irish",
    "Kerry Blue Terrier": "terrier/kerryblue",
    "Lakeland Terrier": "terrier/lakeland",
    "Norfolk Terrier": "terrier/norfolk",
    "Norwich Terrier": "terrier/norwich",
    "Patterdale Terrier": "terrier/patterdale",
    "Russell Terrier": "terrier/russell",
    "Scottish Terrier": "terrier/scottish",
    "Sealyham Terrier": "terrier/sealyham",
    "Silky Terrier": "terrier/silky",
    "Tibetan Terrier": "terrier/tibetan",
    "Toy Fox Terrier": "terrier/toy",
    "Welsh Terrier": "terrier/welsh",

    "Wheaten Terrier": "terrier/wheaten",
    "Yorkshire Terrier": "terrier/yorkshire",
    Tervuren: "tervuren",
    Vizsla: "vizsla",
    "Spanish Water Dog": "waterdog/spanish",
    Weimaraner: "weimaraner",
    Whippet: "whippet",
    "Irish Wolfhound": "wolfhound/irish",
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
