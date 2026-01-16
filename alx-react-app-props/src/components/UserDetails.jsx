import { useContext } from 'react'
import UserContext from '../UserContext'

function UserDetails() {
  const userData = useContext(UserContext)

  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
        maxWidth: '300px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <p style={{ fontSize: '18px', marginBottom: '8px' }}>
        Name: <span style={{ fontWeight: 'bold' }}>{userData.name}</span>
      </p>
      <p style={{ fontSize: '18px', marginBottom: '8px' }}>
        Email: <span style={{ fontWeight: 'bold' }}>{userData.email}</span>
      </p>
    </div>
  )
}

export default UserDetails
