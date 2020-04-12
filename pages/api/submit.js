const Airtable = require('airtable')
var base = new Airtable({ apiKey: 'keyNCuTQNk5ASm2bd' }).base(
  'appAovruPCt70iUoO'
)

export default (req, res) => {
  res.statusCode = 200
  base('Table of Responses').create(
    [
      {
        fields: {
          Question: req.body.question
        }
      }
    ],
    function (err, records) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function (record) {
        console.log(record.getId())
      })
    }
  )
  res.status(200).end()
}
