import {
  useColorMode,
  IconButton,
  Button,
  Box,
  Container,
  Flex,
  NavLink,
  Text
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
      'a+a': { ml: [3, 4] }
    }}
  >
    <Link href="/">
      <NavLink>Home</NavLink>
    </Link>
    <Link href="/abstract">
      <NavLink>Abstract</NavLink>
    </Link>
    <Link href="/slideshow">
      <NavLink>Slideshow</NavLink>
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
      a: { color: 'primary' }
    }}
  >
    <Text>
      Project & Website by <Link href="https://adway.io">Adway Wadekar</Link>{' '}
      with help on the site from <Link href="https://tmb.sh">Theo Bleier</Link>
      {'.'}
    </Text>
  </Container>
)

export default (props) => (
  <>
    <Header />
    <Container variant="container" {...props}>
      {props.children}
    </Container>
    <Footer />
  </>
)
