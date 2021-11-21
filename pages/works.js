//chakra
import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/layout";

//components
import Section from "../components/Section";
import { WorkGridItem } from "../components/gridItem";
import Layout from "../components/layouts/article";


//images
import thumbPathway from '../public/images/works/Pathway-In-Monets-Garden-At-Giverny.jpg';
import thumbRedboat from '../public/images/works/The-Red-Boats,-Argenteuil.jpg'
import thumbGennevilliers from '../public/images/works/Sailboat-At-Le-Petit-Gennevilliers.jpg';
import thumbArtistfamily from '../public/images/works/The-Artists-Family-In-The-Garden.jpg';


const Works = () => {
    return (
        <Layout>
            <Container maxW='70ch'>

                <Heading as='h3' fontSize={20} mb={6} mt={6}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id='pathway' title="Path Way" thumbnail={thumbPathway}>
                            Pathway In Monets Garden At Giverny
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="redboat" title="Red Boat" thumbnail={thumbRedboat}>
                            Argenteuil (Red Boats)
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.3}>
                    <Divider my={6} />
                </Section>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="Gennevilliers" title="Gennevilliers" thumbnail={thumbGennevilliers}>
                            Sailboat At Le Petit Gennevilliers
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="Artistfamily" title="Artist's Family" thumbnail={thumbArtistfamily}>
                            The Artist's Family In The Garden
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.4}>
                    <Divider my={6} />
                </Section>

            </Container>
        </Layout>
    )
}

export default Works