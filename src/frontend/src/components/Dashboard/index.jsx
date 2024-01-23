import { useState, useCallback, useEffect } from 'react';
import DashboardAlert from './DashboardAlert';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import TitleDashboard from './TitleDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Set the root element for the Modal component
Modal.setAppElement('#root');

/**
 * Dashboard Component
 * 
 * This component represents a dashboard that displays ticket data, allows status updates,
 * and provides functionality for deleting tickets.
 * 
 * @param {Object} props - The properties passed to the component
 * @param {Array} props.data - Array of objects representing the ticket data
 * 
 * @returns {JSX.Element} The Dashboard component
 */
const Dashboard = ({ data }) => {
  // State variables for managing modal, selected ticket, form data, and dashboard data
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [formData, setFormData] = useState({ status: 'DEFAULT' });
  const [dashboardData, setDashboardData] = useState(data);

  // Function to open the modal with the selected ticket
  const openModal = useCallback((ticket) => {
    setSelectedTicket(ticket);
    setFormData({ status: ticket.status || 'DEFAULT' });
    setModalIsOpen(true);
  }, []);

  // Function to close the modal
  const closeModal = useCallback(() => {
    setSelectedTicket(null);
    setFormData({ status: 'DEFAULT' });
    setModalIsOpen(false);
  }, []);

  // Function to handle status change in the form
  const handleStatusChange = useCallback((e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: e.target.value,
    }));
  }, []);

  // Function to fetch data from the server
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tickets');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const updatedData = await response.json();
      setDashboardData(updatedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to handle ticket deletion
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete ticket');
      }

      console.log('Ticket deleted successfully');
      // Update dashboardData directly to remove the deleted ticket
      setDashboardData(dashboardData.filter(ticket => ticket.id !== id));
      toast.success('Ticket deletado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error deleting ticket:', error);
      toast.error('Erro ao deletar o ticket. Por favor, tente novamente.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Function to handle form submission and update ticket status
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/tickets/${selectedTicket.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: formData.status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update ticket status');
      }

      console.log('Ticket status updated');
      closeModal();
      fetchData();
      toast.success('Status do ticket atualizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error('Error updating ticket status:', error);
      toast.error('Erro ao atualizar o status do ticket. Por favor, tente novamente.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  // Get the dashboard columns from the data
  const dashboardColumns = dashboardData ? Object.keys(dashboardData[0]) : [];

  // Update dashboard data when the data prop changes
  useEffect(() => {
    setDashboardData(data);
  }, [data]);

  return (
    <>
      {/* Display the title of the dashboard */}
      <TitleDashboard dashboardColumns={dashboardColumns} />

      {/* Check if there is data to display in the dashboard */}
      {dashboardData && dashboardData.length > 0 ? (
        <div className="rounded-md bg-white mx-20 my-10 rounded-lg items-center text-center overflow-y-auto max-h-96">
          {/* Display the data in a table */}
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200 text-center">
              {dashboardData.map((item) => (
                <tr key={item.id} onClick={() => openModal(item)}>
                  {dashboardColumns.map((column) => (
                    <td key={column} className="py-2 px-4">
                      {column === 'status' ? (
                        <DashboardAlert key={item.id} status={item[column]} />
                      ) : (
                        item[column]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center mt-4">Não há tickets disponíveis.</p>
      )}

      {/* Modal for editing ticket status */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Ticket Status"
        className="rounded-md bg-white mx-auto my-40 rounded-lg items-center animate__animated animate__fadeIn"
        style={{
          content: {
            top: '50%',
            left: '50%',
            width: '50%',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
          },
          overlay: {
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          },
        }}
      >
        {/* Form for updating ticket status */}
        {selectedTicket && (
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleStatusChange}
              >
                <option value="CLOSED">FINALIZADO</option>
                <option value="ALERT">ALERTA</option>
                <option value="RUNNING">EM ANDAMENTO</option>
              </select>
            </div>
            <div className="mt-4">
              {/* Buttons for submitting, deleting, and canceling the form */}
              <button className='bg-blue text-white font-bold py-2 px-4 ml-4 rounded hover:bg-blue-dark transition duration-300' type="submit">Update Status</button>
              <button
                className='bg-boldRed text-white font-bold py-2 px-4 ml-4 rounded hover:bg-boldRed-dark transition duration-300'
                onClick={() => handleDelete(selectedTicket.id)}
              >
                Delete Ticket
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-lightRed text-white font-bold py-2 px-4 ml-4 rounded hover:bg-lightRed-dark transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Toast container for displaying notifications */}
      <ToastContainer />
    </>
  );
};

// PropTypes for type-checking component props
Dashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

// Export the component as the default export
export default Dashboard;
