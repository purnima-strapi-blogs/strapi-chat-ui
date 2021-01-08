import React from 'react';
import styled from 'styled-components';

function Header(props) {
    return(
        <StyledHeader>
            <OnlineStatusContainer>
                <OnlineIcon>
                    <i className="fa fa-circle" aria-hidden="true"></i>
                </OnlineIcon>
                <div>{props.room}</div>
            </OnlineStatusContainer>
            <CloseIconContainer>
                <a href="/">
                    <CloseIcon> 
                        <i className="fa fa-times-circle" aria-hidden="true"></i>
                    </CloseIcon>
                </a>
            </CloseIconContainer>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2979FF;
    border-radius: 4px 4px 0 0;
    height: 60px;
    width: 100%;
`
const OnlineStatusContainer = styled.div`
    flex: 0.5;
    display: flex;
    align-items: center;
    margin-left: 5%;
    color: white;
`;
const CloseIconContainer = styled.div`
    margin-right: 5%;
`

const OnlineIcon = styled.div`
    color: #11ec11;
    margin-right: 10px
`; 

const CloseIcon = styled.div`
    font-size: 20px;
    color: #fff;
`;
