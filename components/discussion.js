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
