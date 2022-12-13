import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { Container, Nominated, Content, Category, Choice, Nomination, Flex, Text, Awards, Trophy, Title, Year, Img } from "../../element";

const DduckWinner = (props) => {
    const history = useHistory();

    return (
        <Container onClick={() => { history.push("/greenbook") }}>
            <Nominated>제2회 신애필 어워즈</Nominated>
            <Category>떡상</Category>
            <Choice>차기작이 가장 기대되는 라이징에게 주는 상</Choice>
            <Content>
                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/BarryKeoghan.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>배리 키오건</Title>
                            <Year>더 배트맨</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TimotheeChalamet2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>티모시 샬라메</Title>
                            <Year>듄 파트2, 본즈 앤드 올, 웡카 등</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/Anya.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                            }} />
                        </Img>
                        <Awards>
                            <Title>안야 테일러 조이</Title>
                            <Year>더 노스맨, 퓨리오사, 데이빗 O. 러셀 차기작 등</Year>
                        </Awards>
                        <Trophy>🏆</Trophy>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/FlorencePugh.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>플로렌스 퓨</Title>
                            <Year>돈 워리 달링, 오펜하이머 등</Year>
                        </Text>
                    </Flex>
                </Nomination>

                <Nomination>
                    <Flex>
                        <Img>
                            <img src="images/TomHolland2.jpeg" style={{
                                width: "100%",
                                height: "100%",
                                boxShadow: "2px 2px #555",
                                maxWidth: "32vw",
                                objectFit: "cover",
                                filter: "grayscale(100%)"
                            }} />
                        </Img>
                        <Text>
                            <Title>톰 홀랜드</Title>
                            <Year>언차티드... 우리 토미 사랑해 ;)</Year>
                        </Text>
                    </Flex>
                </Nomination>
            </Content>
        </Container>
    );
}

export default DduckWinner;
