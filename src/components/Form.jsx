import PropTypes from 'prop-types'

function Form(props) {


    const handleSubmit = (event) => {
      event.preventDefault();

      const elements = event.target.elements
      const inputValue = elements.texts.value;

      props.details({
        inputValue
      });

      event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <label htmlFor="texts">Text: </label>
            <input type="text" id="texts" name="text"/>
        </fieldset>
        <button type="submit">Submit</button>
    </form>
  )
}

Form.propTypes = {
  details: PropTypes.func,
}

export default Form;
