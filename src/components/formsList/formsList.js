import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormsList extends Component {
  // const [value, setValue] = React.useState('');
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
          <form>
              <input type="text"
                  placeholder="Search auto"
                  className="searchAuto"
                  onChange={this.props.brandFunc}
              />
          </form>
      </div>
    )
  }
}

FormsList.propTypes = {
  brandFunc: PropTypes.func,
};

export default FormsList;
