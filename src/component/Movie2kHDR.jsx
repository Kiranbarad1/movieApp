import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Movie2kHDR = () => {
  const nav=useNavigate()
    return (
        <>
          <Button onClick={()=>nav('/download2k')}>Download Links</Button>
        </>
    );
}

export default Movie2kHDR;

const Button =styled.button`
  background: #3a3131;
  color: #fff;
  font-size: 15px;
  height: 40px;
  width: 130px;
`
