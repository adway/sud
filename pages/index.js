import { useState } from 'react'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import { orderBy } from 'lodash'
import { Styled, Box, Embed, Label, Text, Textarea, Button } from 'theme-ui'

import Question from '../components/question'

export default ({ questions = [] }) => {
  const [question, setQuestion] = useState('')
  const [submitted, setSubmit] = useState(false)
  const submitForm = () =>
    fetch('api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ question: question })
    }).then((res) => {
      res.status === 200 ? setSubmit(true) : ''
      setQuestion('')
    })
  return (
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
            submitForm()
          }}
        >
          <Label htmlFor="Question">Question or Comment</Label>
          <Textarea
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value)
            }}
            name="Question"
            rows="3"
            mb={3}
            required
          />
          <Button variant="outline" sx={{ color: 'text' }} type="submit">
            Submit
          </Button>
        </Box>
        <Text>
          {submitted
            ? "Thank you for submitting! I'll respond on this website shortly."
            : ''}
        </Text>
      </Box>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const questions = await fetch(
    'https://api.airtable.com/v0/appAovruPCt70iUoO/Table%20of%20Responses?api_key=keyNCuTQNk5ASm2bd'
  )
    .then((res) => res.json())
    .then((json) => orderBy(json.records, 'createdTime', 'desc'))
  return { props: { questions } }
}
