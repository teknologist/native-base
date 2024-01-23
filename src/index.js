import { StyleProvider, connectStyle } from 'native-base-shoutem-theme';
import { keys } from 'lodash';
import { Col, Row, Grid } from 'react-native-easy-grid';

import setDefaultThemeStyle from './init';
import getTheme from './theme/components';
import variables from './theme/variables/platform';
import { Text } from './basic/Text';
import { Button } from './basic/Button';
import { IconNB } from './basic/IconNB';
import { Icon } from './basic/Icon';
import { Header } from './basic/Header';
import { Title } from './basic/Title';
import { Left } from './basic/Left';
import { Right } from './basic/Right';
import { Body } from './basic/Body';
import { CheckBox } from './basic/Checkbox';
import { Radio } from './basic/Radio';
import { Spinner } from './basic/Spinner';
import { Switch } from './basic/Switch';
import { Label } from './basic/Label';
import { Textarea } from './basic/Textarea';
import {Item} from './basic/Item';
import { Input } from './basic/Input';
import { Thumbnail } from './basic/Thumbnail';

setDefaultThemeStyle();
// Theme
export {
  getTheme,
  variables,
  StyleProvider,
  connectStyle,
  Button,
  IconNB,
  Icon,
  Header,
  Title,
  Left,
  Right,
  Body,
  CheckBox,
  Radio,
  Spinner,
  Switch,
  Label,
  Textarea,
  Col,
  Row,
  Grid,
  Text,
  Item,
  Input,
  Thumbnail
};

const mapPropsToStyleNames = (styleNames, props) => keys(props);

export { mapPropsToStyleNames };
