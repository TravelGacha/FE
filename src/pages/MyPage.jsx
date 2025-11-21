import styled from 'styled-components';
import myPageT from '../assets/MyPageT.svg'
import MyCollection from "../components/myPage/MyCollection";
import profile from '../assets/profile.svg';
import { useEffect, useState } from 'react';
import client from '../api/client';

function MyPage() {

    const [modi, setModi] = useState(false);
    const [userInfo, setUserInfo] = useState(null);
    const [newEmail, setNewEmail] = useState("");

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const res = await client.get('/user/me');

                if (res.date.success) {
                    setUserInfo(res.data.data);
                }
            } catch (error) {
                console.error("내 정보 불러오기 실패:", error);
            }
        };
        fetchUserInfo();
    }, []);

    const UpdateEmail = async (e) => {
        e.preventDefault();
        if (!newEmail) {

        }

        try {
            const res = await client.put('/user/me', {
                email: newEmail
            });

            if (res.data.success) {
                alert(res.data.message);
                setUserInfo({ ...userInfo, email: newEmail });
                setModi(false);
                setNewEmail("");

            }
        } catch (error) {
            console.error("이메일 수정 실패:", error);
            alert("수정에 실패했습니다.")
        }
    }

    const clickModi = () => {
        setModi(true);
    }

    return (
        <MpgBasic>
            <MyPageTImg src={myPageT} alt="마이페이지 제목" />
            <ProfileImg><img src={profile} alt="프로필 사진" /></ProfileImg>
            <MyName>{userInfo.username}</MyName>
            <MyEmail>{userInfo.email}</MyEmail>
            {modi && (
                <form onSubmit={UpdateEmail}>
                    <label>새로운 이메일</label>
                    <input type='email' required value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
                    <button>완료</button>
                </form>
            )}
            <Line />
            <MyCollections>
                <MyCollection content="collection" data={userInfo.collectionCount} />
                <MyCollection content="memory" data={userInfo.memoryCount} />
            </MyCollections>
            <Modifycation onClick={clickModi}>수정하기</Modifycation>
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
    border-radius: 50%;
    display:flex;
    justify-content:center;

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
const Modifycation = styled.button`
    color: gray;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
    border:0;
    background-color:white;
    margin-top:245.6px;
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
    margin-top:5px;`

const MyCollections = styled.div`
    height:80px;
    margin-top:14px;
    `

export default MyPage;