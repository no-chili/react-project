import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
import './style/Login.less'
import logo from '../assets/logo.png'
import {RegisterApi} from '../request/api'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const navigate=useNavigate()
  const onFinish = (values) => {
    RegisterApi({
      username:values.username,
      password:values.password
    })
    .then(res=>{
      if(res.errCode===0){
        message.success(res.message)
        setTimeout(navigate('/login'),1000)
      }else{
        message.error(res.message)
      }
    })
  };
  return (
    <div className='login'>
      <div className="login_box">
        <img src={logo}/>
        <Form
          onFinish={onFinish}
          name="basic"
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入你的用户名!' }]}
          >
            <Input prefix={<UserOutlined/>} size='large'/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码!' }]}
          >
            <Input.Password prefix={<LockOutlined/>} size='large'/>
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认你的密码！',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次的密码不一致！'));
                },
              }),
            ]}
          >
              <Input.Password prefix={<LockOutlined/>} size='large'/>
          </Form.Item>
          <Form.Item>
            <Link to={'/login'}>已有账号？立即登录</Link>
          </Form.Item>
          <Form.Item>
            <Button size='large' type="primary" htmlType="submit" block>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
