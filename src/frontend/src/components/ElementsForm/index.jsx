import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * ElementsForm Component
 * 
 * This component represents a form that dynamically generates input fields based on the provided 'fields' prop.
 * 
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onSubmit - Callback function triggered when the form is submitted.
 * @param {Object[]} props.fields - Array of objects representing form fields, each containing 'name', 'label', 'type', and 'placeholder'.
 * 
 * @returns {JSX.Element} - JSX element representing the form with dynamic input fields.
 */
function ElementsForm({ fields, onSubmit }) {
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
        <div className="flex items-center justify-between">
          {/* Submit button with styling classes */}
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
ElementsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object),
};

export default ElementsForm;
