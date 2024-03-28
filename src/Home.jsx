import {useHistory} from 'react-router-dom';
import {Input,FormLabel,FormControl,Box, Button, Center, Flex ,Image, useDisclosure, Modal,ModalBody,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalFooter} from '@chakra-ui/react';
import { useState } from 'react';
import { FormHelperText,FormErrorMessage } from '@chakra-ui/react';


export default function Home(){
    const history = useHistory();

    const Loggo = () => (
        <svg width="176" height="36" viewBox="0 0 176 36" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.43307 2H25.5673C29.1053 2 32 4.89194 32 8.42664V27.5429C32 31.0776 29.1053 33.9695 25.5673 33.9695H6.43307C2.89472 33.9695 0 31.0776 0 27.5429V8.42664C0 4.89194 2.89472 2 6.43307 2Z" fill="url(#paint0_linear_2674_61241)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.24846 23.7575C5.72508 20.3995 3.52931 15.6628 3.52931 10.4132C3.52931 10.1289 3.53628 9.84642 3.54951 9.56528L9.13532 10.0896C9.04308 15.2772 12.3492 20.0851 17.2103 22.0741V23.7568H9.24846V23.7575Z" fill="url(#paint1_linear_2674_61241)"></path><path d="M13.7131 17.9928V34H7.76767V17.9928H13.7131Z" fill="white"></path><path d="M7.76871 17.9959C7.76871 15.307 8.8638 12.8633 10.6307 11.0977C12.4088 9.33378 14.8492 8.23831 17.5358 8.23831C20.222 8.23831 22.6611 9.33378 24.4297 11.0977C26.2053 12.8757 27.3022 15.3122 27.3022 17.9959C27.3022 20.6807 26.2054 23.1189 24.4398 24.8842C22.6726 26.6604 20.2265 27.7538 17.5348 27.7538C14.8423 27.7538 12.3962 26.6597 10.63 24.8944C8.86276 23.1288 7.76767 20.6851 7.76767 17.9959H7.76871ZM14.8263 15.2892C14.1419 15.9837 13.7138 16.9408 13.7138 17.9959C13.7138 19.0513 14.1419 20.0084 14.8315 20.6974C15.5214 21.3868 16.4793 21.8141 17.5358 21.8141C18.5919 21.8141 19.5498 21.3868 20.2398 20.6974C20.9297 20.0139 21.3575 19.0554 21.3575 17.9959C21.3575 16.9377 20.9297 15.9782 20.2453 15.2892C19.5561 14.6054 18.5961 14.178 17.5365 14.178C16.4762 14.178 15.5165 14.6054 14.827 15.2892H14.8263Z" fill="white"></path><path d="M19.0872 27.623C18.5835 27.7038 18.0642 27.7463 17.5378 27.7463C16.1831 27.7463 14.8896 27.4676 13.7162 26.9679V18.038C13.7301 19.0739 14.1548 20.0125 14.8339 20.6909C15.5234 21.3799 16.4814 21.8073 17.5378 21.8073C18.0889 21.8073 18.6138 21.6895 19.0872 21.4813V27.624V27.623Z" fill="url(#paint2_linear_2674_61241)"></path><path d="M36.2117 10.8634V25H39.4429V20.5571H41.5634C42.9569 20.5571 44.1282 20.0926 45.0774 19.1434C46.0265 18.1942 46.5112 17.0633 46.5112 15.7102C46.5112 14.3572 46.0265 13.2262 45.0774 12.2771C44.1282 11.3279 42.9569 10.8634 41.5634 10.8634H36.2117ZM39.4429 17.5278V13.8927H41.5634C42.553 13.8927 43.28 14.6803 43.28 15.7102C43.28 16.7402 42.553 17.5278 41.5634 17.5278H39.4429ZM50.8547 14.9024H47.8255V25H50.8547V20.4359C50.8547 19.5271 51.1779 18.8809 51.8039 18.5174C52.4502 18.1337 53.1368 18.0125 53.884 18.1337V14.7005C52.5107 14.7005 51.2385 15.4073 50.8547 16.6998V14.9024ZM64.8796 21.1629C64.9604 20.7792 65.0008 20.3753 65.0008 19.9512C65.0008 18.4366 64.5161 17.1643 63.5266 16.1545C62.5572 15.1246 61.3455 14.6197 59.8712 14.6197C58.296 14.6197 57.0035 15.1246 55.9938 16.1545C55.0042 17.1643 54.4993 18.4366 54.4993 19.9512C54.4993 21.486 55.0042 22.7583 56.014 23.7681C57.0439 24.7779 58.397 25.2827 60.0934 25.2827C62.0321 25.2827 63.5064 24.5961 64.4959 23.2026L62.0725 21.8092C61.608 22.314 60.9618 22.5766 60.1338 22.5766C58.8615 22.5766 58.0537 22.1121 57.7104 21.1629H64.8796ZM57.6498 18.9011C57.9527 17.8307 58.6797 17.3057 59.851 17.3057C60.982 17.3057 61.6888 17.8307 61.9917 18.9011H57.6498ZM69.7482 25V10.2576H66.719V25H69.7482ZM79.2958 15.8516C78.589 15.0236 77.5792 14.6197 76.2867 14.6197C74.9538 14.6197 73.8229 15.1448 72.8737 16.1747C71.9246 17.2047 71.4601 18.4568 71.4601 19.9512C71.4601 21.4457 71.9246 22.718 72.8737 23.7479C73.8229 24.7779 74.9538 25.2827 76.2867 25.2827C77.5792 25.2827 78.589 24.8788 79.2958 24.0508V25H82.3251V14.9024H79.2958V15.8516ZM75.1558 21.7486C74.7115 21.3043 74.4894 20.6984 74.4894 19.9512C74.4894 19.204 74.7115 18.5981 75.1558 18.1539C75.6001 17.7096 76.1857 17.4874 76.8926 17.4874C77.5994 17.4874 78.1851 17.7096 78.6294 18.1539C79.0736 18.5981 79.2958 19.204 79.2958 19.9512C79.2958 20.6984 79.0736 21.3043 78.6294 21.7486C78.1851 22.1929 77.5994 22.415 76.8926 22.415C76.1857 22.415 75.6001 22.1929 75.1558 21.7486ZM91.0705 20.4157C91.0705 21.789 90.3435 22.4958 89.1923 22.4958C88.1624 22.4958 87.4354 21.8496 87.4354 20.658V14.9024H84.4061V21.1023C84.4061 22.415 84.7696 23.4248 85.4764 24.172C86.2035 24.9192 87.1122 25.2827 88.1826 25.2827C89.4953 25.2827 90.4646 24.8788 91.0705 24.0508V25H94.0998V14.9024H91.0705V20.4157ZM102.239 14.6197C100.926 14.6197 99.9565 15.0236 99.3507 15.8516V14.9024H96.3214V25H99.3507V19.4867C99.3507 18.1135 100.078 17.4066 101.229 17.4066C102.259 17.4066 102.986 18.0529 102.986 19.2444V25H106.015V18.8001C106.015 17.4874 105.652 16.4777 104.925 15.7304C104.218 14.9832 103.309 14.6197 102.239 14.6197ZM112.942 25.2827C114.901 25.2827 116.618 24.273 117.506 22.6776L114.861 21.1629C114.517 21.9101 113.851 22.2939 112.902 22.2939C111.589 22.2939 110.62 21.3245 110.62 19.9512C110.62 18.578 111.589 17.6086 112.902 17.6086C113.851 17.6086 114.497 17.9923 114.861 18.7395L117.506 17.2047C116.618 15.6497 114.881 14.6197 112.942 14.6197C111.407 14.6197 110.135 15.1246 109.105 16.1545C108.095 17.1845 107.59 18.4366 107.59 19.9512C107.59 21.4659 108.095 22.718 109.105 23.7479C110.135 24.7779 111.407 25.2827 112.942 25.2827ZM124.643 14.6197C123.33 14.6197 122.36 15.0236 121.755 15.8516V10.8634H118.725V25H121.755V19.4867C121.755 18.1135 122.482 17.4066 123.633 17.4066C124.663 17.4066 125.39 18.0529 125.39 19.2444V25H128.419V18.8001C128.419 17.4874 128.055 16.4777 127.328 15.7304C126.622 14.9832 125.713 14.6197 124.643 14.6197ZM133.569 24.7173C134.316 23.97 134.316 22.7583 133.569 22.0111C132.822 21.2639 131.61 21.2639 130.863 22.0111C130.116 22.7583 130.116 23.97 130.863 24.7173C131.61 25.4645 132.822 25.4645 133.569 24.7173ZM140.198 25.2827C142.157 25.2827 143.873 24.273 144.762 22.6776L142.116 21.1629C141.773 21.9101 141.106 22.2939 140.157 22.2939C138.845 22.2939 137.875 21.3245 137.875 19.9512C137.875 18.578 138.845 17.6086 140.157 17.6086C141.106 17.6086 141.753 17.9923 142.116 18.7395L144.762 17.2047C143.873 15.6497 142.136 14.6197 140.198 14.6197C138.663 14.6197 137.391 15.1246 136.361 16.1545C135.351 17.1845 134.846 18.4366 134.846 19.9512C134.846 21.4659 135.351 22.718 136.361 23.7479C137.391 24.7779 138.663 25.2827 140.198 25.2827ZM154.427 23.7479C155.457 22.718 155.982 21.4457 155.982 19.9512C155.982 18.4568 155.457 17.2047 154.427 16.1747C153.397 15.1448 152.125 14.6197 150.63 14.6197C149.136 14.6197 147.864 15.1448 146.834 16.1747C145.804 17.2047 145.279 18.4568 145.279 19.9512C145.279 21.4457 145.804 22.718 146.834 23.7479C147.864 24.7779 149.136 25.2827 150.63 25.2827C152.125 25.2827 153.397 24.7779 154.427 23.7479ZM148.974 21.6678C148.53 21.2235 148.308 20.658 148.308 19.9512C148.308 19.2444 148.53 18.6789 148.974 18.2346C149.419 17.7903 149.964 17.5682 150.63 17.5682C151.297 17.5682 151.842 17.7903 152.286 18.2346C152.731 18.6789 152.953 19.2444 152.953 19.9512C152.953 20.658 152.731 21.2235 152.286 21.6678C151.842 22.1121 151.297 22.3342 150.63 22.3342C149.964 22.3342 149.419 22.1121 148.974 21.6678ZM169.005 14.6197C167.672 14.6197 166.703 15.064 166.077 15.9526C165.491 15.064 164.602 14.6197 163.431 14.6197C162.179 14.6197 161.27 15.0236 160.725 15.8314V14.9024H157.696V25H160.725V19.305C160.725 18.1135 161.311 17.4066 162.3 17.4066C163.249 17.4066 163.754 18.0327 163.754 19.0626V25H166.783V19.305C166.783 18.1135 167.369 17.4066 168.359 17.4066C169.308 17.4066 169.813 18.0327 169.813 19.0626V25H172.842V18.8001C172.842 17.5278 172.499 16.518 171.792 15.7708C171.085 15.0034 170.156 14.6197 169.005 14.6197Z" fill="black"></path><defs><linearGradient id="paint0_linear_2674_61241" x1="3.20557" y1="2.87357" x2="24.0809" y2="26.1002" gradientUnits="userSpaceOnUse"><stop stop-color="#5CEBDA"></stop><stop offset="1" stop-color="#099484"></stop></linearGradient><linearGradient id="paint1_linear_2674_61241" x1="11.2246" y1="13.3486" x2="3.53458" y2="10.7891" gradientUnits="userSpaceOnUse"><stop stop-color="#097568"></stop><stop offset="0.145098" stop-color="#84BAB3"></stop><stop offset="0.560784" stop-color="white"></stop><stop offset="1" stop-color="white"></stop></linearGradient><linearGradient id="paint2_linear_2674_61241" x1="12.6193" y1="23.0867" x2="18.1751" y2="23.5985" gradientUnits="userSpaceOnUse"><stop stop-color="#099484"></stop><stop offset="1" stop-color="#FEFEFE"></stop></linearGradient></defs></svg>
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isSingUpOpen, onOpen: onSingUpOpen, onClose: onSingUpClose } = useDisclosure()
    const [email,setEmail] = useState("")
    const handleChange = (e) => setEmail(e.target.value)
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    const [password,setPassword] = useState("")
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)   
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const [formvalue,setFormvalue] = useState({name: "", password: "", age: 0, email: ""})
    function handleFormValue(e){
        setFormvalue(curr => ({
            ...curr,
            [e.target.name]: e.target.value
        }))
    }
   
    const namePattern = /^[a-z ,.'-]+$/i.test(formvalue.name)
    const agePattern = /^\S[0-9]{0,3}$/.test(formvalue.age)
    const passwordPattern2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(formvalue.password) 
    const emailPattern2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formvalue.email)
    const isSubmitDisabled = !namePattern || !agePattern || !passwordPattern2 || !emailPattern2
    
    function handleFormSubmit(){
        history.push("/sing-up")
    }
    const logginSubmitDisabled = !emailPattern || !passwordPattern
   function handleLogginSubmit(){
    history.push("/logged-in")
   }

    
    return(
        <Box>
            <Flex justifyContent="flex-start" bg="white">
                <Image as={Loggo} fontSize="12px"/>
                {/* <Image src='https://www.insightplatforms.com/wp-content/uploads/2023/02/Prelaunch-Logo-Square-Insight-Platforms.png' boxSize="150px" /> */}
            </Flex>
            <Center pt="225">               
                <Button colorScheme='teal' variant="solid" size='md' height='40px' width='400px' onClick={onOpen} >Loggin</Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Loggin page</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form onSubmit={handleLogginSubmit}>
                                <FormControl isRequired  isInvalid={ email.length && !emailPattern}>
                                    <FormLabel>Email</FormLabel>
                                    <Input placeholder='Email' type='email' value={email} onChange={handleChange} />
                                    { email.length && !emailPattern ? (
                                        <FormErrorMessage>Incorrect</FormErrorMessage>
                                    
                                    ) : (
                                        <FormHelperText>
                                        Write your email
                                        </FormHelperText>
                                    )}
                                    
                                </FormControl>
                                <FormControl isRequired isInvalid={password.length && !passwordPattern}>
                                    <FormLabel>Password</FormLabel>
                                    <Input placeholder='Password' type='password' value={password} onChange={handlePasswordChange}/>
                                    {password.length && !passwordPattern ? (
                                        <FormErrorMessage>Incorrect</FormErrorMessage>
                                        
                                    ): (
                                        <FormHelperText>Write your password</FormHelperText>
                                        
                                    )}
                                </FormControl>              
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={handleLogginSubmit} isDisabled={logginSubmitDisabled}>
                                Submit
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                
            </Center>
            <Box as='span' display="flex" justifyContent="center">
                Don’t have an account?
            <Button colorScheme='teal' variant="link" onClick={onSingUpOpen}>Sing up</Button>
            <Modal isOpen={isSingUpOpen} onClose={onSingUpClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Sing Up</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <form onSubmit={handleFormSubmit}>
                            <FormControl isRequired isInvalid={formvalue.name.length && !namePattern}>
                                <FormLabel>Name</FormLabel>
                                <Input  type="text" name='name' onChange={handleFormValue}/>
                                {formvalue.name.length && !namePattern ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                    ) : (
                                    <FormHelperText>
                                    Enter your name
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl isRequired isInvalid={formvalue.password.length && !passwordPattern2}>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' name='password' onChange={handleFormValue}/>
                                {formvalue.password.length && !passwordPattern2 ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                
                                 ) : (
                                    <FormHelperText>
                                    Enter your password
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl isRequired isInvalid={formvalue.age.length && !agePattern}>
                                <FormLabel>Age</FormLabel>
                                <Input type='text' name='age' onChange={handleFormValue}/>
                                {formvalue.age.length && !agePattern ? (
                                    <FormErrorMessage>Incorrect</FormErrorMessage>
                                
                                 ) : (
                                    <FormHelperText>
                                    Enter your age
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl isRequired isInvalid={formvalue.email.length && !emailPattern2}>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' name='email' onChange={handleFormValue}/>
                                {formvalue.email.length && !emailPattern2 ? (
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
                            <Button colorScheme='blue' mr={3} onClick={handleFormSubmit} isDisabled={isSubmitDisabled}>
                                Submit
                            </Button>
                        </ModalFooter>

                    </ModalContent>
                </Modal>
            </Box>

        </Box>
       

    )

}