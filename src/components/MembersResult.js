import React from 'react';
import MemberCard from './MemberCard';
import { Row,Col,Typography  } from 'antd';
import {
    FacebookShareButton,
    TwitterShareButton,
    LineShareButton,
  } from 'react-share';
const { Title } = Typography;
const getGridSize = (rank,baseSize,mediaSize) =>{
    let result = 24
    switch(rank){
        case 0 : result = {
            span:20,
            offset:1
        }
        break
        case 1 :
        case 2 : result = 12
        break
        default : result = baseSize
    }
/*     switch(mediaSize){
        case "sm" : {
            rank === 0 ? result = 20 : rank <=2 ? result = 12 : baseSize
        }
        case "md" : rank === 0 ? result = 20 : rank <=2 ? result = 12 : baseSize
        case "lg" : rank === 0 ? result = 20 : rank <=2 ? result = 12 : baseSize
    } */
    console.log(result)
    return result
}
const MembersResult = ({ members }) => {
    return (
        <div>
            <br/>
            <Title level={2}>วันนี้คุณโอชิ</Title>
            <Row type="flex" justify="center">
            {
                members.map((member,idx) => {
                    return <Col 
                    sm={getGridSize(idx,12,'sm')} 
                    md={getGridSize(idx,8,'md')} 
                    lg={getGridSize(idx,6,'lg')} 
                    style={{ display: 'flex', justifyContent: 'center' }}>
                    <MemberCard
                        key={"member_" + member.nickname + "_" + member.generation}
                    
                            member={member}
                            rank={idx+1}
                            />
                    </Col>
                })
            }

        </Row>
        <Row>
            <Col>
                <FacebookShareButton url={"https://bnk48fans-29683.firebaseapp.com/"}/>
                <TwitterShareButton  url={"https://bnk48fans-29683.firebaseapp.com/"}/>
                <LineShareButton  url={"https://bnk48fans-29683.firebaseapp.com/"}/>
            </Col>
        </Row>
        </div>

    )
}
export default MembersResult;
