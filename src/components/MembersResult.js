import React from 'react';
import MemberCard from './MemberCard';
import { Row,Typography  } from 'antd';
const { Title } = Typography;
const MembersResult = ({ members }) => {
    return (
        <div>
            <br/>
            <Title level={2}>วันนี้คุณโอชิ</Title>
            <Row type="flex" justify="center">
            {
                members.map((member) => {
                    return <MemberCard
                        key={"member_" + member.nickname + "_" + member.generation}
                    
                            member={member} />
                })
            }

        </Row>
        </div>

    )
}
export default MembersResult;
