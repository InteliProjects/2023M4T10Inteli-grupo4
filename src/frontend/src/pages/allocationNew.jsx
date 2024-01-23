import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';
import ElementsForm from '../components/ElementsForm';

// Fields array specifying form fields for the ElementsForm component
const fields = [
  { name: 'local_id', label: 'ID do Local', type: 'text', placeholder: 'Digite o ID do local' },
  { name: 'item_id', label: 'ID do item', type: 'text', placeholder: 'Digite o ID do Item' },
];

/**
 * AllocationNew Component
 * 
 * This component represents a page for creating a new allocation. It includes a form for user input,
 * and it utilizes the ElementsForm component.
 * 
 * @returns {JSX.Element} - JSX element representing the AllocationNew page.
 */
function AllocationNew() {
  /**
   * Handles the form submission by making a POST request to create a new allocation.
   * 
   * @param {Object} formData - The form data submitted by the user.
   */
  const handleSubmit = async (formData) => {
    try {
      // Making a POST request to create a new allocation
      const response = await fetch('http://localhost:3000/api/allocations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to create a new allocation');
      }

      // Parse the response to get the newly created allocation
      const newAllocation = await response.json();
      console.log('New Allocation:', newAllocation);

      // Display a success toast message
      toast.success('Nova alocação criada com sucesso!', {
        position: 'top-right',
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      // Log and handle errors that occur during the request
      console.error('Error creating new allocation:', error);
    }
  };

  // Render the AllocationNew page
  return (
    <>
      <div className='inline-block'>
        {/* Include the Header and Sidebar components */}
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        {/* Display the title of the page using the Title component */}
        <Title title="Nova alocação" className="text-black" />
      </div>
      {/* Include the ElementsForm component for user input */}
      <ElementsForm
        fields={fields}
        onSubmit={handleSubmit}
      />
      {/* Display toast notifications using the ToastContainer component */}
      <ToastContainer />
    </>
  );
}

export default AllocationNew;
