import logo from './logo.svg';

import './App.css';
import Loginform from './Loginform';
import Welcome from './Welcome';
import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Header2 from './Header2';
const { Header, Content } = Layout;

function App() {
  const [prevData, setData] = useState('');

  const login = (param) => {
    setData(param);
  };
  const logOut = () =>{
    setData('')

  }
  // constructor
  return (
    <Layout>
      {prevData && prevData.userName !== '' && prevData.password !== '' ? (
        <Header2 logOut = {logOut}></Header2>
      ) : (
        <Header className="header">Login</Header>
      )}
      {/* <Header className="header">Login</Header> */}

      <Content>
        {prevData && prevData.userName !== '' && prevData.password !== '' ? (
          <Welcome banner={prevData.userName}></Welcome>
        ) : (
          <Loginform login={login}></Loginform>
        )}
      </Content>
    </Layout>
  );
}

export default App;
