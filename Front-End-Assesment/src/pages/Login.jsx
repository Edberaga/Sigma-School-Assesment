import { useContext, useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast} from 'react-toastify';

const Login = () => {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    const isCorrectUseremail = useremail === "edbertjonnathan@gmail.com";
    const isCorrectPassword = password === "123456";
    if(isCorrectUseremail && isCorrectPassword ) {
        auth.setIsLoggedIn("1234");
        console.log(auth);
        toast.success("Succesfully Logged In!");
        navigate("/note");
    } else {
        toast.error("Invalid Credentials!")
        setUseremail("")
        setPassword("")
    }
  }

  return (
    <Card className='p-5'>
        <Form>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='emailControl'>Email Address</Form.Label>
                <Form.Control 
                    type='email'
                    id='emailControl'
                    value={useremail}
                    onChange={(e) => setUseremail(e.target.value)}
                />
                <Form.Text id='emailAddressHelper'>
                    We&apos;ll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='passwordControl'>Password</Form.Label>
                <Form.Control 
                    type='password'
                    id='passwordControl'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button 
            className='my-2 px-3' 
            style={{backgroundColor: "rgb(245, 131, 77)", border: "0"}} 
            onClick={handleLogin}>
                Login
            </Button>
        </Form>
    </Card>
  )
}

export default Login