import styled from "styled-components";

export const Container = styled.div`
width: 38vw;
background: #cacaca;
border: 0.1em outset white;
margin: 35vh auto;
@media screen and (max-width: 1024px) {     
    width: 90vw;
    height: 100vh;
}
`;

export const Nominated = styled.p`
font-size: 1.7vh;
padding: 8px;
text-align: left;
background: #0e1796;
color: white;
margin: 0;
`;

export const Content = styled.div`
border: 0.1em inset grey;
border-top: none;
background: white;
padding: 1vh 2vh 2vh 2vh;
display: flex;
flex-direction: column;
align-items: center;
@media screen and (max-width: 1024px) {     
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    padding-bottom: 1.5vh;
}
`;

export const Category = styled.h1`
padding-top: 1.5vh;
margin: 0;
padding-left: 2vh;
border: 1px inset grey;
border-bottom: none;
background: white;
text-align: left;
font-size: 3vh;
@media screen and (max-width: 1024px) {     
    padding: 1.5vh 2vh 1vh;
    font-size: 3vh;
}
`;

export const Choice = styled.h2`
width: auto;
margin: 0;
padding: 1vh 2vh 0;
font-weight: 100;
text-align: left;
background: white;
border: 1px inset grey;
border-top: none;
border-bottom: none;
word-wrap: break-word;
@media screen and (max-width: 1024px) {     
    font-size: 1.8vh;
    padding-bottom: 0.5vh;
}
`;

export const Divide = styled.div`
display: flex;
align-items: center;
`;

export const Nomination = styled.div`
width: 33vw;
margin: 0.8vh;
padding: 10px;
border: 2px outset grey;
background: #cacaca;
@media screen and (max-width: 1024px) {     
    width: 80vw;
    padding: 0.4em 0.3em;
}
`;

export const Flex = styled.div`
display: flex;
@media screen and (max-width: 1024px) {     
}
`;

export const Img = styled.div`
width: 10vw;
height: 6vw;
@media screen and (max-width: 1024px) {     
    min-width: 14vh;
    height: 7vh;
}
`;

export const Text = styled.div`
width: 22vw;
padding-left: 1vw;
display: flex;
flex-direction: column;
justify-content: center;
@media screen and (max-width: 1024px) {     
    padding-left: 2vw;
    line-height: 0.7em;
    width: 58vw;
}
`;

export const Awards = styled.div`
width: 18.5vw;
padding-left: 1vw;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
@media screen and (max-width: 1024px) {     
    padding-left: 2vw;
    line-height: 0.7em;
    width: 53vw;
}
`;

export const Trophy = styled.div`
font-size: 3vw;
display: flex;
align-items: center;
@media screen and (max-width: 1024px) {     
    font-size: 4vh;
}
`;

export const Title = styled.p`
margin: 5px;
text-align: left;
font-weight: bold;
font-size: 1.2vw;
@media screen and (max-width: 1024px) {     
    font-size: 1.7vh;
    width: auto;
}
`;

export const Year = styled.p`
margin: 5px;
text-align: left;
font-size: 1vw;
@media screen and (max-width: 1024px) {     
    font-size: 1.4vh;    
    width: auto;
}
`;
