import styled from 'styled-components';


function Items({ filter }) {

    return (
        <Wrapper>
            {
                filter.map((itemNames) => { return <button>{itemNames.name.de}</button> })
            }
        </Wrapper >
    )
}

const Wrapper = styled.div`
margin-top: 2rem;
`

export default Items