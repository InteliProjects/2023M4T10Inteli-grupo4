import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * TicketForm Component
 * 
 * This component represents a form for creating or updating tickets. It dynamically generates input fields
 * based on the provided 'fields' prop and includes a dropdown for selecting the ticket status.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onSubmit - Callback function triggered when the form is submitted.
 * @param {Object[]} props.fields - Array of objects representing form fields, each containing 'name', 'label', 'type', and 'placeholder'.
 * @param {string[]} props.statusOptions - Array of strings representing the available ticket status options.
 * 
 * @returns {JSX.Element} - JSX element representing the ticket form.
 */
function TicketForm({ fields, onSubmit, statusOptions }) {
  const [formValues, setFormValues] = useState({});

  // Function to handle changes in input fields
  const handleChange = (e, fieldName) => {
    setFormValues({
      ...formValues,
      [fieldName]: e.target.value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <form className="w-full max-w-sm" onSubmit={handleSubmit} method="POST">
        {/* Mapping over 'fields' to generate input fields dynamically */}
        {fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>
              {field.label}
            </label>
            {/* Input field with styling classes */}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formValues[field.name] || ''}
              onChange={(e) => handleChange(e, field.name)}
            />
          </div>
        ))}
        {/* Dropdown for the 'status' field with styling similar to text boxes */}
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
            Status:
          </label>
          <div className="relative">
            {/* Select dropdown with styling classes */}
            <select
              id="status"
              name="status"
              value={formValues.status || ''}
              onChange={(e) => handleChange(e, 'status')}
              className="block appearance-none w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {/* Mapping over 'statusOptions' to generate dropdown options */}
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {/* Dropdown icon styling */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12L15 7 5 7z" />
              </svg>
            </div>
          </div>
        </div>
        {/* Submit button with styling classes */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

// PropTypes for type checking and documenting component API
TicketForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array,
  statusOptions: PropTypes.array.isRequired,
};

export default TicketForm;
