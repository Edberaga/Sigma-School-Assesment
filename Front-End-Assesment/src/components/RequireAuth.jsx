import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const token = useContext(AuthContext).isLoggedIn;
  if (!token) {
    return <Navigate to="/login" replace/>
  }
  return children;
}

export default RequireAuth