import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

const Home = (props) => {
    const history = useHistory();

    return (
        <div className="App">
            <Container>
                <Title>제2회 신애필 어워즈</Title>
                <Content>
                <Description>
                    2021년 국내 개봉작 및 OTT 공개작 기준<br />
                    (재개봉 제외)<br/><br/>
                    후보 중 하나를 선택하면 다음 페이지로 넘어감
                </Description>
                <Go onClick={() => {
                    history.push("/costumedesign");
                }}> 스타-트</Go>
                </Content>
            </Container>
        </div>
    );
}

const Container = styled.div`
width: 50vw;
background: #cacaca;
border: 0.1em outset white;
margin: 35vh auto;
@media screen and (max-width: 1024px) { 
    width: 85vw;    
}
`;

const Title = styled.h2`
font-size: 1.7vh;
font-weight: 100;
padding: 8px;
text-align: left;
background: #0e1796;
color: white;
margin: 0;
`;

const Content = styled.div`
background: #cacaca;
border: 0.1em inset grey;
`;

const Description = styled.p`
margin: 3vh;
font-size: 1.9vh;
line-height: 1.2em;
@media screen and (max-width: 500px) {     
    font-size: 1.8vh;
    margin: 20px auto;
    line-height: 1.1em;
    padding: 1.5vh;
}
`;

const Go = styled.button`
font-family: 'DungGeunMo';
font-size: 2vh;
width: 14vw;
margin: 0 auto;
margin-bottom: 3vh;
background: #cacaca;
padding: 5px;
border: 2px outset #888;
color: black;
@media screen and (max-width: 500px) {     
    font-size: 1.8vh;
    width: auto;
}
`;


export default Home;