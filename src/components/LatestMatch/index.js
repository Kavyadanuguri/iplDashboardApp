// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = latestMatch

  return (
    <div>
      <p className="p">Latest Matches</p>
      <div className="latest-match-container">
        <div className="latest-match-con1">
          <p className="latest-match-h1">{competingTeam}</p>
          <p className="latest-match-p1">{date}</p>
          <p className="latest-match-p2">{venue}</p>
          <p className="latest-match-p2">{result}</p>
        </div>
        <div className="img1">
          <img
            className="latest-match-img1"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>
        <div className="latest-match-con2">
          <h2 className="latest-match-h2">First Innings</h2>
          <p className="latest-match-p3">{firstInnings}</p>
          <h2 className="latest-match-h2">Second Innings</h2>
          <p className="latest-match-p3">{secondInnings}</p>
          <h3 className="latest-match-h3">Man of the Match</h3>
          <p className="latest-match-p3">{manOfTheMatch}</p>
          <p className="latest-match-p3">Umpires</p>
          <p className="latest-match-p3">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
