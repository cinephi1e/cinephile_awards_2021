import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const CinematographyWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/originalscreenplay") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>촬영상</Category>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Nomadland.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>노매드랜드</Title>
                            <Year>클로이 자오</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Mogadishu.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>모가디슈</Title>
                            <Year>류승완</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Dune.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>듄</Title>
                            <Year>드니 빌뇌브</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
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
                            <Title>라스트 나잇 인 소호</Title>
                            <Year>에드가 라이트</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default CinematographyWinner;
