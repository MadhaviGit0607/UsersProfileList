import UserProfile from './Components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Edward',
    role: 'Software Engineer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd',
    role: 'Software Engineer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Engineer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'DevonLane',
    role: 'Software Engineer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      <UserProfile userDetailsList={userDetailsList[0]} />
      <UserProfile userDetailsList={userDetailsList[1]} />
      <UserProfile userDetailsList={userDetailsList[2]} />
      <UserProfile userDetailsList={userDetailsList[3]} />
    </ul>
  </div>
)

export default App
