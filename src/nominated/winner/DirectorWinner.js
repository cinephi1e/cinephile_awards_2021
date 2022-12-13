import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const DirectorWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/picture")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>감독상</Category>

            <Content>
                    <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/LeeJunik.jpeg" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                    filter: "grayscale(100%)"
                                }} />
                            </Img>
                            <Text>
                                <Title>이준익</Title>
                                <Year>자산어보</Year>
                            </Text>
                        </Flex>
                    </Nomination>

                    <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/Denis.jpeg" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                    filter: "grayscale(100%)"
                                }} />
                            </Img>
                            <Text>
                                <Title>드니 빌뇌브</Title>
                                <Year>듄</Year>
                            </Text>
                        </Flex>
                    </Nomination>
                <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/Scott.webp" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                    filter: "grayscale(100%)"
                                }} />
                            </Img>
                            <Text>
                                <Title>리들리 스콧</Title>
                                <Year>라스트 듀얼</Year>
                            </Text>
                        </Flex>
                    </Nomination>

                    <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/Hong.jpeg" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                    filter: "grayscale(100%)"
                                }} />
                            </Img>
                            <Text>
                                <Title>홍상수</Title>
                                <Year>인트로덕션, 당신얼굴 앞에서</Year>
                            </Text>
                        </Flex>
                    </Nomination>

                    <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/Jane.png" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                }} />
                            </Img>
                            <Awards>
                                <Title>제인 캠피온</Title>
                                <Year>파워 오브 도그</Year>
                            </Awards>
                            <Trophy>🏆</Trophy>
                        </Flex>
                    </Nomination>

                    <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/Ryuske.jpeg" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                    filter: "grayscale(100%)"
                                }} />
                            </Img>
                            <Text>
                                <Title>하마구치 류스케</Title>
                                <Year>해피 아워, 드라이브 마이 카</Year>
                            </Text>
                        </Flex>
                    </Nomination>
            </Content>
        </Container>
    );
}

export default DirectorWinner;
