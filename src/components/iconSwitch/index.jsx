import React from "react";
//import { view_list, view_module } from "@material-ui/icons/core/Icon";
//import { Icon } from "@material-ui/icons";

import {Icon} from '@material-ui/core';

const IconSwitch = ({onSwitch, icon}) => {
  return (
    <div className="icon icon-container">
      <Icon onClick={onSwitch}>{icon}</Icon>
    </div>
  );
};

export default IconSwitch