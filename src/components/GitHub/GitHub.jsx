import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/users/hiteshchoudhary`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data);
        })
    },[])

  return (
    <div className='text-center  m-4 p-4 bg-gray-600 text-white text-3xl'>
    GitHub Followers:{data.followers}</div>
  )
}

export default GitHub