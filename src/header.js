import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
            
                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="test" />
                </div>
            </div>
            <div className="heade_Middle">
                <div className="header_options header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header_options">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header_options">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header_options">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header_options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                <IconButton>
                <AddIcon />
                </IconButton>
                <IconButton>
                <ForumIcon />
                </IconButton>
                <IconButton>
                <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                <ExpandMoreIcon />
                </IconButton>

            </div>
        </div>
    )
}

export default Header
