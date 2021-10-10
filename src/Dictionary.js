import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results,setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos,setPhotos]=useState(null);


    function handleDictionaryResponse(response) {
      setResults(response.data[0]);
        // console.log(response.data[0].meanings[0].definitions[0].definition);
    }

    function handlePexelsResponse(response){
        console.log(response);
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        const pexelsApiKey= "563492ad6f91700001000001d54932a3f2fe4c238a42b5823eb9149b";
        let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers= { Authorization: `Bearer ${pexelsApiKey}` }
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);        
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
            <Photos photos={photos} />
        </div>
    )
} else {
    load();
   return "Loading..." 
}
}