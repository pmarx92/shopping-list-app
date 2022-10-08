import styled from 'styled-components'

function Header() {
  return (
    <Headline>Header</Headline>
  )
}
const Headline = styled.h1`
color: var(--textColor);
background-color: var(--backgroundColor);
padding: 20px;
box-shadow: 0 0 15px black;
`



export default Header