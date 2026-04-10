import React, { useState, useEffect } from "react"
import axios from "axios"

export default function DebounceSearch() {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [results, setResults] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [query])


    useEffect(()=>{
        if(!debouncedQuery) return;
        axios.get(`https://api.example.com/search?q=${debouncedQuery}`)
        .then(res=>setResults(res.data))
        .catch(err=>console.log(err))
    },[debouncedQuery])
    return (
        <div>
            <input type="text"
            placeholder="serach...."
            onChange={(e)=>setQuery(e.target.value)} />

            {results.map((item,index)=>(
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}