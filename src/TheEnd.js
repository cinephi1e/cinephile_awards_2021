import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const TheEnd = (props) => {
    const history = useHistory();

    return (
        <Container style={{ backgroundColor: "black" }}
            onClick={() => { history.push("/") }}>
            <End>The End</End>
            <Next>❮ ❮ ❮ 처음으로 ❮ ❮ ❮</Next>
        </Container>
    );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: white;
`;

const Next = styled.h3`
position: absolute;
bottom: 0;
font-size: 2.5vh;
@media screen and (max-width: 1024px) {     
    font-size: 1.7vh;
}
`;

const End = styled.div`
font-weight: 100;
font-size: 10vh;
margin-bottom: 10vh;
@media screen and (max-width: 1024px) {     
    margin-top: 3vh;
}
`;

export default TheEnd;
