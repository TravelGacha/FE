import styled from 'styled-components';
import collectionImg from '../../assets/trophy.svg'
import memoryImg from '../../assets/MemoryImg.svg'

function MyCollection({ content, data }) {
    return (
        <Collection>
            {content === 'collection' ? (
                <img src={collectionImg} alt='콜렉션 이미지' />
            ) : content === 'memory' ? (
                <img src={memoryImg} alt='메모리 이미지' />
            ) : (
                null
            )}
            {content === 'collection' ? (
                <div>내 컬렉션 : {data}/1254</div>
            ) : content === 'memory' ? (
                <div>나의 추억 : {data}</div>
            ) : (
                null
            )}
        </Collection>
    );
}

const Collection = styled.div`
    display:flex;
    align-items: flex-end;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.63px;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    `


export default MyCollection;