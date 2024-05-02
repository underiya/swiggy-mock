
import {
    Button,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
    Switch,
    Center,
    useToast,
  } from '@chakra-ui/react'
import axios from 'axios'
import {useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'

interface LoginCred {
  email: string;
  password: string;
}

const loginFunction=async(endpoint: string, cred: any, cb:any)=>{
    const BaseUrl= "https://swiggy-mock-1.onrender.com/api";
    try {
        let res=await axios.post(`${BaseUrl}/${endpoint}`,cred );
        cb(res.data);
        console.log(res.data);
    } catch (error) {
      console.log("Error",error);
      throw new Error('Login failed');
    }
}

const Login:  React.FC  = () => {
  const navigate =useNavigate();
  const toast = useToast()

    const [form , setForm] = useState<LoginCred>({
        email:"",
        password:"",
    })
    const [user, setuser]= useState<string>("");

    const handleClick = ()=>{
     
         loginFunction("/login", form , setuser)
         .then(res=>{
          console.log("resolved", res)
          toast({
            title: 'Login Failed',
            description: "Please login with correct credentials",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
          navigate("/feed", {state:user} )
         })
         .catch((err)=>{
          console.log(err);
          toast({
            title: 'Login Failed',
            description: "Please login with correct credentials",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
         })

        //  console.log(res);
        //   
          
     
     
        // console.log(form);
    }
  return (
    <div>
    
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
       <Flex flex={2}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>


          <Heading fontSize={'2xl'} textAlign={"center"}>MASAI FORUM</Heading>
          <FormControl id="email">
            <FormLabel pl={4}>Login</FormLabel>
            <Input  type="email" placeholder='Email'  onChange={(e)=>setForm({...form, email:e.target.value})}/>
          </FormControl>
          <FormControl id="password">
            <FormLabel pl={4}>Password</FormLabel>
            <Input type="password"  placeholder='Enter password' onChange={(e)=>setForm({...form, password:e.target.value})}/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
  <Flex justifyContent={"center"} alignItems={"center"}>
  <Switch id='remember'  pr={4} />
<FormLabel htmlFor='remember' mb='0'>
  Remember me 
  </FormLabel>

  </Flex>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleClick} >
              Sign in
            </Button>
          </Stack>
          <Button bg={"black"} color={"white"} _hover={{bg:"black",color:"white",opacity:"80%"}}  variant={'outline'} leftIcon={<FcGoogle />}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        </Stack>
        
      </Flex>
     
    
    </Stack>
    </div>
  )
}

export default Login