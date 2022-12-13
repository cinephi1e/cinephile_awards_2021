import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Credit_01 = (props) => {
    const history = useHistory();

    return (
        <Container style={{ backgroundColor: "black" }}
            onClick={() => { history.push("/credit_02") }}>
            <Content>
                <Divide>
                    <Category>기획</Category>
                    <Category>제작</Category>
                    <Category>심사</Category>
                </Divide>
                <Divide>
                    <Name>신애필</Name>
                    <Name>신애필</Name>
                    <Name>신애필</Name>
                </Divide>
            </Content>
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

const Content = styled.div`
text-align: left;
padding: 5vh 5vw;
display: flex;
align-items: center;
margin-bottom: 10vh;
@media screen and (max-width: 1024px) {     
    padding: 0 0;
    line-height: 0.8em;
}
`;

const Divide = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 2vw;
@media screen and (max-width: 1024px) {     
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vh;
}
`;

const Category = styled.h3`
font-size: 4vh;
margin: 3vh 0;
@media screen and (max-width: 1024px) {     
    font-size: 3vh;
}
`;

const Name = styled.h3`
font-weight: 100;
font-size: 4vh;
margin: 3vh 0;
@media screen and (max-width: 1024px) {     
    font-size: 3vh;
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
