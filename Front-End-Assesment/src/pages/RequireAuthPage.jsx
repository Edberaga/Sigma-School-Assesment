import { Button, Container } from 'react-bootstrap'

const RequireAuthPage = () => {
  return (
    <Container>
        <h1 className="my-3">Oops!</h1>
        <p>You need to be logged in to access this page</p>
        <Button className='my-2 px-3' style={{backgroundColor: "rgb(245, 131, 77)", border: "0"}} href='/login'>Login</Button>
    </Container>
  )
}

export default RequireAuthPage