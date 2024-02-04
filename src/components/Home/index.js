// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isValue: false}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardList: updatedData})
    this.setState({isValue: true})
  }

  render() {
    const {teamCardList, isValue} = this.state

    return (
      <div className="home-bg-container">
        <div className="home-container1">
          <img
            className="home-img1"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
          />
          <h1 className="home-h1">IPL Dashboard</h1>
        </div>
        {!isValue ? (
          <div testid="loader" className="loader-container">
            <Loader type="Rings" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <div>
            <ul className="home-ul-container">
              {teamCardList.map(each => (
                <TeamCard key={each.id} teamData={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
