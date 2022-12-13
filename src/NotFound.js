import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const NotFound = (props) => {
    const goBack = useHistory();

    return (
        <Container>
            <h1 style={{}}>납치페이지임<br/>님 이제 여기서 못나감 ㅅㄱ</h1>
            <div onClick={() => {
                goBack.goBack();
            }}>뻥이고 이거 누르면 돌아감</div>
        </Container>
    );
}

const Container = styled.div`
text-align: left;
color: white;
width: 100vw;
height: 100vh;
margin-left: 5vw;
@media screen and (max-width: 1024px) {     
    font-size: 1.5vh;
    padding: 20px;
}
`;

export default NotFound;