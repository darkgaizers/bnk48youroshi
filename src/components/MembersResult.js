import React from 'react';
import MemberCard from './MemberCard';
import { Row, Col } from 'antd';
const MembersResult = ({ members }) => {
    return (
        <Row type="flex" justify="center">
            {
                members.map((member) => {
                    return <Col span={12}
                    key={"member_" + member.nickname + "_" + member.generation}
                            
                    >
                        <MemberCard
                            member={member} />
                    </Col>
                })
            }

        </Row>

    )
}
export default MembersResult;
