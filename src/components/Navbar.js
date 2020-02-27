import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
    background:linear-gradient(45deg,#181818,#232323);
    display:flex;
    justify-content:center;
    align-items:center;
    height:50px;
    color:#fff
`
const ProjectTitle = styled.h2`
    font-style:italic;
`
export default function Navbar() {
    return (
        <Container>
            <ProjectTitle>Żuberek</ProjectTitle>
        </Container>
    )
}
