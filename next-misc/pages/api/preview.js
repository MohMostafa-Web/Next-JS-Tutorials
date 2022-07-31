export default function handler(req, res) {
  /*
    using "res.setPreviewData({})" to enable Preview Mode.
    - It accepts arg as object can be set with any key/value pairs accessed within context of "getStaticProps" or "getServerSideProps"
  */
  // res.setPreviewData({});
  res.setPreviewData({user: "Mohamed"});
  /* 
    using "res.redirect('Path')" to make redirect to Page, 
      page path will be from query string which is "req.query.redirect"
  */
  res.redirect(req.query.redirect);
}
