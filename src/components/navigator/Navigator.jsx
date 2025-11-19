import styled from 'styled-components';
import nList from '../../img/NList.svg'
import nMemory from '../../img/NMemory.svg'
import nMy from '../../img/NMy.svg'
import nSave from '../../img/NSave.svg'
import gachaBtn from '../../img/GachaBtn.svg'


function Navigator() {
    return (
        <NavigatorContainer>
            <img src={nList} alt='리스트' />
            <img src={nSave} alt='저장' />
            <GachaButton>
                <img src={gachaBtn} alt='가챠' />
            </GachaButton>
            <img src={nMemory} alt='기억' />
            <img src={nMy} alt='마이' />
        </NavigatorContainer>

    );
}

const NavigatorContainer = styled.div`
box-sizing:border-box;
display:flex;
justify-content:space-between;
position: absolute;
bottom: 0;
width: 394px;
height: 72px;
padding: 16px 22px;
align-items: center;
background-color: #FAFAFA;
`;

const GachaButton = styled.button`
display: flex;
width: 70px;
height: 70px;
padding: 15px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 35px;
background: linear-gradient(233deg, #FA2283 9.8%, #8D1FA6 81.22%);
box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25) inset;
border:0;
position: absolute;
bottom: 39px;
left:161.5px;
`

export default Navigator
