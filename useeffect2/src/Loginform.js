import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import Password from 'antd/lib/input/Password';
// import Form.Item from 'antd/lib/form/FormItem';

const Loginform = (props) => {
  const [initialcred, setCred] = useState({
    userName: '',
    password: '',
  });

  const changeTask = (event) => {
    var logincred = { ...initialcred };

    setCred({ ...logincred, [event.target.name]: event.target.value });
    console.log(initialcred);
  };
  const clickLogin = (event) => {

props.login(initialcred)
  }
  return (
    <>
      <Form>
        <Form.Item
          name="userName"
          label="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            name="userName"
            prefix={
              <UserOutlined className="site-from-item-icon"></UserOutlined>
            }
            onChange={changeTask}
          ></Input>
        </Form.Item>
        <Form.Item name="password" label="password">
          <Input
            name="password"
            prefix={
              <LockOutlined className="site-from-item-icon"></LockOutlined>
            }
            onChange={changeTask}
          ></Input>
        </Form.Item>
        <Form.Item label="Rememberme">
          <Checkbox></Checkbox>
        </Form.Item>
        <Form.Item>
          <Button className="button" onClick={clickLogin}>Log in</Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Loginform;
