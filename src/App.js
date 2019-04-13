import React, { Component } from 'react';
/* import logo from '/BNK48/logo.png'; */
import './App.css';
import MemberCardVersus from './components/MemberCardVersus'
import MembersResult from './components/MembersResult'
import 'antd/dist/antd.css';
import baseMemberData from './mocks/memberData'
import {
  GetVersusMembers, GetSortedMembersByPoint,
  AddPointToMember, GetPairedMembers,
} from './helpers/versusHelper'
/*   import {InitialDataToFirebase} from './helpers/dataHelper' */
import { db } from './helpers/firebaseHelper'
/* import AllMemberCard from './components/AllMemberCard' */
/* console.log(memberData) */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberData: {
        "band": "",
        "total_members": 0,
        "members": []
      },
      resultFlag: false,
      loading:true
    }
  }
  componentDidMount() {
    /*     InitialDataToFirebase(this.state.memberData.members) */
    db
      .collection('members')
      .get()
      .then(docs => {
        let members = []
        docs.forEach(function (doc) {
          let data = doc.data()
          let member = {
            "name": data.name,
            "nickname": data.nickname,
            "point": 0,
            "team" : data.team,
            "generation": data.generation
          }
          members.push(member)
        })
        let newMemberData = baseMemberData
        newMemberData.members = members
        newMemberData.total_members = members.length
        this.setState({ memberData: newMemberData,loading:false })
      }).catch(ex => {
        console.log(ex)
      })
  }
  GetMembers = (type) => {
    if (!this.state.loading){
      if (type === "paired") {
        let pairedMember = GetVersusMembers(this.state.memberData.members)
        return pairedMember
      } else {
        return GetSortedMembersByPoint(this.state.memberData.members)
      }
    }else{
      return []
    }


  }
  onMemberVersusClick = members => {
    let member = members[0]
    let competitor = members[1]
    let newMemberData = Object.assign({}, this.state.memberData)
    let point = 1
    if (member.point > 1 && competitor.point > 1) {
      console.log("Clash of the titan! +2")
      point = 2
    }
    newMemberData.members = AddPointToMember(member, newMemberData.members, point)
    //newMemberData.members = MinusPointToMember(competitor,newMemberData.members)
    this.setState({ memberData: newMemberData }, () => {
      /* if(CheckUnusedMembers(newMemberData.members) <= 0){
        this.setState({"resultFlag":true})
      } */
      let pairedMembers = GetPairedMembers()
      let total_acceptable_round = this.state.memberData.total_member * 1.5
      if (pairedMembers.length > total_acceptable_round) {

        this.setState({ "resultFlag": true })
      } else {
        console.log("Paired Members : " + pairedMembers.length + " / " + total_acceptable_round)
      }
    })
  }
  onGetResultClick = () => {
    this.setState({ "resultFlag": true })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/BNK48/logo.png" className="App-logo" alt="logo" />
          <p>
            ตอนนี้คุณชอบใครกันน้าา
          </p>

        </header>
        <content className="App-content">
          {/*           <AllMemberCard members={this.state.memberData.members}/> */}
          {
            !this.state.resultFlag ?
              <MemberCardVersus members={this.GetMembers('paired')} 
              onClick={this.onMemberVersusClick}
              onGetResultClick={this.onGetResultClick}
              />
              :
              <MembersResult members={this.GetMembers('result')} />
          }
          <br />

          <br />
        </content>
        <footer className="App-footer">
          <a
            className="App-link"
            href="mailto:darkgaizers@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By darkgaizers (darkgaizers@gmail.com)
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
