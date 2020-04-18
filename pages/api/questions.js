import Airtable from 'airtable'
import { sortBy, reverse } from 'lodash'

var base = new Airtable({ apiKey: 'keyNCuTQNk5ASm2bd' }).base(
  'appAovruPCt70iUoO'
)

export function getQuestions() {
  return new Promise((resolve, reject) => {
    let questionArray = []

    base('Table of Responses')
    .select({
      view: 'Grid view'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          questionArray.push(record)
        })

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage()
      },
      function done(err) {
        resolve(questionArray)
      }
    )
  })
}

export default async (req, res) => {
    let questions = await getQuestions()
    res.json(reverse(sortBy(questions, 'createdTime')))
}
