import { Container, Grid, Heading, SimpleGrid } from "@chakra-ui/layout";
import Layout from '../components/layouts/article';
import Section from '../components/Section';
import { GridItem } from "../components/gridItem";

import thumbImg_1 from '../public/images/posts/The-Walk-Woman-With-A-Parasol.jpg';
import thumbImg_2 from '../public/images/posts/The-Water-Lily-Pond-Aka-Japanese-Bridge.jpg'

const Posts = () => (
    <Layout title="Posts">
        <Container maxW="70ch">
            <Heading as="h3" fontSize={20} mb={4}>
                Latest Posts
            </Heading>

            <Section delay={0.2}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem title="BIOGRAPHY OF CLAUDE OSCAR MONET" thumbnail={thumbImg_1} href="https://www.claudemonetgallery.org/biography.html" />
                    <GridItem title="The Complete Works" thumbnail={thumbImg_2} href="https://www.claudemonetgallery.org/the-complete-works.html" />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
