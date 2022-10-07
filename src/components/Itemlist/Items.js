import styled from 'styled-components';
import { useEffect, useState } from 'react';


function Items() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
        async function fetchData() {
            const url = 'https://fetch-me.vercel.app/api/shopping/items';
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        }

    }, [])

    return (
        <Wrapper>
            {data?.data?.map((items) => {
                return <div>{items.name.de}</div>

            })}

        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top: 2rem;
`

export default Items