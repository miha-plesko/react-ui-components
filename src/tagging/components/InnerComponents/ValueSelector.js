import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import TaggingPropTypes from '../TaggingPropTypes';

class ValueSelector extends React.Component {
  getvalues = values =>
    values.map(tag => ({ value: tag.id, label: tag.description }));

  handleChange = (selectedOption) => {
    this.props.onTagValueChange({
      description: selectedOption.label,
      id: selectedOption.value,
    });
  };

  selector = (value, label, values) => (
    <Select
      name="form-field-name"
      value={value}
      label={label}
      onChange={this.handleChange}
      options={values}
      clearable={false}
      ignoreCase
    />
  );

  render() {
    return this.selector(
      this.props.selectedOption.id,
      this.props.selectedOption.description,
      this.getvalues(this.props.values),
    );
  }
}

ValueSelector.propTypes = {
  selectedOption: TaggingPropTypes.value,
  values: PropTypes.arrayOf(TaggingPropTypes.value).isRequired,
  onTagValueChange: PropTypes.func.isRequired,
};

ValueSelector.defaultProps = {
  selectedOption: {},
};

export default ValueSelector;
