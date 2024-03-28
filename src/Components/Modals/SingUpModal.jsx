import { useState } from "react"
import { FormHelperText,FormErrorMessage } from '@chakra-ui/react';
import {Input,FormLabel,FormControl,Box, Button, Center, Flex ,Image, useDisclosure, Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter} from '@chakra-ui/react';

const NAME_PATTERN = /^[a-z ,.'-]+$/i
const AGE_PATTERN = /^\S[0-9]{0,3}$/
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
export default function SingUpModal({isSingUpOpen,onSingUpClose,handleFormSubmit}){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [age,setAge] = useState("")
    const [name,setName] = useState("")
    function handleEmailValue(e){
        setEmail(e.target.value)
    }
    function handlePasswordValue(e){
        setPassword(e.target.value)
    }
    function handleAgeValue(e){
        setAge(e.target.value)
    }
    function handleNameValue(e){
        setName(e.target.value)

    }
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
                            <form onSubmit={handleFormSubmit}>
                            <FormControl isRequired isInvalid={ name.length && !validateName(name)}>
                                <FormLabel>Name</FormLabel>
                                <Input  type="text" value={name} onChange={handleNameValue}/>
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
                                <Input type='password' value={password} onChange={handlePasswordValue}/>
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
                                <Input type='text' value={age} onChange={handleAgeValue}/>
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
                                <Input type='email' value={email} onChange={handleEmailValue}/>
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
                            <Button colorScheme='blue' mr={3} onClick={handleFormSubmit} isDisabled={!validateAge(age) || !validateEmail(email) || !validateName(name) || !validatePassword(password)}>
                                Submit
                            </Button>
                        </ModalFooter>

                    </ModalContent>
                </Modal>
    )
}