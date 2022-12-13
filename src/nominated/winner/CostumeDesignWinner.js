import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const CostumeDesignWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/visualeffect")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>의상상</Category>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TheWifeofSpy.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>스파이의 아내</Title>
                            <Year>구로사와 기요시</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Cruella.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>크루엘라</Title>
                            <Year>크레이그 질레스피</Year>
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
                            <img src="images/Dune2.jpeg" style={{
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
            </Content>
        </Container>
    );
}

export default CostumeDesignWinner;
