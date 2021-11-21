import { Container, Badge, Link, List, ListItem } from "@chakra-ui/layout"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/article'

const RedBoat = () => (
    <Layout title="Path Way">
        <Container maxW="70ch">
            <Title>
            Sailboat at Le Petit-Gennevilliers <Badge>1874</Badge>
            </Title>
            <P>
            The canvas is alive with colour, while the depth of the water is illustrated through the purples and blues.             </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.wikiart.org/en/claude-monet/sailboat-at-le-petit-gennevilliers" target="_blank">
                    https://www.wikiart.org/en/claude-monet/sailboat-at-le-petit-gennevilliers <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/Sailboat-At-Le-Petit-Gennevilliers.jpg" alt="Gennevilliers" />

        </Container>
    </Layout>
)
export default RedBoat