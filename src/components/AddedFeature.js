import React from 'react';
// import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {removeFeature} from '../actions';

const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => dispatch(removeFeature(props.feature))}>X</button>
      {props.feature.name} 
    </li>
  );
};

// export default connect(null, {removeFeature})(AddedFeature);
export default AddedFeature;
