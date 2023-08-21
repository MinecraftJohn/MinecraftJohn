function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center mb-32">
      <section className="flex flex-col justify-between md:flex-row gap-24 md:gap-16 w-[72rem] max-w-[90%]">
        <div className="md:w-[66%]">
          <h1 className="text-3xl font-bold text-center md:text-left">Get in touch.</h1>
          <p className="text-sm text-center md:text-left">Let's work together</p>
        </div>
        <div className="relative w-full h-36 md:h-64 bg-white rounded-xl shadow-custom"></div>
      </section>
    </div>
  );
}
// TODO: Contact then ang mga src/assets/img for better exp on local clone.
export default Contact;
