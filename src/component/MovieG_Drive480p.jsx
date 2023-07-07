import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const MovieG_Drive480p = () => {
    const nav=useNavigate
    return (
        <div>
            <Button onClick={()=>nav('/downloadgdrive480p')}>G-Drive Links</Button>
        </div>
    );
}

export default MovieG_Drive480p;
const Button =styled.button`
  background: #44e23e;
  color: #fff;
  font-size: 15px;
  height: 40px;
  width: 130px;
`