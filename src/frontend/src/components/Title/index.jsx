import PropTypes from 'prop-types';

/**
 * Functional component representing a title with a specified text.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The text to be displayed as the title.
 * @returns {JSX.Element} - JSX element representing the title.
 */
function Title(props){
  return (
    // Container div with styling class for positioning
    <div className='inline-block pt-20'>
      {/* Heading with styling classes for appearance */}
      <h1 className='text-blue font-extrabold text-6xl'>{props.title}</h1>
    </div>
  )
}

// PropTypes for type checking and documenting component API
Title.propTypes = {
  title: PropTypes.string.isRequired,
};

// Exporting the Title component as the default export
export default Title;
