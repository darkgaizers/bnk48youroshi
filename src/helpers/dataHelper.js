import {db} from './firebaseHelper'
export const InitialDataToFirebase = (members)=>{
    for(let i=0;i < members.length;i++){
        let m = members[i]
        db.collection("members").add(m)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
}