import React from "react";
import { useHistory } from "react-router";
import { Container, Title, Flex, Content, Lists, Divide, Category, Name, Next} from "./credit";

const Credit_02 = (props) => {
    const history = useHistory();

    return (
        <Container style={{ backgroundColor: "black" }}
            onClick={() => { history.push("/credit_03") }}>
            <Title>참고한 작품들</Title>
            <Flex>
                <Content>
                    <Lists>
                        <Divide><Category>ㄱ</Category></Divide>
                        <Divide>
                            <Name>괴짜들의 로맨스(2020)</Name>
                            <Name>구독좋아요알림설정(2020)</Name>
                            <Name>그녀의 조각들(2020)</Name>
                            <Name>그린 나이트(2021)</Name>
                            <Name>끝없음에 대하여(2019)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㄴ</Category> </Divide>
                        <Divide>
                            <Name>낫아웃(2021)</Name>
                            <Name>내가 죽기를 바라는 자들(2021)</Name>
                            <Name>노 타임 투 다이(2021)</Name>
                            <Name>노매드랜드(2020)</Name>
                            <Name>노바디(2021)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㄷ</Category> </Divide>
                        <Divide>
                            <Name>당신얼굴 앞에서(2021)</Name>
                            <Name>더 수어사이드 스쿼드(2021)</Name>
                            <Name>더 파더(2021)</Name>
                            <Name>돈 룩 업(2021)</Name>
                            <Name>듄(2021)</Name>
                            <Name>드라이브 마이 카(2021)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㄹ</Category></Divide>
                        <Divide>
                            <Name>랑종(2021)</Name>
                            <Name>램(2021)</Name>
                            <Name>레 미제라블(2019)</Name>
                            <Name>루카(2021)</Name>
                        </Divide>
                    </Lists>
                </Content>

                <Content>
                    <Lists>
                        <Divide><Category>ㅁ</Category></Divide>
                        <Divide>
                            <Name>매트릭스: 리저렉션(2021)</Name>
                            <Name>맬컴과 마리(2021)</Name>
                            <Name>메이드 인 루프탑(2020)</Name>
                            <Name>모가디슈(2021)</Name>
                            <Name>미나리(2020)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㅂ</Category></Divide>
                        <Divide>
                            <Name>바쿠라우(2019)</Name>
                            <Name>버로우(2020)</Name>
                            <Name>베네데타(2021)</Name>
                            <Name>베놈2: 렛 데어 비 카니지(2021)</Name>
                            <Name>보이저스(2021)</Name>
                            <Name>블랙위도우(2021)</Name>
                            <Name>빛과 철(2020)</Name>
                            <Name>쁘띠 마망(2021)</Name>
                        </Divide>
                    </Lists>

                    <Lists>
                        <Divide><Category>ㅅ</Category></Divide>
                        <Divide>
                            <Name>사운드 오브 메탈(2019)</Name>
                            <Name>샹치와 텐 링즈의 전설(2021)</Name>
                            <Name>세자매(2020)</Name>
                            <Name>소울(2020)</Name>
                            <Name>스파이더맨: 노 웨이 홈(2021)</Name>
                            <Name>스파이의 아내(2020)</Name>
                            <Name>신의 손(2021)</Name>
                        </Divide>
                    </Lists>
                </Content>

            </Flex>
            <Next>❯ ❯ ❯ 크레딧 마저 보기 ❯ ❯ ❯</Next>
        </Container>
    );
}

export default Credit_02;
