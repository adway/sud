import { Box, Text } from 'theme-ui'

export default ({ id, body, time, reply }) => (
  <Box as="li" sx={{ py: 3 }}>
    <Text as="span" sx={{ color: 'muted' }}>
      {time}
    </Text>
    <Text as="span" sx={{ display: 'block' }}>
      {body}
      <Box>
        <Text as="span" sx={{ display: 'block', px: 3 }}>
          <em>Reply:</em> {reply}
        </Text>
      </Box>
    </Text>
  </Box>
)
