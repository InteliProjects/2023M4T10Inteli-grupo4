import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

/**
 * Mechanics Component
 * 
 * This component represents a page displaying a list of mechanics. It fetches mechanic data
 * from 'http://localhost:3000/api/mechanics' and renders a table with the available mechanics.
 * 
 * @returns {JSX.Element} - JSX element representing the Mechanics page.
 */
function Mechanics() {
  // State to store the fetched mechanic data
  const [mechanics, setMechanics] = useState([]);

  // Fetch mechanic data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch mechanic data from the API endpoint
        const response = await fetch('http://localhost:3000/api/mechanics');

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the response to get the mechanic data
        const data = await response.json();

        // Filter the data to exclude the 'allocations' and 'item' properties
        const filteredData = data.map(({ allocations, item, ...rest }) => rest);

        // Update the state with the filtered mechanic data
        setMechanics(filteredData);
      } catch (error) {
        // Log an error message if the data fetching fails
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function to fetch mechanic data
    fetchData();
  }, []);

  // Get the table headers from the first mechanic object in the data
  const tableHeaders = mechanics.length > 0 ? Object.keys(mechanics[0]) : [];

  // Render the Mechanics page
  return (
    <>
      <div className='inline-block'>
        {/* Include the Header and Sidebar components */}
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        {/* Display the title of the page using the Title component */}
        <Title title="Mecânicos" className="text-black" />
      </div>
      <div className="container mx-auto my-10">
        {mechanics.length > 0 ? (
          <div className="overflow-x-auto">
            {/* Render a table with the mechanic data */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {tableHeaders.map((header) => (
                    <th
                      key={header}
                      className="py-3 px-6 text-left font-medium text-blue uppercase tracking-wider text-lg"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mechanics.map((mechanic) => (
                  <tr key={mechanic.id}>
                    {tableHeaders.map((header) => (
                      <td key={header} className="py-4 px-6 whitespace-nowrap">
                        {mechanic[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center">No data available.</p>
        )}
      </div>
    </>
  );
}

export default Mechanics;
