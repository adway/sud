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
      return res.status(200).end()
    }
  )

}
