import React, { Component } from 'react';
/* import logo from '/BNK48/logo.png'; */
import './App.css';
import MemberCardVersus from './components/MemberCardVersus'
import MembersResult from './components/MembersResult'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import memberData from './mocks/memberData'
import {GetVersusMembers,GetSortedMembersByPoint,
  AddPointToMember, GetPairedMembers,
  MinusPointToMember} from './helpers/versusHelper'
/* console.log(memberData) */
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      memberData : memberData,
      resultFlag:false
    }
  }
  componentDidMount(){
    
  }
  GetMembers = (type)=>{
    if(type === "paired"){
      let pairedMember =  GetVersusMembers(this.state.memberData.members)
      return pairedMember
    }else{
      return GetSortedMembersByPoint(this.state.memberData.members)
    }

  }
  onMemberVersusClick = members=>{
    let member = members[0]
    let competitor = members[1]
    let newMemberData = Object.assign({},this.state.memberData)
    let point = 1
    if(member.point >1 && competitor.point >1){
      console.log("Clash of the titan! +2")
      point = 2
    }
    newMemberData.members = AddPointToMember(member,newMemberData.members,point)
    //newMemberData.members = MinusPointToMember(competitor,newMemberData.members)
    this.setState({memberData:newMemberData},()=>{
      /* if(CheckUnusedMembers(newMemberData.members) <= 0){
        this.setState({"resultFlag":true})
      } */
      let pairedMembers = GetPairedMembers()
      let total_acceptable_round = this.state.memberData.total_member * 0.8
      if(pairedMembers.length > total_acceptable_round){

        this.setState({"resultFlag":true})
      }else{
        console.log("Paired Members : "+pairedMembers.length + " / "+total_acceptable_round)
      }
    })
  }
  onGetResultClick = ()=>{
    this.setState({"resultFlag":true})
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
        <content>
          <Row>

          </Row>
          {
            !this.state.resultFlag ?
            <MemberCardVersus members={this.GetMembers('paired')} onClick={this.onMemberVersusClick} />
            :
            <MembersResult members={this.GetMembers('result')}/>
          }
          
          <div>
            <button onClick={this.onGetResultClick}>ขี้เกียจเล่นละกดตรงนี้</button>
          </div>
        </content>
        <footer>
          <a
            className="App-link"
            href="https://reactjs.org"
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
