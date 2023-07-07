import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Movie480p = () => {
  const nav=useNavigate()
    return (
        <div>
          <Button onClick={()=>nav('/download480p')}>Download Links</Button>
        </div>
    );
}

export default Movie480p;
const Button =styled.button`
  background: #3a3131;
  color: #fff;
  font-size: 15px;
  height: 40px;
  width: 130px;
`