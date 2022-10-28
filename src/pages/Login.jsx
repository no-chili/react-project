import React from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
import './style/Login.less'
import logo from '../assets/logo.png'
import { LoginApi } from '../request/api';
import {message} from 'antd'
export default function Login() {
  const navigate=useNavigate()
  const onFinish = (values) => {
    LoginApi({
      username:values.username,
      password:values.password
    })
    .then(res=>{
      if(res.errCode===0){
        message.success(res.message)
        // 存储数据
        localStorage.setItem('avatar',res.data.avatar)
        localStorage.setItem('cms-token',res.data['cms-token'])
        localStorage.setItem('editable',res.data.editable)
        localStorage.setItem('player',res.data.player)
        localStorage.setItem('username',res.data.username)
        // 跳转
        setTimeout(navigate('/list'),1000)
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
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
          <Form.Item>
            <Link to={'/register'}>还没有账号？立即注册</Link>
          </Form.Item>
          <Form.Item>
            <Button size='large' type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
