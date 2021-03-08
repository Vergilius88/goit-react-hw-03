import { Component } from "react";

export default class Filter extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    const { onChange } = this.props;

    return (
      <label>
        Search contacts by name
        <input
          type="text"
          placeholder="Enter your search data."
          name="filter"
          onChange={onChange}
        />
      </label>
    );
  }
}
