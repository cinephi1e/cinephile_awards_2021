import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
color: white;
`;

export const Title = styled.h1`
font-size: 2.5vh;
color: white;
position: absolute;
top: 3vh;
@media screen and (max-width: 1024px) {     
    font-size: 3vh;
    top: 0;
    margin-top: 6vh;
}
`;

export const Flex = styled.div`
margin-top: 10vh;
width: 70vw;
display: flex;
justify-content: center;
margin-bottom: 4vh;
@media screen and (max-width: 1024px) {
    width: auto;
    margin-top: 11vh;
}
`;

export const Content = styled.div`
@media screen and (max-width: 1024px) {     
    margin: 0;
}
`;

export const Lists = styled.div`
width: 22vw;
margin-top: 1.5vh;
text-align: left;
display: flex;
@media screen and (max-width: 1024px) {     
    padding: 0 0;
    line-height: 0.8em;
    width: 45vw;  
    margin: -1vh;
}
`;

export const Divide = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin: 0 2vw;
@media screen and (max-width: 1024px) {     
    display: flex;
    flex-direction: column;
    margin-top: 3vh;
}
`;

export const Category = styled.div`
font-size: 1.5vh;
margin-top: 0.5vh;
@media screen and (max-width: 1024px) {     
    font-size: 1.2vh;
    line-height: 1em;
}
`;

export const Name = styled.h3`
font-weight: 100;
font-size: 1.5vh;
margin-top: 0.5vh;
@media screen and (max-width: 1024px) {     
    font-size: 1.2vh;
    line-height: 1em;
}
`;

export const Next = styled.h3`
position: absolute;
bottom: 0;
font-size: 2.5vh;
@media screen and (max-width: 1024px) {     
    font-size: 1.7vh;
}
`;
