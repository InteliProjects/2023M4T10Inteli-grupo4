import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Title from '../components/Title';
import AllocationsDashboard from '../components/Dashboard/AllocationsDashboard';

/**
 * Allocations Component
 * 
 * This component represents a page displaying allocations. It fetches data from the 'http://localhost:3000/api/locals'
 * endpoint and passes it as a prop to the AllocationsDashboard component for rendering.
 * 
 * @returns {JSX.Element} - JSX element representing the Allocations page.
 */
function Allocations() {
  // State to hold the fetched data
  const [data, setData] = useState(null);

  // Effect hook to fetch data from the API when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/api/locals')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Render the Allocations page
  return (
    <>
      <div className='inline-block'>
        {/* Include the Header and Sidebar components */}
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20 mb-20">
        {/* Display the title of the page using the Title component */}
        <Title title="Alocações" className="text-black" />
      </div>
      <div>
        {/* Include the AllocationsDashboard component to display allocation data */}
        <AllocationsDashboard data={data} />
      </div>
    </>
  );
}

export default Allocations;
