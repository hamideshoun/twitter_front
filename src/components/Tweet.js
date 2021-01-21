import React from 'react';
import './Tweet.css';

export default function Tweet(props) {
    console.log(props.username);
    return (
        <div className='tweet' >
            <ProfilePicture />
            <UserName username={props.username} />
            <Context img={props.img} tweet={props.tweet} />
        </div>
    )
}



const ProfilePicture = () => (
    <img className="profile_picture"
        src="https://yt3.ggpht.com/proxy/FG_uVYfhq4RCt_AG8yBS_Zc5IfyHLLnhHwFTboJcn6QImN9-8V-Mh1mhSwAMNvunrmBqEyEw4-32wx-B-a9jMwiDVUp_BYJJgA8wTuHypn_utAYMf0RmW8WxLE2tA9zZP5CSwlijG1vtYOfEzincs1oROYzw4g88vNzGRwYOYc9LQxXnfnr-9iEh0Bg09MzgNA=-w256-h256-rw-pd-pc0xffffffff"
        alt="" 
    />
);

const UserName = (props) => (
    <h4>
        {props.username}
    </h4>
);

const Context = (props) => (
    <div>
        <h3>{props.tweet}</h3>
        <img src={props.img} alt='' />
    </div>
);