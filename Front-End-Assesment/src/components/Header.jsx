import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
    window.location.reload(); // Reload the page.
  }

  return (
    <header className='position-absolute top-0 w-100%' style={{width: "100vw"}}>
      <Navbar className='d-flex align-items-center justify-content-between' bg="light" variant='light'>
        <Container className='flex-grow-1'>
          <p className='text-danger' style={{cursor: "pointer"}} onClick={logout}>Logout</p>
        </Container>
        <Container className='w-25'>
          <Navbar.Brand href='/note'>Check Notes</Navbar.Brand>
          <Navbar.Brand href='/note/add-note'>Add Notes</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header