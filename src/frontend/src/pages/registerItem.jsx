import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import ElementsForm from '../components/ElementsForm';

/**
 * RegisterItem Component
 * 
 * This component represents a page for registering a new item. It includes a form with fields
 * for 'ID' and 'Name' of the item. Upon successful form submission, it sends a POST request to
 * 'http://localhost:3000/api/items' to create a new item.
 * 
 * @returns {JSX.Element} - JSX element representing the RegisterItem page.
 */
const RegisterItem = () => {
  // Form fields for registering a new item
  const fields = [
    { name: 'id', label: 'ID do item', type: 'text', placeholder: 'Digite o ID do item' },
    { name: 'name', label: 'Nome do item', type: 'text', placeholder: 'Digite o nome do item' },
  ];

  /**
   * Handles form submission by sending a POST request to create a new item.
   * 
   * @param {Object} formData - The form data containing 'id' and 'name' properties.
   */
  const handleSubmit = async (formData) => {
    try {
      // Send a POST request to create a new item
      const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to create a new Item');
      }

      // Parse the response to get the newly created item
      const newItem = await response.json();
      console.log('New Item:', newItem);

      // Display a success toast message
      toast.success('Novo item criado com sucesso!', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      // Log an error message if creating a new item fails
      console.error('Error creating new item:', error);
    }
  };

  // Render the RegisterItem page
  return (
    <>
      <div className='inline-block'>
        {/* Include the Header and Sidebar components */}
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        {/* Display the title of the page using the Title component */}
        <Title title="Novo item" className="text-black" />
      </div>
      {/* Include the ElementsForm component for user input */}
      <ElementsForm
        fields={fields}
        onSubmit={handleSubmit}
      />
      {/* Display the ToastContainer for showing toast messages */}
      <ToastContainer />
    </>
  );
}

export default RegisterItem;
