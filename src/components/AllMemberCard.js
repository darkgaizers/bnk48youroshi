import React from 'react';
import MemberCard from './MemberCard';
import { Row, Col } from 'antd';
const AllMemberCard = ({ members, onClick }) => {
    return (
        <Row type="flex" justify="center">
            {
                members.map((member) => {
                    return <Col span={10} order={"center"}>
                        <MemberCard
                            key={"member_" + member.nickname + "_" + member.generation}
                            member={member} onClick={onClick} />
                    </Col>
                })
            }

        </Row>

    )
}
export default AllMemberCard;
