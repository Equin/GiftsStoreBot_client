import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {


    //console.log(event.target);

    if (this.props.setValue)
      this.props.setValue(event.target.value);

/*
    var index = event.target.options.selectedIndex;
    var optionElement = event.target.options[index];

    console.log(optionElement.getAttribute('data-id'));
    var key = optionElement.getAttribute('data-id');
    */

    if (this.props.stableID) {
      var index = event.target.options.selectedIndex;
      var optionElement = event.target.options[index];
      var key = optionElement.getAttribute('data_char_val_id');
      this.props.setComplexValue({ id: this.props.stableID, vlueID: key });
    }
  }

  render() {
    const options = this.props.options;
    
    return (
      <select className='selects' value={this.props.selectedOption} onChange={this.handleChange}>

        {this.props.placeholder && <option key="holder" value="">{this.props.placeholder}</option>}

        {options.map(option => (
          <option data_char_val_id={option.chValueID} key={option.key} value={option.key}>
            {option.value}
          </option>
        ))
        }
      </select>
    );
  }
}

export default Dropdown;