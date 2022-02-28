import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { InputChange, FormSubmit } from "../../utils/TypeScript";
import { register } from "../../redux/actions/authAction";
import { Form, Input, Button } from "antd";

const RegisterForm = () => {
  const initialState = {
    name: "",
    account: "",
    password: "",
    cf_password: "",
  };
  const [userRegister, setUserRegister] = useState(initialState);
  const { name, account, password, cf_password } = userRegister;
  const dispatch = useDispatch();
  const handleChangeInput = (e: InputChange) => {
    const { value, name } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  };
  const onFinish = () => {
    dispatch(register(userRegister));
  };

  return (
    <Form layout="vertical" autoComplete="on" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Your name is up to 20 chars." }]}
      >
        <Input name="name" onChange={handleChangeInput} />
      </Form.Item>
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
      <Form.Item
        label="Confirm Password"
        name="cf_password"
        rules={[{ required: true, message: "Your confirm password." }]}
      >
        <Input.Password name="cf_password" onChange={handleChangeInput} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={name && account && password && cf_password ? false : true}
          block
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
