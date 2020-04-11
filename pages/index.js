import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import { orderBy } from 'lodash'
import {
  Styled,
  Box,
  Text,
  Container,
  Embed,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Button
} from 'theme-ui'
import YouTubePlayer from 'react-player/lib/players/YouTube'

export default ({ questions = [] }) => (
  <Layout>
    <Styled.h1>Substance Use Disorders Among Adolescents</Styled.h1>
    <Styled.h2>An Introduction</Styled.h2>

    <Embed src="https://www.youtube.com/embed/5HNYG6tN67U" />

    <Box
      sx={{
        bg: 'sheet',
        p: 3,
        mt: 3,
        ul: { listStyle: 'none' },
        borderRadius: 'extra',
        h1: {
          fontSize: 2
        }
      }}
    >
      <h1>Questions and Comments</h1>
      <ul>
        {questions.map(({ id, fields }) => (
          <Question
            key={id}
            id={id}
            body={fields.Question}
            time={fields.createdTime}
            reply={fields.Reply}
          />
        ))}
      </ul>
      <Box
        as="form"
        onSubmit={(e) => {
          e.preventDefault()
          fetch(
            'https://api.airtable.com/v0/appAovruPCt70iUoO/Table%20of%20Responses?api_key=keyNCuTQNk5ASm2bd',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                fields: {
                  Question: Input.Question
                }
              })
            }
          )
        }}
      >
        <Label htmlFor="Question">Question or Comment</Label>
        <Textarea name="Question" rows="3" mb={3} />
        <Button type="submit  ">Submit</Button>
      </Box>
    </Box>
  </Layout>
)

const Question = ({ id, body, time, reply }) => (
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

export const YouTube = ({ url, ...props }) => (
  <YouTubePlayer
    url={url}
    width="50%"
    height={400}
    controls
    config={{ youtube: { playerVars: { showinfo: 1 } } }}
    {...props}
  />
)

export const getStaticProps = async () => {
  const questions = await fetch(
    'https://api.airtable.com/v0/appAovruPCt70iUoO/Table%20of%20Responses?api_key=keyNCuTQNk5ASm2bd'
  )
    .then((res) => res.json())
    .then((json) => orderBy(json.records, 'fields.createdTime', 'desc'))
  return { props: { questions } }
}
