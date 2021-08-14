import React, { useState, useEffect} from "react";
import spinner from '../assets/spinner.gif'


const TableOfContents = () => {  //react.fc?
    const [data, setData] = useState(null); //usestate in ts?
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://www.swapi.tech/api/films")
        .then(res => res.json())
        .then(data => { 
            console.log(data)
            setLoading(false);
            return {data , loading};
        })
        .catch(err => console.error(err))

    }, [])

    return(
    <div>
        {loading ? <div> <img src={spinner} alt="spinner"/> </div> : 
        <div>
        <div className="split sleft">
        <div className="centered">
            <h2>Jane Flex</h2>
            <p>Some text.</p>
        </div>
        </div>

        <div className="split right">
        <div className="centered">
            <h2>John Doe</h2>
            <p>Some text here too.</p>
        </div>
        </div>
        </div>
}
    </div>
    );
}

export default TableOfContents