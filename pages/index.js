//chakra
import { Container, Box, Heading, Link, List, ListItem } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icon";

//next router
import NextLink from 'next/link'

//react icons 
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoDiscord } from 'react-icons/io5'

//components
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import { BioSection, BioYear } from "../components/Bio";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
            <Container maxW='70ch'>

                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.200')} p={3} mt={2} mb={6} fontWeight="bold" align="center">
                    Hello, Iam a Painter
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant='page-title'>
                            Claude Monet
                        </Heading>
                        <p>Painter</p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="200px"
                            display="inline-block"
                            borderRadius="full"
                            src="images/claude.jpeg"
                            alt="Profile image"
                        />
                    </Box>
                </Box>

                <Section delay={0.3}>
                    <Heading as='h3' variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        French painter and founder of impressionist painting who is seen as a
                        key precursor to modernism, especially in his attempts to paint nature
                        as he perceived it.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">Portfolio</Button>
                        </NextLink>
                    </Box>
                </Section>
                
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1840</BioYear>
                        Born in paris, france.
                    </BioSection>
                    <BioSection>
                        <BioYear>1858</BioYear>
                        Entered  Académie Suisse
                    </BioSection>
                    <BioSection>
                        <BioYear>1865</BioYear>
                        During this time he painted Women in Garden,
                        his first successful large-scale painting, and Le déjeuner sur l'herbe,
                        the "most important painting of Monet's early period".
                    </BioSection>
                </Section>

                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        Intersets
                    </Heading>
                    <Paragraph>
                        Litrature, {' '}
                        <Link href="/" target="_blank">Art</Link>
                        , Painting, {' '}
                        <Link href="/" target="_blank">Drawing</Link>
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/amrrashor" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>amrrashor</Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://twitter.com/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>Twitter</Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://www.instagram.com/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>Instagram</Button>
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href="https://discord.com/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>Discord</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page