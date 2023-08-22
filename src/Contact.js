import emailJS from "emailjs-com";
import { useState } from "react";

function Contact() {
  const sendEmailJS = (e) => {
    e.preventDefault();
    emailJS
      .sendForm("service_m7n3yig", "template_y7p0owb", e.target, "gE-m3rXxZq61MIVAM")
      .then((res) => {
        alert("success: " + JSON.stringify(res) + e.target);
      })
      .catch((err) => {
        alert("error: " + JSON.stringify(err) + e.target);
      });
  };
  let saturations = ["saturate-0", "saturate-50", "saturate-100"];
  const [saturate, setSaturate] = useState("0");
  return (
    <div id="contact" className="flex flex-col items-center mb-32">
      <section className="flex flex-col justify-between md:items-end md:flex-row gap-24 md:gap-16 w-[72rem] max-w-[90%]">
        <div
          className="md:w-[66%]"
          // onMouseOver={() => {
          //   setSaturate(saturations[1]);
          // }}
          // onMouseLeave={() => {
          //   setSaturate(saturations[0]);
          // }}
        >
          <h1 className="text-3xl font-bold text-center md:text-left">Contact</h1>
          <p className="text-sm text-center md:text-left mb-16">Let's work together</p>
          <form onSubmit={sendEmailJS} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="contact-email" className="text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="client_email"
                className="text-sm h-10 px-4 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
                // onFocus={() => {
                //   setSaturate(saturations[2]);
                // }}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="contact-messsage" className="text-sm mb-2">
                Message
              </label>
              <textarea
                id="contact-messsage"
                name="client_message"
                rows="6"
                className="text-sm px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
              ></textarea>
            </div>
            <div className="flex mt-12">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 text-sm text-white px-6 w-full md:w-auto h-10 bg-[#075DCE] rounded select-none hover:opacity-90 active:opacity-60"
              >
                <svg className="fill-none h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.18412 2.11244C2.33657 1.98818 2.54771 1.96483 2.72363 2.05279L17.7236 9.55279C17.893 9.63749 18 9.81062 18 10C18 10.1894 17.893 10.3625 17.7236 10.4472L2.72363 17.9472C2.54771 18.0352 2.33657 18.0118 2.18412 17.8876C2.03167 17.7633 1.96623 17.5612 2.0169 17.3712L3.98255 10L2.0169 2.62884C1.96623 2.4388 2.03167 2.2367 2.18412 2.11244ZM4.88416 10.5L3.26911 16.5564L16.382 10L3.26911 3.44357L4.88416 9.5H11.5C11.7762 9.5 12 9.72386 12 10C12 10.2761 11.7762 10.5 11.5 10.5H4.88416Z"
                    fill="#ffffff"
                  />
                </svg>
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block relative w-full h-96">
          <div
            className={`animate-float absolute left-[12%] w-1/4 aspect-square rounded-full bg-[#1890DE] transition-all duration-1000 ease-out saturate-0 hover:saturate-50`}
          ></div>
          <div
            className={`animate-floatDelay top-[10%] absolute right-[12%] w-1/4 aspect-square rounded-full bg-[#075DCE] transition-all duration-1000 ease-out saturate-0 hover:saturate-50`}
          ></div>
        </div>
      </section>
    </div>
  );
}
// TODO: Contact then ang mga src/assets/img for better exp on local clone.
export default Contact;
