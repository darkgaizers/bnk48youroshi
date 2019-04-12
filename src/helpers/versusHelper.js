let pairedMembers = []
const checkPairedMembers = pairedString =>{
    return pairedMembers.findIndex(pm=>{
        return pm === pairedString
    })
}
export const GetPairedMembers = ()=>{
    return pairedMembers
}
export const GetVersusMembers = members =>{
    let pastMembers = members.filter((m)=>{
        return m.point > 0
    })
    let newMembers = members.filter((m)=>{
        return m.point <= 0
    })

    let pastTarget = pastMembers[Math.floor(Math.random() * pastMembers.length)]
    let newTarget = newMembers[Math.floor(Math.random() * newMembers.length)]
    let paired = pastTarget.nickname+pastTarget.generation + newTarget.nickname+newTarget.generation
    let isItPaired = checkPairedMembers(paired)
    let cnt = 0
    if(isItPaired >= 0){
        
        do{
            console.log('already paired '+paired)
            pastTarget = pastMembers[Math.floor(Math.random() * pastMembers.length)]
            newTarget = newMembers[Math.floor(Math.random() * newMembers.length)]
            paired = pastTarget.nickname+pastTarget.generation + newTarget.nickname+newTarget.generation
            isItPaired = checkPairedMembers(paired)
            cnt++
            console.log('new paired '+paired)
        }while(isItPaired >= 0 && cnt<20)
    }


    pairedMembers.push(paired)
    pastTarget.used = true
    newTarget.used = true
    return [pastTarget,newTarget]
}
export const GetSortedMembersByPoint = members =>{
    return members.sort((a,b)=>{
        return b.point - a.point
    })
}
export const AddPointToMember = (member,members)=>{
    let foundedIdx = members.findIndex(m=>{
        /* console.log(m.nickname+" "+member.nickname) */
        return m.nickname === member.nickname
    })
    
    if(foundedIdx >=0){
        let targetedMember = members[foundedIdx]
        console.log(targetedMember.nickname+" score up from "+targetedMember.point+" to "+(targetedMember.point+1))
        members[foundedIdx].point++
    }

    return members;

}
export const MinusPointToMember = (member,members)=>{
    let foundedIdx = members.findIndex(m=>{
        /* console.log(m.nickname+" "+member.nickname) */
        return m.nickname === member.nickname
    })
    
    if(foundedIdx >=0){
        let targetedMember = members[foundedIdx]
        console.log(targetedMember.nickname+" score down from "+targetedMember.point+" to "+(targetedMember.point-1))
        members[foundedIdx].point--
    }

    return members;

}
export const CheckUnusedMembers = members =>{
    let unusedMembers = members.filter((m)=>{
        return !m.used
    })
/*     console.log(pastMembers)
    console.log(newMembers) */
    if(unusedMembers.length === 0){
        return false
    }else{
        console.log("still "+unusedMembers.length+" left")
        return true
    }
}