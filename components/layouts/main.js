//chakra
import { Box, Container } from '@chakra-ui/react';
//next
import Head from 'next/head';
import dynamic from 'next/dynamic'
//components
import Navbar from '../Navbar';
import DogLoader from '../voxelDogLoader';

const LazyVoxelDog = dynamic(() => import('../voxel-dog.js'), {
    ssr: false,
    loading: () => <DogLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Claude Monet</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelDog />

                {children}
            </Container>
        </Box>
    )
}
export default Main