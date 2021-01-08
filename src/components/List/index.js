import React from 'react';
import styled from 'styled-components';
import { List as AntdList, Avatar} from 'antd';

function List(props) {
    return (
        <StyledList>
            <ListHeading>Active Users</ListHeading>
            <AntdList
                itemLayout="horizontal"
                dataSource={props.users}
                renderItem={user => (
                    <AntdList.Item>
                        <AntdList.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{user.username}</a>}

                        />
                    </AntdList.Item>
                )}
            />
        </StyledList>
    )
}

export default List;

const StyledList = styled(AntdList)`
    margin-right: 10px;
    flex: 0 0 35%;
    padding: 20px;
    .ant-list-item-meta-content {
        flex-grow: 0;
    }
    h4 {
        font-size: 25px;
    }
    a {
        color: #097ef0;
    }
`

const ListHeading = styled.div`
    color: #757591;
    font-size: 20px;
    font-style: oblique;
    border-bottom: 1px solid #757591;
`