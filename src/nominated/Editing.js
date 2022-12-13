import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const Editing = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/editing-winner") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>편집상</Category>

            <Content>
                    <Nomination>
                        <Flex>
                            <Img>
                                <img src="images/TheFather.jpeg" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                }} />
                            </Img>
                            <Text>
                                <Title>더 파더</Title>
                                <Year>플로리앙 젤레</Year>
                            </Text>
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
                                <img src="images/TheFrenchDispatch.jpeg" style={{
                                    width: "100%",
                                    height: "100%",
                                    boxShadow: "2px 2px #555",
                                    maxWidth: "32vw",
                                    objectFit: "cover",
                                }} />
                            </Img>
                            <Text>
                                <Title>프렌치 디스패치</Title>
                                <Year>웨스 앤더슨</Year>
                            </Text>
                        </Flex>
                    </Nomination>
            </Content>
        </Container>
    );
}

export default Editing;
