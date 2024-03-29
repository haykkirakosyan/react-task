import {useHistory} from 'react-router-dom';
import {Input,FormLabel,FormControl,Box, Button, Center, Flex ,Image, useDisclosure, Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter} from '@chakra-ui/react';
import { useState } from 'react';
import { FormHelperText,FormErrorMessage } from '@chakra-ui/react';
import LoginModal from '../Components/Modals/LoginModal';
import SingUpModal from '../Components/Modals/SingUpModal';
import LogoImage from '../Components/LogoImage';



export default function Home(){
    const history = useHistory();
    const { isOpen: isLoginModalOpen, onOpen, onClose: onLoginModalClose } = useDisclosure()
    const { isOpen: isSingUpOpen, onOpen: onSingUpOpen, onClose: onSingUpClose } = useDisclosure()
    function handleSingupSubmit(){
        history.push("/sing-up")
    }
   function handleLoginSubmit(){
        history.push("/logged-in")
   }
    return(
        <Box>
            <Flex justifyContent="flex-start" bg="white">
                <LogoImage/>
            </Flex>
            <Center pt="225">               
                <Button colorScheme='teal' variant="solid" size='md' height='40px' width='400px' onClick={onOpen} >Loggin</Button>
                <LoginModal  isOpen= {isLoginModalOpen} onClose={onLoginModalClose} handleLoginSubmit={handleLoginSubmit} />
            </Center>
            <Box as='span' display="flex" justifyContent="center">
                Don’t have an account?
            <Button colorScheme='teal' variant="link" onClick={onSingUpOpen}>Sing up</Button>
            <SingUpModal isSingUpOpen={isSingUpOpen} onSingUpClose={onSingUpClose} handleSubmit={handleSingupSubmit}/>
            </Box>
        </Box>
       

    )

}