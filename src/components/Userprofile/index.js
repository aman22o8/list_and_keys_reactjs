import './index.css'

const Userprofile = props => {
  const {userdetails} = props
  console.log(props)
  return (
    <div>
      <div className="user-card-container">
        <img className="avatar" src={userdetails.imageURL} />
        <div className="user-details-container">
          <h1 className="user-name">{userdetails.name}</h1>
          <p className="user-designation">{userdetails.role}</p>
        </div>
      </div>
    </div>
  )
}

export default Userprofile
