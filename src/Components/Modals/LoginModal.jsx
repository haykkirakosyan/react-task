import { useState } from "react";
import { FormHelperText,FormErrorMessage } from '@chakra-ui/react';
import {Input,FormLabel,FormControl,Box, Button, Center, Flex ,Image, useDisclosure, Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter} from '@chakra-ui/react';
const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
export default function LoginModal({isOpen,onClose,handleLoginSubmit}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const validateEmail = (email) => (EMAIL_PATTERN.test(email))
    const validatePassword = (password) => (PASSWORD_PATTERN.test(password))
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Login</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form onSubmit={handleLoginSubmit}>
                                <FormControl isRequired  isInvalid={email.length && !validateEmail(email)}>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder='Email' type='email' value={email} onChange={handleEmailChange} />
                                    { email.length && !validateEmail(email) ? (
                                        <FormErrorMessage>Incorrect</FormErrorMessage>
                                    
                                    ) : (
                                        <FormHelperText>
                                        Write your email
                                        </FormHelperText>
                                    )}
                                    
                                </FormControl>
                                <FormControl isRequired isInvalid={password.length && !validatePassword(password)}>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder='Password' type='password' value={password} onChange={handlePasswordChange}/>
                                    {password.length && !validatePassword(password) ? (
                                        <FormErrorMessage>Incorrect</FormErrorMessage>
                                        
                                    ): (
                                        <FormHelperText>Write your password</FormHelperText>
                                        
                                    )}
                                </FormControl>              
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handleLoginSubmit} isDisabled={!validateEmail(email) || !validatePassword(password)}>
                                Submit
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                
    )
}