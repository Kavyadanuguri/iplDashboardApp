// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card-list-container" key={id}>
        <img className="team-card-img1" alt={name} src={teamImageUrl} />
        <p className="team-card-h1">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
