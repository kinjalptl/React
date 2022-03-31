import {useState, useEffect} from 'react';

const useFetchData = (url) => {
    const [response, setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data)=> setData(data))
        .catch((err)=> console.log(`Error : ${err}`));
    }, [url]);

    return {response};
}

export default useFetchData; 