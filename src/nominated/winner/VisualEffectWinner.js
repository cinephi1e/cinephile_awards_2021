import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const VisualEffectWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/editing")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>시각효과상</Category>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TheBookofFish.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>자산어보</Title>
                            <Year>이준익</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TheGreenKnight.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>그린 나이트</Title>
                            <Year>데이빗 로워리</Year>
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
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>듄</Title>
                            <Year>드니 빌뇌브</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Spiderman.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>스파이더맨: 노 웨이 홈</Title>
                            <Year>존 왓츠</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default VisualEffectWinner;
