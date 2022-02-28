import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputChange, FormSubmit } from "../../utils/TypeScript";
import { login } from "../../redux/actions/authAction";
import { Form, Input, Button } from "antd";

const LoginPass = () => {
  const initialState = { account: "", password: "" };
  const [userLogin, setUserLogin] = useState(initialState);
  const { account, password } = userLogin;
  const dispatch = useDispatch();
  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };
  const onFinish = () => {
    dispatch(login(userLogin));
  };

  return (
    <Form layout="vertical" autoComplete="on" onFinish={onFinish}>
      <Form.Item
        label="Email / Phone number"
        name="account"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input name="account" onChange={handleChangeInput} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password name="password" onChange={handleChangeInput} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={account && password ? false : true}
          block
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPass;
