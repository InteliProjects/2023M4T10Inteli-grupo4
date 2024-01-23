import { useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import TableRow from './TableRow.jsx';
import TitleDashboard from './TitleDashboard.jsx';

// Set the root element for the Modal component
Modal.setAppElement('#root');

/**
 * AllocationsDashboard component displays a dashboard with data and a modal for item details.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.data - Array of objects representing the data to be displayed.
 */
function AllocationsDashboard({ data }) {
  // State to manage modal visibility and selected item
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open the modal with the selected item
  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedItem(null);
    setModalIsOpen(false);
  };

  // Columns to display in the dashboard
  const dashboardColumns = ['id', 'name', 'type'];

  return (
    <>
      {/* Display the title of the dashboard */}
      <TitleDashboard dashboardColumns={dashboardColumns} />

      {/* Dashboard container */}
      <div className="rounded-md bg-white mx-20 my-10 rounded-lg items-center" style={{ paddingRight: '10px' }}>
        <div className="overflow-auto" style={{ maxHeight: '500px', paddingLeft: '12px' }}>
          {/* Display the data in a table */}
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {data &&
                data.map((local) => (
                  <TableRow
                    key={local.id}
                    {...local}
                    onRowClick={() => openModal(local)}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for item details */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Item"
        className="rounded-md bg-white mx-auto my-40 rounded-lg items-center"
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
        {/* Display item details if selected */}
        {selectedItem && selectedItem.allocations && (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedItem.name}</h2>
            <p className="mb-2">ID: {selectedItem.id}</p>
            <p className="mb-4">Tipo: {selectedItem.type}</p>

            {/* Display allocations table */}
            <h3 className="text-xl font-bold mb-2">Allocations:</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-2 px-4">ID do Item</th>
                  <th className="py-2 px-4">Nome do Item</th>
                  {/* Add more columns as needed */}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-center">
                {selectedItem.allocations.map((allocation) => (
                  <tr key={allocation.item.id}>
                    <td className="py-2 px-4">{allocation.item.id}</td>
                    <td className="py-2 px-4">{allocation.item.name}</td>
                    {/* Add more columns as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* Close button */}
        <button onClick={closeModal} className="mt-4 bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Fechar
        </button>
      </Modal>
    </>
  );
}

// PropTypes for type-checking component props
AllocationsDashboard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

// Export the component as the default export
export default AllocationsDashboard;
