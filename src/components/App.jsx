import { Component } from 'react';
import user from './Data/user.json'
import data from './Data/data.json'
import friends from './Data/friends.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { StatisticsFeedback } from './StatisticsFeedback/StatisticsFeedback';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  goodIncrement =()=>{
    this.setState((prevState)=>{
        return{good: prevState.good +1}   
    })
  }

  neutralIncrement =()=>{
    this.setState((prevState)=>{
        return{neutral: prevState.neutral +1}
    })
  }

  badIncrement =()=>{
    this.setState((prevState)=>{
        return{bad: prevState.bad +1}
    })
  }

  countTotalFeedback=()=>{
    const {good, neutral, bad} = this.state
    return (good + neutral + bad) 
  }

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return this.countTotalFeedback() === 0 ? 0 : ((this.state.good / totalFeedback) * 100).toFixed();
  };
render(){
  return (
    <>
    <Profile username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>

    <Statistics title="Upload stats" stats={data}/>
    <FriendList friends={friends}/>
    <Section title="Please leave feedback">
      <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback}/>
    </Section>
    {this.countTotalFeedback() > 0 ? 
      (<Section title="Statistics">
          <StatisticsFeedback 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>) : (
        <Notification message="There is no feedback"/>
      )}  
    </>
  );
}
};
