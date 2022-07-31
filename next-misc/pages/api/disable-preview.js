export default function handler(req, res) {
  /*
    using "res.clearPreviewData()" to disable Preview Mode.
  */
  res.clearPreviewData();
  /* using "res.end()" to show a message */
  res.end("Preview Mode disabled");
}
