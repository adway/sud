import fetch from 'isomorphic-unfetch'
import { orderBy } from 'lodash'
import Head from 'next/head'

const Question = ({ id, body, time }) => (
  <li>
    <span>{time}</span>
    <span>{body}</span>
  </li>
)

export default ({ questions = [] }) => (
  <ul>
    {questions.map(({ id, fields }) => (
      <Question
        key={id}
        id={id}
        body={fields.Question}
        time={fields.createdTime}
      />
    ))}
  </ul>
)

export const getStaticProps = async () => {
  const questions = await fetch(
    'https://api.airtable.com/v0/appAovruPCt70iUoO/Table%20of%20Responses?api_key=keyNCuTQNk5ASm2bd'
  )
    .then((res) => res.json())
    .then((json) => orderBy(json.records, 'fields.createdTime', 'desc'))
  return { props: { questions } }
}
