import styled from 'styled-components';
import location from '../../img/Location.svg'

function Villages({ villageName, sidoName, onClick }) {
    return (
        <VillageDiv onClick={onClick}>
            <img></img>
            <VillageInfo>
                <p>{villageName}</p>
                <div>
                    <img src={location} alt='위치표시' />
                    <p>{sidoName}</p>
                </div>
            </VillageInfo>
        </VillageDiv>
    );
}


const VillageDiv = styled.div`
width: 375px;
height: 240px;
flex-shrink: 0;
border-radius: 10px;
background-color: #BDBDBD;
position: relative;
`

const VillageInfo = styled.div`
position: absolute;
bottom:0;
width: 375px;
height: 94.228px;
flex-shrink: 0;
border-radius: 0 0 10px 10px;
background: #FFF;
padding: 13px;
box-sizing: border-box;
div{
display:flex;
gap:2.75px;
}
p{
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

`

export default Villages;