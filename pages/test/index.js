import React,{useState, useEffect} from 'react';

function Test(){
    const [data,setData] = useState([]);
    const getData = ()=>{
        fetch('http://localhost:4000/api/test',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson);
            setData(myJson);
        })
    }
    useEffect(()=>{
        getData();
    },[]);

    return(
        <h1>test!
            {data.map((item)=><p key="item.name">{item.name}</p>)}
        </h1>
    );
}
export default Test;