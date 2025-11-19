import styled from 'styled-components';
import location from '../../img/Location.svg'
import modalXBtn from '../../img/ModalXBtn.svg'

function VillageModal({ closeModal }) {
    return (
        <ModalBack>
            <Modal>
                <img src={modalXBtn} alt='나가기' onClick={closeModal} />
                <VillageInfo>
                    <p>마을이름</p>
                    <div>
                        <img src={location} alt='위치표시' />
                        <p>시군</p>
                    </div>
                    <hr />
                    <p>체험프로그램</p>
                    <p>와라랄라라라라라라</p>

                </VillageInfo>
            </Modal>
        </ModalBack>
    );
}

const ModalBack = styled.div`
width: 393px;
height: 852px;
position:absolute;
top:0;
left:0;
background: rgba(105, 104, 104, 0.60);
z-index:9998;`

const Modal = styled.div`
width: 375px;
height: 610px;
flex-shrink: 0;
position: absolute;
top:121px;
left:9px;
background-color: #BDBDBD;
z-index:9999;
border-radius: 10px;
>img{
position: absolute;
top: 17px;
right: 13px;
}

`
const VillageInfo = styled.div`
position: absolute;
bottom:0;
width: 375px;
height: 330px;
flex-shrink: 0;
border-radius: 0 0 10px 10px;
background: #FFF;
padding: 25px 0 0 26px;
box-sizing: border-box;
div{
display:flex;
gap:2.75px;
}
p:first-of-type{
margin:0;
color: #000;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.84px;
}

div p{
margin:0;
color: #000;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.7px;
}
hr{
width: 319px;
height: 1px;
color:#B9B9B9;
margin: 20px 0 12px 0;
}

`

export default VillageModal;