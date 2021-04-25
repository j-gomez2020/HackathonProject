import React, {useEffect, useState} from 'react';

const Results = () => {
    const [loading, setLoading] = useState(true);


    return(
        <>
            {loading ? <h1>Loading</h1> : <h1>Results page</h1>}
        </>
        
    )
}

export default Results;