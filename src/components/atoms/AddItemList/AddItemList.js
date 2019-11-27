import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';
import Icon from '../Icon/Icon';

import './addItemList.scss';

const list = ["1.Option", "2.Options"];
var inputItem = "";

function handleChange(e){
  inputItem = e.target.value;
}

function handleClick(){
  console.log("testii");
  list.push(inputItem);
  console.log(list);
}

const AddItemList = ({ ...props }) => (
  <div className="addItemListwrapper">
    <TextField placeholder={props.placeholder} onchange={(e) => {handleChange(e)}}>
        <Icon icon={"addqwikilightblue"} width={1.5} height={1.5} onclick={(e) => handleClick(e)}/>
    </TextField>
    <div className="listitems">
      <ul>
        {list.map((item,i) =>
          <li key={i}>
            <p>
              {item}
            </p>
          </li>
        )}
      </ul>
    </div>
  </div>
);

AddItemList.propTypes = {
    placeholder: PropTypes.string
};

AddItemList.defaultProps = {

};

export default AddItemList;
