import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import ElementsForm from '../components/ElementsForm';

const fields = [
  { name: 'name', label: 'Nome do Mecânico', type: 'text', placeholder: 'Digite o nome do mecânico' },
];

function MechanicNew() {
  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3000/api/mechanics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to create a new mechanic');
      }

      const newMechanic = await response.json();
      console.log('New Mechanic:', newMechanic);

      toast.success('Novo mecânico criado com sucesso!', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error creating new mechaninc:', error);
    }
  };

  return (
    <>
      <div className='inline-block'>
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        <Title title="Novo mecânico" className="text-black" />
      </div>
      <ElementsForm
        fields={fields}
        onSubmit={handleSubmit}
      />
      <ToastContainer />
    </>
  );
}

export default MechanicNew;