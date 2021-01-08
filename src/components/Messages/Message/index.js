import React from 'react';
import {
    MessagesContainer,
    MessageBox,
    MessageText,
    SentBy
} from './styles';

function Message(props) {
    const { username, message: { user, text } } = props;
    let sentByCurrentUser = false;

    const trimmedName = username.trim().toLowerCase()

    if (user === trimmedName) {
        sentByCurrentUser = true
    }
    const background = sentByCurrentUser ? "blue" : "dark";
    const textPosition = sentByCurrentUser ? "end" : "start";
    const textColor = sentByCurrentUser ? "white" : "dark";
    const sentBy = sentByCurrentUser ? "right" : "left";
    return (
        <MessagesContainer textPosition={textPosition}>
            <MessageBox background={background}>
                <MessageText color={textColor}>{text}</MessageText>
            </MessageBox>
            <SentBy sentBy={sentBy}>{user}</SentBy>
        </MessagesContainer>
    )
}

export default Message;

