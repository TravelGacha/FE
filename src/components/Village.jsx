import React from "react";
import styled from 'styled-components';
import location from '../assets/Location.svg'

export default function Village({ villageName, sidoName, imageUrl, onClick }) {
  return (
    <VillageDiv onClick={onClick}>
      <ImgDiv src={imageUrl} alt={villageName} />
      <VillageInfo>
        <Title>{villageName}</Title>
        <Address>
          <AddressImg src={location} alt='위치표시' />
          {sidoName}
        </Address>
      </VillageInfo>
    </VillageDiv>
  );
}

const VillageDiv = styled.div`
  width: 100%;
  height: 240px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #D4D4D4;
  position: relative;
`;

const ImgDiv = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 145px;
  flex-shrink: 0;
  border-radius: 10px 10px 0 0;
`;

const VillageInfo = styled.div`
  position: absolute;
  bottom:0;
  width: 100%;
  height: 95px;
  flex-shrink: 0;
  border-radius: 0 0 10px 10px;
  background: white;
  padding: 13px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: black;
  margin-bottom: 10px;
  text-align: left;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  color: black;
`;

const AddressImg = styled.img`
  height:20px;
`;
