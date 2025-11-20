import styled from 'styled-components';
import myPageT from '../assets/MyPageT.svg'
import MyCollection from "../components/myPage/MyCollection";

const collections = 5;
const memorys = 3;

function MyPage() {
    return (
        <MpgBasic>
            <MyPageTImg src={myPageT} alt="마이페이지 제목" />
            <ProfileImg><img src="" alt="프로필 사진" /></ProfileImg>
            <MyName>이름이름</MyName>
            <MyEmail>@email.com</MyEmail>
            <Line />
            <MyCollections>
                <MyCollection content="collection" data={collections} />
                <MyCollection content="memory" data={memorys} />
            </MyCollections>
            <LogOut>로그아웃</LogOut>
        </MpgBasic>
    );
}


const MpgBasic = styled.div`
margin: auto;
display: flex;
width: 393px;
height: 852px;
flex-direction: column;
align-items: center;
position: relative;
`;

const MyPageTImg = styled.img`
  margin-top: 23px;
  width: 212px;
  height: 127px;
`;

const ProfileImg = styled.div`
    width: 70px;
    height: 70px;
    background-color: #D9D9D9;
    border-radius: 50%
`
const MyName = styled.p`
    margin:10px 0 0 0;
    height:24px
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.84px;
`
const MyEmail = styled.p`
    margin:0 0 22px 0;
    height:14px
    color: #585858;
    font-family: DungGeunMo;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
`

const Line = styled.hr`
    width: 277px;
    height: 1px;
    color:#B9B9B9;
    margin: 0;
`
const LogOut = styled.button`
    color: #F00;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
    border:0;
    background-color:white;
    margin-top:276px;`

const MyCollections = styled.div`
    height:80px;
    margin-top:14px;
    `

export default MyPage;