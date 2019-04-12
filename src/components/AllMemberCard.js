import React from 'react';
import MemberCard from './MemberCard';
import { Row } from 'antd';
const AllMemberCard = ({ members, onClick }) => {
    /* console.log(members.length) */
    return (
        <Row type="flex" justify="center">
            {
                members.map((member) => {
                    return <MemberCard
                            key={"member_" + member.nickname + "_" + member.generation}
                            member={member} onClick={onClick} />
                })
            }

        </Row>

    )
}
export default AllMemberCard;
