import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
function SearchView({handleSearch,products}){
    const {name}=useParams()
    const [searched,setSearched]=useState()
    useEffect(()=>{
        
        (async()=>{
            console.log(products)
            const t=await handleSearch(name)
            await setSearched(t)})()

    },[name,products])
    return (
        <>
        </>
    )

}
export default SearchView