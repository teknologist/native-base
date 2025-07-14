import React from 'react';
import PropTypes from 'prop-types';
import { StyleProvider } from 'native-base-shoutem-theme';
import { ThemeContext } from '../basic/Base/NativeBaseComponent';

const ThemeProvider = ({ style, children }) => {
  return (
    <StyleProvider style={style}>
      <ThemeContext.Consumer>
        {contextValue => (
          <ThemeContext.Provider
            value={{
              theme: style,
              foregroundColor: contextValue.foregroundColor
            }}
          >
            {children}
          </ThemeContext.Provider>
        )}
      </ThemeContext.Consumer>
    </StyleProvider>
  );
};

ThemeProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default ThemeProvider;