
import styled from '@emotion/styled'

function Header() {
    return (
        <HeaderStyled>
            Now I'm a real header
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    background: ${props => props.theme.colors.primary};

`
export default Header