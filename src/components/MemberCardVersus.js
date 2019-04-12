import React from 'react';
import MemberCard from './MemberCard';
import { Row, Col } from 'antd';
const MemberCardVersus = ({ members, onClick }) => {
    return (
        <Row type="flex" justify="space-around">
            {/*             {
                members.map((member) => {
                    return <Col span={10}
                    key={"member_" + member.nickname + "_" + member.generation}
                            
                    >
                        <MemberCard
                            member={member}  onClick={onClick} />
                    </Col>
                })
            } */}
            <Col span={10}
                key={"member_" + members[0].nickname + "_" + members[0].generation}

            >
                <MemberCard
                    member={members[0]} onClick={(member)=>{
                        onClick([member,members[1]])
                    }} />
            </Col>
            <Col span={10}
                key={"member_" + members[1].nickname + "_" + members[1].generation}

            >
                <MemberCard
                    member={members[1]} onClick={(member)=>{
                        onClick([member,members[0]])
                    }} />
            </Col>
        </Row>

    )
}
export default MemberCardVersus;
