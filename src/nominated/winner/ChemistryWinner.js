import React from "react";
import styled from "styled-components";

import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const ChemistryWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/grammy") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>케미스트리상</Category>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/YoungAdultMatters.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>이유미 &#38; 하니</Title>
                            <Year>어른들은 몰라요</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/FirstCow2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>존 마가로 &#38; 오리온 리</Title>
                            <Year>퍼스트 카우</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Benedetta2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Small>비르지니 에피라 &#38; 다프네 파타키아</Small>
                            <Year>베네데타</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/ThePowerofDog.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Small>베네딕트 컴버배치 &#38; 코디 스밋 맥피</Small>
                            <Year>파워 오브 도그</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/LastNightInSoho.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Small>토마신 맥캔지 &#38; 안야 테일러 조이</Small>
                            <Year>라스트 나잇 인 소호</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

const Small = styled.p`
margin: 5px;
text-align: left;
font-weight: bold;
font-size: 1.2vw;
@media screen and (max-width: 1024px) {     
    font-size: 1.6vh;
    width: auto;
}
`;
export default ChemistryWinner;
