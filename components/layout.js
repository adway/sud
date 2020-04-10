import {
  useColorMode,
  IconButton,
  Button,
  Box,
  Container,
  Flex,
  NavLink
} from 'theme-ui'
import Link from 'next/link'

export const ColorButton = ({ sx, ...props }) => {
  const [mode, setMode] = useColorMode()
  return (
    <Button
      {...props}
      sx={{
        color: 'text',
        bg: 'background',
        borderRadius: 'circle',
        transition: 'box-shadow .125s ease-in-out',
        ':hover,:focus': {
          boxShadow: '0 0 0 2px',
          outline: 'none'
        },
        ...sx
      }}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title="Reverse color scheme"
    >
      Change Theme
    </Button>
  )
}

export const Header = () => (
  <Container
    as="header"
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: 3,
      py: 4,
      'a + a': { mx: [2, 3] }
    }}
  >
    <Link href="/abstract">
      <NavLink>Home</NavLink>
    </Link>
    <Link href="/abstract">
      <NavLink>Abstract</NavLink>
    </Link>
    <Link href="/Slideshow">
      <NavLink>Slideshow</NavLink>
    </Link>
    <Link href="/Slideshow">
      <NavLink>Video</NavLink>
    </Link>
    <Box sx={{ mx: 'auto' }} />
    <ColorButton
      onClick={(e) => {
        const next = mode === 'dark' ? 'light' : 'dark'
        setMode(next)
      }}
    />
  </Container>
)

export const Footer = () => (
  <Container
    as="footer"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      py: 5,
      a: { color: 'primary', mx: 2 }
    }}
  >
    &copy; Adway S. Wadekar
  </Container>
)

export const getStaticProps = async () => {
  const questions = await fetch(
    'https://api.airtable.com/v0/appAovruPCt70iUoO/Table%20of%20Responses?api_key=keyNCuTQNk5ASm2bd'
  )
    .then((res) => res.json())
    .then((json) => orderBy(json.records, 'fields.createdTime', 'desc'))
  return { props: { questions } }
}

export default (props) => (
  <>
    <Header />
    <Container variant="container">{props.children}</Container>
    <Footer />
  </>
)
