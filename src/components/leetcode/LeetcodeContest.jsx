import React from 'react'



import '../../components/leetcode/LeetcodeContest.css'

import { useQuery, gql } from "@apollo/client";


const CONTEST_QUERY = gql`
{ 
  userContestRanking(username: "siddharth153") {
  attendedContestsCount
  rating
  globalRanking
  }
}
`;



function LeetcodeContest() {


    const { data, loading, error } = useQuery(CONTEST_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>




    const userContestRanking = data.userContestRanking;

    //solvedProblems[1]->easy

    return (

        <div className="contest-container">
            <h2>Leetcode Contest Rating</h2>
            <div className="contest-data">
                Attended Contests: {userContestRanking.attendedContestsCount} <br />
                Rating: {Math.floor(userContestRanking.rating)}<br />
                Global Ranking: {userContestRanking.globalRanking}
            </div>
        </div>
    )
}

export default LeetcodeContest

