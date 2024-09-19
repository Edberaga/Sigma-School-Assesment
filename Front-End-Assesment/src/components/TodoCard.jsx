import { useContext, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';
import { toast } from 'react-toastify';

const TodoCard = ({ todo }) => {
  const completed = todo.completed;
  const border = completed ? "success" : "danger";
  
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);
  const [box, setBox] = useState(false);
  const setTodos = useContext(TodoContext).setTodos;

  const startTimer = () => {
    if (timerInterval === null) {
      const intervalID = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setTimerInterval(intervalID);
    }
  }

  const resetTimer = () => {
    clearInterval(timerInterval);
    setTimer(0);
    setTimerInterval(null);
  }

  const showBox = () => setBox(true);
  const hideBox = () => setBox(false);

  const deleteTodo = () => {
    setTodos((prevTodo) => 
      prevTodo.filter((prevTodo) => prevTodo.id !== todo.id)
    );
    toast.success("Note has been deleted successfully");
  }

  const pauseTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(null);
  }
  
  return (
    <Card border={border} className='my-3'>
      <Card.Header>{!completed && "Not "}Completed</Card.Header>
      <Card.Body>
        <Card.Title>{todo.title}</Card.Title>
        <Card.Text className='py-2'>{todo.description}</Card.Text>
        <p>Timer: {timer} seconds</p>
        <Button variant={(timerInterval) ? 'success' : 'primary'} onClick={startTimer}>
          <i className='bi bi-play' />
        </Button>
        <Button onClick={pauseTimer} className='ms-2'>
          <i className="bi bi-pause-fill"></i>
        </Button>
        <Button onClick={resetTimer} className='ms-2'>
          <i className="bi bi-arrow-clockwise"></i>
        </Button>
        <Button variant='secondary' href={`note/todo/${todo.id}`} className='ms-2'>
          <i className="bi bi-pencil"></i>
        </Button>
        <Button variant='danger' onClick={showBox} className='ms-2'>
          <i className="bi bi-trash3"></i>
        </Button>

        <Modal show={box} onHide={hideBox}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure to delete this to do note?</Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={hideBox}>Cancel</Button>
            <Button variant='danger' onClick={deleteTodo}>Delete</Button>
          </Modal.Footer>
        </Modal>
      </Card.Body>
    </Card>
  )
}

export default TodoCard