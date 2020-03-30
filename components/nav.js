import { useColorMode } from 'theme-ui';
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Image,
  Flex,
  NavLink
} from '@theme-ui/components';
import Link from 'next/link';
import { Zap } from 'react-feather';

const NavButton = ({ sx, ...props }) => (
  <IconButton
    {...props}
    sx={{
      color: 'muted',
      borderRadius: 'circle',
      transition: 'box-shadow .125s ease-in-out',
      ':hover,:focus': {
        boxShadow: '0 0 0 2px',
        outline: 'none'
      },
      ...sx
    }}
  />
);

const ColorSwitcher = props => {
  const [mode, setMode] = useColorMode();
  return (
    <NavButton
      {...props}
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      title='Change Color Scheme'
    >
      <Zap size={24} />
    </NavButton>
  );
};

export default () => (
  <Box
    as='nav'
    sx={{
      color: 'text',
      py: 4
    }}
    key='nav'
  >
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        a: {
          fontSize: 2,
          color: 'text',
          fontWeight: 'body',
          textDecoration: 'none',
          mr: [3, 4],
          ':focus,:hover': { color: 'muted' }
        }
      }}
    >
      <Link href='/' passHref>
        <Flex
          as='a'
          sx={{
            alignItems: 'center',
            mr: 'auto !important'
          }}
        >
          <NavLink
            as='span'
            sx={{
              display: ['none', 'inline-block'],
              fontWeight: 'bold !important',
              ':focus,:hover': { color: 'muted' }
            }}
          >
            Adway Wadekar
          </NavLink>
          <NavLink
            as='span'
            sx={{
              display: ['inline-block', 'none'],
              fontWeight: 'bold !important',
              ':focus,:hover': { color: 'muted' }
            }}
          >
            AW
          </NavLink>
        </Flex>
      </Link>
      <Link href='/cv' passHref>
        <NavLink>CV</NavLink>
      </Link>
      <Link href='/research' passHref>
        <NavLink>Research</NavLink>
      </Link>
      <Link href='/writing' passHref>
        <NavLink>Writing</NavLink>
      </Link>

      <ColorSwitcher />
    </Container>
  </Box>
);
