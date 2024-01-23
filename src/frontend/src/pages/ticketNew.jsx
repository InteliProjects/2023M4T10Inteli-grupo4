import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketForm from '../components/TicketForm';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

const fields = [
  { name: 'allocation_id', label: 'ID de alocação', type: 'text', placeholder: 'Digite o ID de alocação' },
  { name: 'last_allocation_id', label: 'ID da última alocação', type: 'text', placeholder: 'Digite o ID da última alocação' },
  { name: 'mechanic_id', label: 'ID do mecânico', type: 'text', placeholder: 'Digite o ID do mecânico' },
];

function TicketNew() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/api/tickets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create a new ticket');
      }

      const newTicket = await response.json();
      console.log('New Ticket:', newTicket);

      toast.success('Novo ticket criado com sucesso!', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error creating new ticket:', error);
    }
  };

  return (
    <>
      <div className='inline-block'>
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        <Title title="Novo ticket" className="text-black" />
      </div>
      <TicketForm
        fields={fields}
        statusOptions={['RUNNING', 'ALERT', 'CLOSED']}
        onSubmit={handleSubmit}
      />
      <ToastContainer />
    </>
  );
}

export default TicketNew;
