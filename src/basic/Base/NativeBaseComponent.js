import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

// Create React Context for theme
export const ThemeContext = createContext({
  theme: null,
  foregroundColor: null
});

export default class NativeBaseComponent extends Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    theme: PropTypes.object
  };

  getContextForegroundColor() {
    return this.context.foregroundColor;
  }

  // eslint-disable-next-line class-methods-use-this
  renderComponent() {
    // This method should be overridden by subclasses
    return null;
  }

  render() {
    const contextValue = {
      theme: this.props.theme ? this.props.theme : this.context.theme,
      foregroundColor: this.context.foregroundColor
    };

    return (
      <ThemeContext.Provider value={contextValue}>
        {this.renderComponent()}
      </ThemeContext.Provider>
    );
  }
}

NativeBaseComponent.contextType = ThemeContext;
