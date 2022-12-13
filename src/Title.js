import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Credit_01 = (props) => {
    const history = useHistory();

    return (
        <Container style={{ backgroundColor: "black" }}
            onClick={() => { history.push("/credit_01") }}>
            <Title>제2회 신애필 어워즈</Title>
            <Next>❯ ❯ ❯ 크레딧 마저 보기 ❯ ❯ ❯</Next>
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

const Title = styled.h1`
font-size: 8vh;
color: white;
margin-bottom: 10vh;
@media screen and (max-width: 1024px) {     
    font-size: 5vh;
    margin-top: -5vh;
    margin-bottom: 2vh;
}
`;

const Next = styled.h3`
position: absolute;
bottom: 0;
font-size: 2.5vh;
@media screen and (max-width: 1024px) {     
    font-size: 1.7vh;
}
`;

export default Credit_01;
