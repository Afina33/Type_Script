import { useState,  } from "react";
import axios from "axios";

import type { University } from "./types"

function Lesson_11() {
    const [country, setCountry] = useState("");
    const [universities, setUniversities] = useState<University[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    

    return (
        <div>
        <h1>Hallo</h1>
        </div>
    );
}

export default Lesson_11;