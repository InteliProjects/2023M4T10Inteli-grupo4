import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Title from '../components/Title';

function Locals() {
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/locals');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        // Filtra os dados para excluir as propriedades 'allocations' e 'item'
        const filteredData = data.map(({ allocations, item, ...rest }) => rest);
        setLocals(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const tableHeaders = locals.length > 0 ? Object.keys(locals[0]) : [];

  return (
    <>
    <div className='inline-block'>
        <Header />
        <Sidebar />
      </div>
      <div className="flex items-center justify-center mt-20">
        <Title title="Locais" className="text-black" />
      </div>
    <div className="container mx-auto my-10">
      {locals.length > 0 ? (
        <div className="overflow-x-auto">
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

export default Locals;
