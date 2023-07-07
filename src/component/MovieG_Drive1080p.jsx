import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const MovieG_Drive1080p = () => {
  const nav=useNavigate()
    return (
        <>
           <Button onClick={()=>nav('/downloadgdrive1080p')}>G-Drive Links</Button>
        </>
    );
}

export default MovieG_Drive1080p;
const Button =styled.button`
  background: #44e23e;
  color: #fff;
  font-size: 15px;
  height: 40px;
  width: 130px;
`