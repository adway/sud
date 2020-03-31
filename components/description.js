import { Box, Text } from '@theme-ui/components';

export const Description = ({ children }) => (
  <Box
    as='section'
    sx={{
      pb: 2,
      mb: 4,
      borderBottom: '1px solid',
      borderBottomColor: 'muted'
    }}
  >
    {children}
  </Box>
);
