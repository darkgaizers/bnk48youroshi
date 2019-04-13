import React from 'react';
import { Card, Badge, Skeleton } from 'antd';

const { Meta } = Card;
const getDescription = member => {
    return "BNK48 Team " + member.team + " / Gen." + member.generation
}
const getStyleByRank = rank => {
    let style = {

    }
    switch (rank) {
        case 1: style = { "fontSize":"1em","backgroundColor": "#f9dc2b" }
            break
        case 2: style = { "backgroundColor": "lightgray" }
            break
        case 3: style = { "backgroundColor": "darkred" }
            break
        default : style = { "backgroundColor": "gray" }
    }
    return style
}
const MemberCard = ({ member, onClick, rank }) => {
    console.log(member)
    return (
        member === undefined ?
            <Card

                hoverable
                style={{ width: '40vw', maxWidth: '300px',margin:'1em' }}
            >
                <Skeleton loading={true} avatar active>
                    <Meta
                        title=""
                        description={""}
                    />
                </Skeleton>

            </Card>
            :
            <Card

                hoverable
                style={{ width: '40vw', maxWidth: '300px',margin:'1em' }}
                cover={<img alt="example" src={"/BNK48/" + member.nickname.toUpperCase() + ".png"} />}
                onClick={() => {
                    onClick(member)
                }}
            >
                {
                    rank > 0 && <Badge count={rank} style={getStyleByRank(rank)} />
                }
                <Meta
                    title={member.nickname + " (" + member.point + ")"}
                    description={getDescription(member)}
                />
            </Card>

    )
}
export default MemberCard;
