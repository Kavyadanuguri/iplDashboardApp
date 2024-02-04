import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
  const color = matchStatus === 'Lost'

  const isColor = color ? 'match-card-p2' : 'match-card-p3'
  return (
    <li className="match-card-list-container">
      <img
        className="match-card-img1"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-h1">{competingTeam}</p>
      <p className="match-card-p1">{result}</p>
      <p className={isColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
