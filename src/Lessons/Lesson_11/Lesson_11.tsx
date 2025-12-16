import { useState,  } from "react";
import axios from "axios";



// import { Wrapper, Controls, Input, Button, Cards, Card, ErrorText, Title, } from "./styles";
import type {University} from "./types.ts";

function Lesson_11() {
    const [country, setCountry] = useState("");
    const [universities, setUniversities] = useState<University[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    

    return (
    );
}

export default Lesson_11;