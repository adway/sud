import { Container, Box } from '@theme-ui/components';

export default () => (
  <Box as='footer' sx={{ textAlign: 'center', px: 2, py: [3, 4] }}>
    <Container
      sx={{
        maxWidth: 640,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text',
        a: { color: 'inherit' }
      }}
    >
      &copy; Adway S. Wadekar
    </Container>
  </Box>
);
