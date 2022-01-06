import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import React from 'react';

class LoaderApp extends React.Component {
    //other logic
    render() {
      return (
        <Loader
          type="ThreeDots"
          color="#FFFFFF"
          height={50}
          width={50}
          timeout={0}
        />
      );
    }
  }

const Trackit = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    padding: 15px;
    padding-top: 80px;
`

export { Trackit, LoaderApp, Loader }