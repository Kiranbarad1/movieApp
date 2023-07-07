import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const FinalDownloadPage = () => {
    return (
        <Container>
            <Helmet>
            <meta http-equiv="refresh" content="0; url='/'" />
            </Helmet>
            <Head>MovieWorld Downloader </Head>
            <Para>Sorry, file not found in database plase try again in the folloing 480p or 720p or 1080p or 2k.</Para>
        </Container>
    );
}

export default FinalDownloadPage;
const Head=styled.h2`
display: flex;
justify-content: center;
align-items: center;
top: -40px;
margin-top: 10%;
`
const Para=styled.p`
display: flex;
justify-content: center;
align-items: center;

`

const Container =styled.div`
 
padding: 10px;
`