import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const MovieG_Drive2kHDR = () => {
    const nav=useNavigate()
    return (
        <div>
            <Button onClick={()=>nav('/downloadgdriv2k')}>G-Drive Links</Button>
        </div>
    );
}

export default MovieG_Drive2kHDR;
const Button =styled.button`
  background: #44e23e;
  color: #fff;
  font-size: 15px;
  height: 40px;
  width: 130px;
`