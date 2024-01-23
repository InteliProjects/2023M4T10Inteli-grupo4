import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

/**
 * Items Component
 * 
 * This component represents a page displaying information about items.
 * It fetches data from the 'http://localhost:3000/api/items' endpoint, filters out
 * unnecessary properties ('allocations' and 'item'), and renders the data in a table format.
 * 
 * @returns {JSX.Element} - JSX element representing the Items page.
 */
function Items() {
  // State to hold the fetched item data
  const [locals, setLocals] = useState([]);

  // Effect hook to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the 'http://localhost:3000/api/items' endpoint
        const response = await fetch('http://localhost:3000/api/items');

        // Check if the request was successful
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Parse the response to get the data
        const data = await response.json();

        // Filter the data to exclude the properties 'allocations' and 'item'
        const filteredData = data.map(({ allocations, item, ...rest }) => rest);

        // Set the filtered data to the state
        setLocals(filteredData);
      } catch (error) {
        // Log and handle errors that occur during the request
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Determine the table headers based on the keys of the first item
  const tableHeaders = locals.length > 0 ? Object.keys(locals[0]) : [];

  // Render the Items page
  return (
    <>
      <div className='inline-block'>
        {/* Include the Header and Sidebar components */}
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        {/* Display the title of the page using the Title component */}
        <Title title="Itens" className="text-black" />
      </div>
      <div className="container mx-auto my-10">
        {locals.length > 0 ? (
          <div className="overflow-x-auto">
            {/* Render a table with headers and item data */}
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
                {locals.map((local) => (
                  <tr key={local.id}>
                    {tableHeaders.map((header) => (
                      <td key={header} className="py-4 px-6 whitespace-nowrap">
                        {local[header]}
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

export default Items;
