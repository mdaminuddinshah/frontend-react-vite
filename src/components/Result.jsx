
import PropTypes from 'prop-types'

function Result(props) {

  return (
    <div style={{border: "1px solid black", marginTop: "10px"}}>
        <h2>{props.text}</h2>
        <input type="checkbox" id={props.id} checked={props.cek} onChange={props.toggle}/>
    </div>
  )
}

Result.propTypes = {
    text: PropTypes.string,
    cek: PropTypes.bool,
    toggle: PropTypes.func,
    id: PropTypes.string,

}

export default Result;
