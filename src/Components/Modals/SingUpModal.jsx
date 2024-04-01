import { useState } from "react"
import { FormHelperText,FormErrorMessage } from '@chakra-ui/react';
import {Input,FormLabel,FormControl,Box, Button, Center, Flex ,Image, useDisclosure, Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter} from '@chakra-ui/react';

const NAME_PATTERN = /^[a-z ,.'-]+$/i;
const AGE_PATTERN = /^\S[0-9]{0,3}$/;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function SingUpModal({isSingUpOpen,onSingUpClose,handleSubmit}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [age,setAge] = useState("")
    const [name,setName] = useState("")
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleAgeChange = (e) => setAge(e.target.value)
    const handleNameChange = (e) => setName(e.target.value)
    const validateEmail = (email) => (EMAIL_PATTERN.test(email))
    const validatePassword = (password) => (PASSWORD_PATTERN.test(password))
    const validateName = (name) => (NAME_PATTERN.test(name))
    const validateAge = (age) => (AGE_PATTERN.test(age))
    return (
        <Modal isOpen={isSingUpOpen} onClose={onSingUpClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Sing Up</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form onSubmit={handleSubmit}>
                            <FormControl isRequired isInvalid={ name.length && !validateName(name)}>
                                <FormLabel>Name</FormLabel>
                                <Input  type="text" value={name} onChange={handleNameChange}/>
                                {name.length && !validateName(name) ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                    ) : (
                                    <FormHelperText>
                                    Enter your name
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl isRequired isInvalid={password.length && !validatePassword(password)}>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' value={password} onChange={handlePasswordChange}/>
                                {password.length && !validatePassword(password) ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                
                                 ) : (
                                    <FormHelperText>
                                    Enter your password
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl isRequired isInvalid={age.length && !validateAge(age)}>
                                <FormLabel>Age</FormLabel>
                                <Input type='text' value={age} onChange={handleAgeChange}/>
                                {age.length && !validateAge(age) ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                
                                 ) : (
                                    <FormHelperText>
                                    Enter your age
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl isRequired isInvalid={email.length && !validateEmail(email)}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' value={email} onChange={handleEmailChange}/>
                                {email.length && !validateEmail(email) ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                
                                 ) : (
                                    <FormHelperText>
                                    Enter your email
                                    </FormHelperText>
                                )}
                            </FormControl>
                            </form>
                
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handleSubmit} isDisabled={!validateAge(age) || !validateEmail(email) || !validateName(name) || !validatePassword(password)}>
                                Submit
                            </Button>
                        </ModalFooter>

                    </ModalContent>
                </Modal>
    )
}