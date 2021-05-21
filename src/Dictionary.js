import React,{useState} from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

function showResponse(response){
 console.log(response.data[0]);
}
  
function search(event) {
 event.preventDefault ();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
 axios.get(apiUrl).then(showResponse);
}

function Keywordentering (event){
setKeyword(event.target.value);
}

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={Keywordentering} autoFocus={true} />
        <a href="/" className="btn btn-primary shadow">
          Search
        </a>
      </form>
    </div>
  );
}