import { Card,Pagination } from 'antd';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const Users = () => {
   const [user,setUser] = useState([])
  const [loading,setLoading] =useState(false);
  const URL ='https://658a4e12ba789a962236e2f6.mockapi.io/blog';
  
  async function getData(){
      try{
        setLoading(true);
        const res = await axios.get(URL);
        setUser(res.data);
        setLoading(false);
      } catch (e){
        console.log(e.message);
        setLoading(false);
      } 
    }
  
  useEffect(() =>{
  getData()
  }
   ,[])
  
  const [currentPage,setCurrentPage] = useState(1)
  const data = user.slice(6 * (currentPage - 1),currentPage * 6);
  
  return (
    <div className="container wrapper">
      <Pagination defaultCurrent={currentPage} onChange={e => setCurrentPage(e)}  total={user.length} pageSize={6}/>
       {loading &&  <Loading/>}
      <div className="flex">
        {!loading  && data.map((e,i) => (
        <Card key={e.id} title={`User-${i+1}`} className='card' extra={<Link to={`/${e.id}`}>See More </Link>} style={{ width: 300 }}>
          <p>{e.name}</p>
        </Card>
        ))}
      </div>
      
    </div>
  )
}

export default Users