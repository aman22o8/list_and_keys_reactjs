import Userprofile from './components/Userprofile/index'
import './App.css'

const userDetails = [
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ester Howard',
    role: 'Software Developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Python Developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Full Stack Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User Profile List</h1>
    <Userprofile userdetails={userDetails[0]} />
    <Userprofile userdetails={userDetails[1]} />
    <Userprofile userdetails={userDetails[2]} />
    <Userprofile userdetails={userDetails[3]} />
  </div>
)

export default App
