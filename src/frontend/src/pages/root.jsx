import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Title from '../components/Title';
import ItemDashboard from '../components/Dashboard';

export default function Root() {
  return (
    <>
      <div className='inline-block'>
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        <Title title="Chamados" className="text-black" />
      </div>
      <div>
        <ItemDashboard />
      </div>
    </>
  );
}