import { Button,  Form, Input,notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Create = () => {
  const URL = 'https://658a4e12ba789a962236e2f6.mockapi.io/blog';
  const navigate =useNavigate();
  const [form] = Form.useForm();
  
  const [api, contextHolder] = notification.useNotification();
   const openNotificationWithIcon = (type, message) => {
    api[type]({
      message: message,
    });
  };
  const onFinish = (values) => {
    try{
      axios.post(URL,values);
    } catch(e){
      openNotificationWithIcon('error',e.message);
    }
    form.resetFields();
    openNotificationWithIcon('success','Posted');
    navigate('/');
    
  };

 

  const onFinishFailed = () => {
    
    openNotificationWithIcon('error','Invalid input');
  };
  return (
    <div className="container">
      {contextHolder}
      
     <Form
        name="basic"
        form={form}
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
        style={{ maxWidth: 600,padding:20, overflowX:'hidden',margin:'0 auto' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"

      >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please enter your name' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please enter your email' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="Phone"
      name="phone"
      rules={[{ required: true, message: 'Please enter your phone' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="Website"
      name="website"
      rules={[{ required: true, message: 'Please enter your website' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="Company"
      name="company"
      rules={[{ required: true, message: 'Please enter your company name' }]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="Address"
      name="address"
      rules={[{ required: true, message: 'Please enter your address' }]}
    >
      <Input/>
    </Form.Item>

    

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Post
      </Button>
    </Form.Item>
  </Form>
    </div>
  
  )
}

export default Create