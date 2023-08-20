/* eslint-disable no-param-reassign */
// @flow

import _ from 'lodash';

import bodyTheme from './Body';
import leftTheme from './Left';
import rightTheme from './Right';
import headerTheme from './Header';
import switchTheme from './Switch';
import buttonTheme from './Button';
import titleTheme from './Title';
import checkBoxTheme from './CheckBox';
import radioTheme from './Radio';
import labelTheme from './Label';
import textAreaTheme from './Textarea';
import textTheme from './Text';
import iconTheme from './Icon';
import spinnerTheme from './Spinner';
import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const theme = {
    variables,
    'NativeBase.Left': {
      ...leftTheme(variables)
    },
    'NativeBase.Right': {
      ...rightTheme(variables)
    },
    'NativeBase.Body': {
      ...bodyTheme(variables)
    },

    'NativeBase.Header': {
      ...headerTheme(variables)
    },

    'NativeBase.Button': {
      ...buttonTheme(variables)
    },

    'NativeBase.Title': {
      ...titleTheme(variables)
    },
    'NativeBase.CheckBox': {
      ...checkBoxTheme(variables)
    },

    'NativeBase.Radio': {
      ...radioTheme(variables)
    },

    'NativeBase.Icon': {
      ...iconTheme(variables)
    },
    'NativeBase.IconNB': {
      ...iconTheme(variables)
    },
    'NativeBase.Text': {
      ...textTheme(variables)
    },
    'NativeBase.Spinner': {
      ...spinnerTheme(variables)
    },

    'NativeBase.Label': {
      ...labelTheme(variables)
    },

    'NativeBase.Textarea': {
      ...textAreaTheme(variables)
    },

    'NativeBase.Switch': {
      ...switchTheme(variables)
    },
  };

  const cssifyTheme = (grandparent, parent, parentKey) => {
    _.forEach(parent, (style, styleName) => {
      if (
        styleName.indexOf('.') === 0 &&
        parentKey &&
        parentKey.indexOf('.') === 0
      ) {
        if (grandparent) {
          if (!grandparent[styleName]) {
            grandparent[styleName] = {};
          } else {
            grandparent[styleName][parentKey] = style;
          }
        }
      }
      if (
        style &&
        typeof style === 'object' &&
        styleName !== 'fontVariant' &&
        styleName !== 'transform'
      ) {
        cssifyTheme(parent, style, styleName);
      }
    });
  };

  cssifyTheme(null, theme, null);

  return theme;
};
