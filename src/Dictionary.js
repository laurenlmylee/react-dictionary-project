import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results,setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);


    function handleResponse(response) {
      setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load(){
        setLoaded(true);
        search();
    }
    if (loaded){ 

    return (
        <div className="Dictionary">
            <section>
                <h1> Type a word... </h1>
            <form onSubmit={handleSubmit} onChange={handleKeywordChange}>
                <input type="search" autoFocus={true} defaultValue={props.defaultKeyword} />
            </form>
            <div className="hint">
Suggested words: sunset, penguin, forest, holiday
            </div>
            </section>
            <Results results={results}/>
        </div>
    )
} else {
    load();
   return "Loading..." 
}
}