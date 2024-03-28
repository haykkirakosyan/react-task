import { Box,Button,Center,Flex, Heading,Text,Image, Divider, AbsoluteCenter } from "@chakra-ui/react"


export default function SingUp(){
    const googleLoggo = () => (<svg viewBox="0 0 9 1" focusable="false" class="chakra-icon css-1sxrpth"><svg width="10" height="1" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1053_3438)"><path d="M5.34001 14.5035L4.50129 17.6222L1.43578 17.6868C0.519648 15.9943 0 14.0578 0 12C0 10.0101 0.485858 8.13362 1.34707 6.48132H1.34773L4.0769 6.9797L5.27243 9.68176C5.02221 10.4084 4.88583 11.1884 4.88583 12C4.88592 12.8809 5.04612 13.7249 5.34001 14.5035Z" fill="#FBBB00"></path><path d="M23.8848 9.75818C24.0231 10.4841 24.0953 11.2338 24.0953 11.9999C24.0953 12.8591 24.0046 13.6971 23.8318 14.5054C23.2453 17.2562 21.7129 19.6582 19.59 21.358L19.5894 21.3573L16.1518 21.1826L15.6653 18.1575C17.0739 17.3347 18.1748 16.047 18.7547 14.5054H12.3125V9.75818H18.8487H23.8848Z" fill="#518EF8"></path><path d="M19.589 21.3574L19.5897 21.358C17.5251 23.011 14.9024 24 12.0474 24C7.45936 24 3.47042 21.4457 1.43555 17.6868L5.33978 14.5035C6.35719 17.2081 8.97656 19.1334 12.0474 19.1334C13.3673 19.1334 14.6039 18.778 15.665 18.1576L19.589 21.3574Z" fill="#28B446"></path><path d="M19.7372 2.76262L15.8343 5.94525C14.7361 5.26153 13.438 4.86656 12.0472 4.86656C8.90689 4.86656 6.23853 6.88017 5.27209 9.68175L1.34734 6.48131H1.34668C3.35176 2.63077 7.39101 0 12.0472 0C14.9704 0 17.6507 1.03716 19.7372 2.76262Z" fill="#F14336"></path></g><defs><clipPath id="clip0_1053_3438"><rect width="24.0952" height="24" fill="white"></rect></clipPath></defs></svg></svg>)
    return (
        <Flex align="center" justify="center" h="100vh">
            <Box h="524px" w="400px" bg="white" >
                <Heading w="400px" h="31.91px" pl="40px" pr="40px" fontSize="25px">Greate to See You Here!</Heading>
                <Text h="21px" w="400px" fontSize="15px">Start testing your product today.No credit card required.</Text>
                <Box w="400px" h="48px">
                    <Button display="-webkit-inline-flex" appearance="none" alignItems="center" justifyContent="center" position="relative" verticalAlign="middle" outline="transparent solid 2px" w="100%" fontFamily="Inter" border-width="1px" border-style="solid" border-color="#A0AEC0">
                    <Image as={googleLoggo}/>
                        Google
                    </Button>
                </Box>
                <Box w="400px" h="21px" display="flex" alignItems="center" mt="1rem" mb="1rem" >
                        <Divider orientation="horizontal" w="100%"
                        />
                        <Text me="0.5rem" ms="0.5rem">Or</Text>
                </Box>
            </Box>
        </Flex>
    )
}