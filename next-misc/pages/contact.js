import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="content">
      <h2>Contact</h2>
    </div>
  );
}

export default Contact;

/* using `ComponentName.getLayout` to render customized layout */
Contact.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
