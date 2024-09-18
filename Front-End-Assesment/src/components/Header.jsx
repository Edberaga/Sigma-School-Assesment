import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant='light'>
        <Container>
          <Navbar.Brand href='/note'>Check Notes</Navbar.Brand>
          <Navbar.Brand href='/note/add-note'>Add Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header