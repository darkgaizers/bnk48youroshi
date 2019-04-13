import React from 'react';
import MemberCard from './MemberCard';
import { Row,Col, Button } from 'antd';
const MemberCardVersus = ({ members, onClick, onGetResultClick }) => {
    return (
        members.length > 0 ?
            <Row type="flex" justify="space-around">
                <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <MemberCard
                        key={"member_" + members[0].nickname + "_" + members[0].generation}

                        member={members[0]} onClick={(member) => {
                            onClick([member, members[1]])
                        }} />
                </Col>
                <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <MemberCard
                        key={"member_" + members[1].nickname + "_" + members[1].generation}

                        member={members[1]} onClick={(member) => {
                            onClick([member, members[0]])
                        }} />
                </Col>



                <div>
                    <Button type="primary" size="large" onClick={onGetResultClick}>ขี้เกียจเล่นละกดตรงนี้</Button>
                </div>
            </Row>
            :
            <Row type="flex" justify="space-around">
                <MemberCard loading />
                <MemberCard loading />
            </Row>

    )
}
export default MemberCardVersus;
