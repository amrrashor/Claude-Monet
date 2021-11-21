import { Container, Badge, Link, List, ListItem } from "@chakra-ui/layout"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/article'

const RedBoat = () => (
    <Layout title="Path Way">
        <Container maxW="70ch">
            <Title>
            The Artist's Family In The Garden <Badge>1875</Badge>
            </Title>
            <P>
                In July and August 1874 Manet vacationed at his family’s house in Gennevilliers, just across the Seine from Monet at Argenteuil
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.wikiart.org/en/claude-monet/the-artist-s-family-in-the-garden" target="_blank">
                        https://www.wikiart.org/en/claude-monet/the-artist-s-family-in-the-garden <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/The-Artists-Family-In-The-Garden.jpg" alt="artist" />
        </Container>
    </Layout>
)
export default RedBoat