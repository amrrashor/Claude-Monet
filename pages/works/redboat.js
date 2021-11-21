import { Container, Badge, Link, List, ListItem } from "@chakra-ui/layout"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/article'

const RedBoat = () => (
    <Layout title="Path Way">
        <Container maxW="70ch">
            <Title>
                Red Boat <Badge>1875</Badge>
            </Title>
            <P>
            Monet painted the town and surrounding area of Argenteuil through the 1870s and in each instant created pictures of beauty and harmony, which were often at odds with the reality of the moment.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.claude-monet.com/red-boats-at-argenteuil.jsp" target="_blank">
                        https://www.claude-monet.com/red-boats-at-argenteuil.jsp <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/The-Red-Boats,-Argenteuil.jpg" alt="red boat" />
        </Container>
    </Layout>
)
export default RedBoat