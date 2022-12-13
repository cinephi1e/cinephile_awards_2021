import React from "react";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Divide, Category, Choice, Nomination, Flex, Text, Title, Year, Img } from "../element";

const Actor = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => {
            history.push("/actor-winner")
        }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>남우주연상</Category>

            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/SoundofMetal.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>리즈 아메드</Title>
                            <Year>사운드 오브 메탈</Year>
                        </Text>
                    </Flex>
                </Nomination>


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
                            <Title>안소니 홉킨스</Title>
                            <Year>더 파더</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/LakeithStanfiled.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>러키스 스탠필드</Title>
                            <Year>유다 그리고 블랙 메시아</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Adam.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>아담 드라이버</Title>
                            <Year>아네트</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Benedict.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>베네딕트 컴버배치</Title>
                            <Year>파워 오브 도그</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TomHolland.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Text>
                            <Title>톰 홀랜드</Title>
                            <Year>스파이더맨: 노 웨이 홈</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default Actor;
