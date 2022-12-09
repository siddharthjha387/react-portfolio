import React from 'react'

import { PieChart } from 'react-minimal-pie-chart';

import '../../components/leetcode/leetcode.css'

import { useQuery, gql } from "@apollo/client";
import LeetcodeContest from './LeetcodeContest';

const PROFILE_QUERY = gql`
{ matchedUser(username: "siddharth153") {
  username
  submitStats: submitStatsGlobal {
  acSubmissionNum {
  difficulty
  count
  submissions
  }
  }
  }
  }
`;




function Leetcode() {


  const { data, loading, error } = useQuery(PROFILE_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  else
    console.log(data.matchedUser.submitStats.acSubmissionNum[1]);



  const leetcodeProfile = data.matchedUser;
  const solvedProblems = leetcodeProfile.submitStats.acSubmissionNum;
  // console.log(solvedProblems)
  //solvedProblems[1]->easy

  return (

    <div className='leetcode-container'>
      <h1>Leetcode Profile</h1>
      <div className="flex">

        <div className="left"><PieChart radius="20" 
         

          data={[
            { title: 'Easy', value: solvedProblems[1].count, color: '#18A558' },
            { title: 'Medium', value: solvedProblems[2].count, color: '#FFC300' },
            { title: 'Hard', value: solvedProblems[3].count, color: '#f44441' },
          ]}
        /></div>
        <div className="right">

          <h2>Username: <a href="http://leetcode.com/siddharth153">{leetcodeProfile.username}</a></h2>
          <div className="easy">
            Easy Problems: {solvedProblems[1].count} <br />
          </div>
          <div className="medium">
            Medium Problems: {solvedProblems[2].count}
          </div>

          <div className="hard">
            Hard Problems: {solvedProblems[3].count}
          </div>

          <div className="total">
            Total Problems: {solvedProblems[0].count}
          </div>

          <LeetcodeContest></LeetcodeContest>

        </div>
      </div>
    </div>

  )
}

export default Leetcode

