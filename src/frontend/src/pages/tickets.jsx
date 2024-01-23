import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Title from '../components/Title';
import Dashboard from '../components/Dashboard';

function Tickets() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/tickets')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <div className='inline-block'>
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20 mb-20">
        <Title title="Tickets" className="text-black" />
      </div>
      <div>
        <Dashboard data={data} />
      </div>
    </>
  );
}

export default Tickets;
