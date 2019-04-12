import React from 'react';
import { Card,Col } from 'antd';

const { Meta } = Card;
const getDescription = member=>{
    return "BNK48 Team "+member.team+" / Gen."+member.generation
}
const MemberCard = ({member, onClick}) => {
/*     console.log(member) */
    return (
/*         <Card
            
            hoverable
            style={{ width: '40vw',maxWidth: '300px' }}
            cover={<img alt="example" src={"/BNK48/"+member.nickname.toUpperCase()+".png"} />}
            onClick={()=>{
                onClick(member)
            }}
        >
            <Meta
                title={member.nickname+" ("+member.point+")"}
                description={getDescription(member)}
            />
        </Card> */
        <Col span={12} style={{display:'flex',justifyContent:'center'}}>
        <Card
            
            hoverable
            style={{ width: '40vw',maxWidth: '300px' }}
            cover={<img alt="example" src={"/BNK48/"+member.nickname.toUpperCase()+".png"} />}
            onClick={()=>{
                onClick(member)
            }}
        >
            <Meta
                title={member.nickname+" ("+member.point+")"}
                description={getDescription(member)}
            />
            </Card>       
        </Col>

    )
}
export default MemberCard;
