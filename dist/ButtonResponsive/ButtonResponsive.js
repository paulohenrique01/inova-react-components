import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Button, Hidden, Tooltip, Icon, Fab } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

function ButtonResponsive(props) {
  var classes = useStyles(props);

  var className = props.className,
      description = props.description,
      icon = props.icon,
      _props$visibled = props.visibled,
      visibled = _props$visibled === void 0 ? true : _props$visibled,
      other = _objectWithoutProperties(props, ["className", "description", "icon", "visibled"]);

  return React.createElement(React.Fragment, null, visibled && React.createElement(React.Fragment, null, React.createElement(Hidden, {
    only: ['sm', 'md', 'lg', 'xl']
  }, React.createElement(Tooltip, {
    title: description
  }, React.createElement(Fab, {
    size: "small",
    className: classes.button
  }, React.createElement(Icon, null, icon)))), React.createElement(Hidden, {
    only: "xs"
  }, React.createElement(Button, Object.assign({
    variant: "outlined",
    className: classNames(classes.button, className)
  }, other), description))));
}

export default ButtonResponsive;