import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  static propTypes = {
    dropdownArray: PropTypes.array,
  };

  state = {
    searchedData: '',
    searchedValue: [],
    dataList: [],
  };

  _handleDataItem = (item) => {
    const { dataList } = this.state;

    const dataItem = {
      id: Date.now(),
      value: item,
    }

    const list = [...dataList, dataItem];

    this.setState({
      dataList: list
    });
  };

  _onSearch = (e) => {
    this.setState({
      searchedValue: e.target.value,
    });
  }

  _handleDeleteItem = (id) => {
    const { dataList } = this.state;
    const filteredDataList = dataList.filter(item => item.id !== id);

    this.setState({
      dataList: filteredDataList,
    });
  };

  // darshak@coffeebeans.io
  // trahul@coffeebeans.io

  render() {
    const { dropdownArray } = this.props;
    const { searchedValue, dataList } = this.state;

    return (
      dropdownArray && dropdownArray.length ? (
        <div className="select-container">
          <div className="dropdown-list">
            <div className="dropdown-list__container">
              {
                dataList && dataList.length ? (
                  dataList.map((dataItem) => (
                    <div key={dataItem.id} className="dropdown-list__value">
                      <div>{dataItem.value}</div>
                      <div
                        onClick={() => this._handleDeleteItem(dataItem.id)}
                        className="dropdown-list__value-delete"
                      >&times;</div>
                    </div>
                  ))
                ) : <div className="empty-state">No selected value</div>
              }
            </div>
            <input
              type='text'
              placeholder={'search...'}
              value={searchedValue}
              onChange={this._onSearch}
              className="input"
            />
          {
            dropdownArray
            .filter(item => item.includes(searchedValue))
            .map((item, index) => (
              <div key={index} className="dropdown-list__item" onClick={() => this._handleDataItem(item)}>
                {item}
              </div>
            ))
          }
          </div>
        </div>
      ) : <div>No data available</div>
    );
  }
}

export default Dropdown;
