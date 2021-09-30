import { useState } from "react";
import MainStage from "./MainStage";
export type DogType = {
    message: string;
    status: string;
};
const App = () => {
    const [dogResponse, setDogResponse] = useState("");

    return (
        <div>
            <MainStage></MainStage>
        </div>
    );
};

export default App;
