import { Descriptions, Button,message } from "antd";
import { MdEdit,MdDelete } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  axios  from "axios";

const Singleuser = () => {
   const [messageApi, contextHolder] = message.useMessage();
  const [post,setPost] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const URL = 'https://658a4e12ba789a962236e2f6.mockapi.io/blog';
  
  //getting single data from the api
  useEffect(() => {
    async function getSingledata(id){
      setLoading(true);
      try {
         await axios.get(`${URL}/${id}`).then((response) => {
        setPost(response.data);
      });
      setLoading(false);
        
      } catch (error) {
         messageApi.open({
            type: 'error',
            content: error.message,
          });
        setLoading(false);
      }
     

    }
    getSingledata(id);
  }, []);
  const items = [
    {
      key:'0',
      label:'Name',
      children:<h3>{post.name}</h3>
    },
  {
    key: '1',
    label: 'UserName',
    children: <p>{post.username}</p>,
  },
  {
    key: '2',
    label: 'Telephone',
    children: <p>{post.phone}</p>,
  },
  {
    key: '3',
    label: 'Email',
    children: <p>{post.email}</p>,
  },
  {
    key: '4',
    label: 'Company',
    children: <p>{post.company}</p>,
  },
  {
    key: '5',
    label: 'Address',
    children: <p>{post.address}</p>,
  },
  {
    key:'6',
    label:'Website',
    children:<a href={post.website} target="blank">comapny page</a>
  }
];
 function deletePost(id) {
  try{
      axios.delete(`${URL}/${id}`)
      navigate('/')
  }catch(e){
    messageApi.open({
            type: 'error',
            content: e.message,
    });
  }
  
  }
 
  return (
    <div className="container">
      {contextHolder}
      {loading && <h1 style={{textAlign:'center'}}>Loading...</h1>}
      {!loading && 
      <Descriptions 
       title="User Info" 
       items={items} 
       className="description"
       layout="vertical"
       extra={<>
       <Button type="text" shape="circle" className="btn" onClick={() => navigate(`/edit/${id}`)} icon={<MdEdit/>}></Button>
       <Button type="text" danger={true} shape="circle" className="btn" onClick={() => deletePost(post.id)} icon={<MdDelete />}></Button>
       </> }
      />}

    </div>
  )
}

export default Singleuser