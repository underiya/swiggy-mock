import {
    Box,
    Flex,
    Input,
    InputGroup,
    InputRightElement,
    IconButton,
    Text,
    Avatar,
  } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
  import { Link } from "react-router-dom";
  

  
  const Navbar = () => {
    const user={
        avatar:"",
        username:"Masai"
    }
    return (
      <Box as="nav" px={4} py={2} bg="black" color="white">
        <Flex alignItems="center" justifyContent="space-between">
          {/* Logo */}
          {/* <Link to="/"> */}
            <Flex dir="row"  align={"center"} justify={"center"}>
              <img style={{width:"20px", height:"20px", background:"white"}} src="Icon.png"/>  
            <Text fontSize="lg" fontWeight="bold" p={4} >
                Masai Forum
            </Text>
            </Flex>
          {/* </Link> */}
  
          {/* Search Bar */}
          <InputGroup w="60%">
            <Input color={"white"} placeholder="Search" />
            <InputRightElement>
              <IconButton aria-label="Search" icon={<BsSearch />} />
            </InputRightElement>
          </InputGroup>
  
         
          {user && (
            <Flex alignItems="center">
              <Avatar name={user.username} src={user.avatar} />
              <Text mr={2} pl={4} fontWeight="bold" >{user.username}</Text>
            </Flex>
          )}
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  