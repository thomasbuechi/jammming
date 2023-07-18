/* eslint-disable react/prop-types */
import "./SearchBar.css"
import { useState, useCallback } from "react";

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("")

    /*
    function handleChange(event){
        setSearchTerm(event.target.value)
    }
    */

    function handleChange(event){
        setSearchTerm(event.target.value);
      }

    function search(){
        props.onSearch(searchTerm)
    }


    return (
        <>
            <div>
                <input id="searchBar" onChange={handleChange} placeholder="Enter A Song" />
            </div>
            <div>
                <button onClick={search}>Search</button>
            </div>
        </>
    )
}


