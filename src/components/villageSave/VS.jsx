import Navigator from "../navigator/Navigator";
import styled from 'styled-components';
import vSBackground from '../../img/VSBackground.svg'
import Villages from '../villageSave/Villages';
import saveT from '../../img/SaveT.svg';
import VillageModal from "./VillageModal";
import { useState } from "react";

function VillageSave() {

    const [modalOpen, setModalOpen] = useState(false);
    const [villageNum, setVillageNum] = useState();

    const clickVillage = (id) => {
        setModalOpen(true);
        setVillageNum(id)
        console.log('모달 작동')
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const villagesList = [

        {

            "collectionId": 1,

            "villageId": 123,

            "villageName": "산청마을",

            "sidoName": "경상남도",

            "sigunguName": "산청군",

            "address": "경상남도 산청군 산청읍 산청리 123",

            "collectedAt": "2025-01-15T10:30:00"

        },

        {

            "collectionId": 2,

            "villageId": 123,

            "villageName": "두리마을",

            "sidoName": "경상남도",

            "sigunguName": "산청군",

            "address": "경상남도 산청군 산청읍 산청리 123",

            "collectedAt": "2025-01-15T10:30:00"

        },

        {

            "collectionId": 3,

            "villageId": 124,

            "villageName": "하나마을",

            "sidoName": "경상남도",

            "sigunguName": "산청군",

            "address": "경상남도 산청군 산청읍 산청리 123",

            "collectedAt": "2025-01-15T10:30:00"

        },



    ]

    const [villageList, setVillageList] = useState(villagesList);



    return (
        <VSaveBasic>
            <SaveTImg src={saveT} alt="마을 저장소 제목" />
            <section>
                {villageList.map((village) => {
                    return (
                        <Villages key={village.collectionId}{...village} onClick={() => clickVillage(village.collectionId)} />
                    );
                })}
                {modalOpen && (
                    <VillageModal onClick={(e) => e.stopPropagation()} closeModal={closeModal} />
                )}
            </section>
            <Navigator />
        </VSaveBasic>
    );
}

const VSaveBasic = styled.div`
margin:auto;
display: flex;
width: 393px;
height: 852px;
flex-direction: column;
align-items: center;
position: relative;
background: #FFADAE url(${vSBackground}) no-repeat center;
section{
display:flex;
flex-direction:column;
gap:10px; 
overflow-y: auto;
padding-bottom: 90px;
-ms-overflow-style: none;
}

section::-webkit-scrollbar{
  display:none;
}

`;

const SaveTImg = styled.img`
  margin-top: 23px;
  width: 212px;
  height: 127px;
`;

export default VillageSave;