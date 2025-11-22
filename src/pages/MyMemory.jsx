import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import PixelButton from '../components/PixelButton';
import MemoryCard from '../components/myMemory/MemoryCard';
import mPlusBtn from '../assets/MPlusBtn.svg';
import MyMemoryBack from '../assets/mymemory.svg';
import client from '../api/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function MyMemory() {
    const [memoryList, setMemoryList] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMemories = async () => {
            try {
                const res = await client.get('/memories', {
                    params: {
                        page: 0,
                        size: 20,
                    }
                });

                if (res.data.success) {
                    setMemoryList(res.data.data.content);
                }
            } catch (error) {
                console.log('memory 불러오기 실패:', error)
            }
        };

        fetchMemories();
    }, []);

    //슬라이딩 코드
    const swiperConfig = {
        slidesPerView: 'auto',
        spaceBetween: 25,
        centeredSlides: true,
        pagination: {
            clickable: true,
        },
    };

    return (
        <MMemoryBasic>
            <MyMemoryBackImg src={MyMemoryBack} alt="MyMemoryBack" />
            <PixelButton
                text="나의 추억들"
                isButton={false}
            />
            <div>
                <Swiper {...swiperConfig} >

                    {memoryList.map((memory) => (
                        <SwiperSlide>
                            <MemoryCard key={memory.collectionId}{...memory} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <img src={mPlusBtn} alt='메모리 추가' onClick={() => navigate("/app/village/save")} />
        </MMemoryBasic>
    );
}

const MMemoryBasic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 60px;
  gap: 50px;
  position: relative;
  background-color: #BEFFAD;
  overflow: hidden;

  >img{
    position: absolute;
    bottom: 34px;
    right:20px;
    z-index: 1;
  }

  .swiper-container {
    width: 100%;
    z-index: 1;
  }

  .swiper {
    width: 300px;
    height: auto;
    overflow: visible;
  }

  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const MyMemoryBackImg = styled.img`
  position: absolute;
  top: 100px;
  left: 0px;
`;

export default MyMemory;