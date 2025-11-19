import styled from 'styled-components';
import Navigator from '../navigator/Navigator';
import mPlusBtn from '../../img/MPlusBtn.svg';
import { useState } from 'react';
import MemoryAdd from './MemoryAdd';

function MyMemory() {

    const [modalOpen, setModalOpen] = useState(false);

    const clickPlusBtn = () => {
        setModalOpen(true);
        console.log('모달 작동')
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <MMemoryBasic>
            {modalOpen && (
                <MemoryAdd onClick={(e) => e.stopPropagation()} closeModal={closeModal} />
            )}
            <img src={mPlusBtn} alt='메모리 추가' onClick={clickPlusBtn} />
            <Navigator />
        </MMemoryBasic>
    );
}

const MMemoryBasic = styled.div`
margin: auto;
display: flex;
width: 393px;
height: 852px;
flex-direction: column;
align-items: center;
position: relative;
background-color: #BEFFAD;
position: relative;
>img{
position: absolute;
bottom: 106px;
right:20px;
}
`;

export default MyMemory;