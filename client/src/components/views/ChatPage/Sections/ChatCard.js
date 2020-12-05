import React from "react";
import moment from 'moment';
import { Comment, Tooltip, Avatar } from 'antd';

function ChatCard(props) {
    return (
        <div style={{ width: '100%', color:'white' }}>
            <Comment
                author={<p style={{ color:'white' }}>{props.sender.name}</p>}
                avatar={
                    <Avatar
                        src={props.sender.image} alt={props.sender.name}
                    />
                }
                content={
                    props.message.substring(0, 7) !== 'uploads'  ?
                        <p style={{ fontWeight: 'bold' }}>
                            {props.message}
                        </p>:
                        props.message.substring(props.message.length - 3, props.message.length) === 'mp4' ?
                            <video
                                style={{ maxWidth: '200px' }}
                                src={`http://localhost:5000/${props.message}`} 
                                alt="video"
                                type="video/mp4" controls
                            />:
                            <a href={`http://localhost:5000/${props.message}`} download>
                                <img
                                    style={{ maxWidth: '200px' }}
                                    src={`http://localhost:5000/${props.message}`}
                                    alt="img"
                                />
                            </a>                        
                }
                datetime={
                    <Tooltip title={moment(props.createdAt).format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment(props.createdAt).fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default ChatCard;

