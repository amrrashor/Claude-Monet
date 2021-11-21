import NextLink from 'next/link'
import { Heading, Box, Link, Badge } from '@chakra-ui/layout'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'


export const Title = ({children}) => (
    <Box>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
        <span>
            {' '}
            <ChevronRightIcon/> {' '}
        </span>
        <Heading display="inline-block" as="h3" fontSize={20} mb={4}> 
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt }) => (
    <Image  borderRadius="lg" src={src} alt={alt} mb={4} />
)

export const Meta = ({children}) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)