import React from 'react';
import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";
import {name} from '../../constants/header'
const Border = styled('div')`
  text-align: center;
  border-radius: 12px;
  //border: 3px solid #58B5A9FF;
  width: 190px;
  height: 100px;
  border-image-slice: 10;
  position: relative;
  z-index:0;
  overflow: hidden;
  //-webkit-mask: linear-gradient(180deg, #58B5A9 0%, rgba(70, 141, 132, 0.32) 59.69%, rgba(99, 201, 188, 0.29) 82.08%, rgba(88, 181, 169, 0) 100%);
  
  &::before{
    position: absolute;
    content: "";
    width: 150%;
    height: 150%;
    background-image: conic-gradient(from 270deg, transparent 65%, #63C9BC49 100%);
    //background-image: linear-gradient(180deg, #58B5A9 0%, rgba(70, 141, 132, 0.32) 59.69%, rgba(99, 201, 188, 0.29) 82.08%, rgba(88, 181, 169, 0) 100%);
    top: -25%;
    left: -25%;
    z-index: 1;
    animation: rotate 8s linear infinite;
    
  }

  &::after{
    position: absolute;
    content: "";
    width: 150%;
    height: 150%;
    background-image: conic-gradient(from 180deg, transparent 65%, #58B5A9);
    //background-image: linear-gradient(180deg, #58B5A9 0%, rgba(70, 141, 132, 0.32) 59.69%, rgba(99, 201, 188, 0.29) 82.08%, rgba(88, 181, 169, 0) 100%);
    top: -25%;
    left: -25%;
    z-index: 2;
    animation: rotate 8s linear infinite;

  }
  
  @keyframes rotate {
   100%{
     transform: rotate(360deg);
   }
  }

`;

const Content = styled(Typography)`
  position: absolute;
  width: 94%;
  height: 94%;
  top: 3%;
  left: 3%;
  background: #0A0919;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;

`;


const CoverName = () :  JSX.Element => {
    return (
            <Border>
                <Content variant='h1'>
                    {name}
                </Content>
            </Border>

    );
};

export default CoverName;
