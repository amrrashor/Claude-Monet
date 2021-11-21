import { Container, Badge, Link, List, ListItem, Image } from "@chakra-ui/layout"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/Paragraph'
import Layout from '../../components/layouts/article'


const PathWay = () => (
    <Layout title="Path Way">
        <Container maxW="70ch">
            <Title>
                Path Way <Badge>1902</Badge>
            </Title>
            <P>
            Monet's paintings of his water-garden and water-lilies at Giverny occupied him for many years in the latter part of his life and were his last great work.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.claude-monet.com/giverny.jsp#prettyPhoto" target="_blank">
                        https://www.claude-monet.com/giverny.jsp#prettyPhoto <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/Pathway-In-Monets-Garden-At-Giverny.jpg" alt="path way" />
        </Container>
    </Layout>
)
export default PathWay