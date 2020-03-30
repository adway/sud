import { Box, Text } from '@theme-ui/components';

export const Experience = ({ time, title, organization, children }) => (
  <Box
    as='section'
    sx={{
      py: 2,
      borderBottom: '1px solid',
      borderBottomColor: 'border',
      ':first-of-type': {
        borderTop: '1px solid',
        borderTopColor: 'border'
      }
    }}
  >
    <Text as='span' sx={{ color: 'muted' }}>
      {organization}
    </Text>
    <Text
      as='span'
      sx={{ color: 'muted', display: 'block', float: [null, 'right'] }}
    >
      {time}
    </Text>
    <Text as='strong' sx={{ display: 'block' }}>
      {title}
    </Text>
    {children}
  </Box>
);
