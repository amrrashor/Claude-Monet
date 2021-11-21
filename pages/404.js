import NextLink from 'next/link';
import { Container, Text, Box, Heading, Divider } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';


const NotFound = () => {
    return (
        <Container maxW="70ch">
            <Heading as="h1">Not Found</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} textAlign="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to Home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound