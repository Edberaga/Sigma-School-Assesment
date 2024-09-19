import { Button, Container} from 'react-bootstrap';
import banner from '../assets/todo-banner.svg';

const Home = () => {
  return (
  <Container className='d-flex align-items-center'>
    <Container className='p-3 col-7'>
      <h2 className="display-3">Welcome to Your Simple To-Do App!</h2>
      <p>
        Stay organized and manage your tasks effortlessly with this easy-to-use To-Do list application.<br/>
        Simply enter your tasks, track their progress, and mark them as complete. 
      </p>
      <Button 
      className='my-2 px-3' 
      style={{backgroundColor: "rgb(245, 131, 77)", border: "0"}}  
      href='/login'>
        Get Started
      </Button>
    </Container>
    <Container className='p-2 flex-grow-1'>
      <img src={banner} alt="ToDo App" style={{width: "360px"}} />
    </Container>
  </Container>
  )
}

export default Home