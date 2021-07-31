import { Avatar, Icon } from "@material-ui/core";
import React from "react";
import "./sideBarRow.css";

function sideBarRow({src , Icon , title}) {
    return (
        <div className="sideBarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    );
}

export default sideBarRow;
