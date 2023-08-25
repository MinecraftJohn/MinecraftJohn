import emailJS from "emailjs-com";
import SendIcon from "./assets/svg/SendIcon";
import ErrorIcon from "./assets/svg/ErrorIcon";
import CheckSVG from "./assets/svg/CheckSVG";
import { useState, useRef } from "react";

function Contact() {
  const [emailInputonError, toggleEmailInputonError] = useState(false);
  const [msgInputonError, toggleMsgInputonError] = useState(false);
  const [formSubmitSuccess, toggleFormSubmitSuccess] = useState(false);
  const [formSubmitError, toggleFormSubmitError] = useState(false);
  const [formDisabled, setformDisabled] = useState(false);
  const emailInput = useRef();
  const msgInput = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    if (emailRegex.test(emailInput.current.value) && msgInput.current.value.length > 7) {
      toggleMsgInputonError(false);
      toggleEmailInputonError(false);
      setformDisabled(true);
      emailJS
        .sendForm("service_m7n3yig", "template_y7p0owb", e.target, "gE-m3rXxZq61MIVAM")
        .then(() => {
          setTimeout(() => {
            toggleFormSubmitError(false);
            toggleFormSubmitSuccess(true);
          }, 1000);
        })
        .catch(() => {
          toggleFormSubmitError(true);
          setformDisabled(false);
        });
    } else {
      !emailRegex.test(emailInput.current.value) ? toggleEmailInputonError(true) : toggleEmailInputonError(false);
      msgInput.current.value.length > 7 ? toggleMsgInputonError(false) : toggleMsgInputonError(true);
    }
  };
  let preLoadClasses = ["saturate-0", "saturate-50", "border-gray-300 focus:border-gray-400", "border-red-500"];
  return (
    <div id="contact" className="flex flex-col items-center min-h-[66vh] mb-16 md:mb-32">
      <section className="flex flex-col justify-between md:items-end md:flex-row gap-24 md:gap-16 w-[72rem] max-w-[90%]">
        <div data-contact-selector="form-container" className="md:w-[66%]">
          <h1 className="text-3xl font-bold text-center md:text-left">Contact</h1>
          <p className="text-sm text-center md:text-left mb-16">Let's work together</p>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm">
                Email
              </label>
              <input
                type="text"
                id="contact-email"
                name="client_email"
                ref={emailInput}
                disabled={formDisabled}
                className={`text-sm h-10 px-4 rounded border focus:outline-none ${
                  emailInputonError ? preLoadClasses[3] : preLoadClasses[2]
                } disabled:opacity-60`}
              />
              <p className={`flex gap-1 text-xs ${emailInputonError ? null : "hidden"} text-red-600`}>
                <ErrorIcon className={"fill-red-600 h-4 shrink-0"} fill={"inherit"} /> Invalid email address
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-messsage" className="text-sm">
                Message
              </label>
              <textarea
                id="contact-messsage"
                name="client_message"
                rows="6"
                ref={msgInput}
                disabled={formDisabled}
                className={`text-sm min-h-[9rem] px-4 py-2 rounded border focus:outline-none ${
                  msgInputonError ? preLoadClasses[3] : preLoadClasses[2]
                } disabled:opacity-60`}
              ></textarea>
              <p className={`flex gap-1 text-xs ${msgInputonError ? null : "hidden"} text-red-600`}>
                <ErrorIcon className={"fill-red-600 h-4 shrink-0"} fill={"inherit"} /> Please enter a readable message
              </p>
            </div>
            <div className="mt-12">
              <p className={`flex gap-1 text-xs ${formSubmitError ? null : "hidden"} text-red-600 mb-2`}>
                <ErrorIcon className={"fill-red-600 h-4 shrink-0"} fill={"inherit"} /> Something went wrong, please try
                again.
              </p>
              <button
                type="submit"
                disabled={formDisabled}
                className="inline-flex items-center justify-center gap-2 text-sm text-white px-6 w-full md:w-auto h-10 bg-[#075DCE] rounded select-none hover:opacity-90 active:opacity-60 disabled:opacity-60"
              >
                <SendIcon className={"fill-none h-5"} fill={"#ffffff"} />
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block relative w-full h-96">
          <div
            data-contact-selector="ball"
            className={`animate-float absolute ${
              formSubmitSuccess ? "left-1/2 -translate-x-1/2 w-1/2 opacity-0" : "left-[12%] w-1/4"
            } aspect-square rounded-full bg-[#1890DE] transition-all duration-1000 ease-out saturate-0 hover:saturate-50`}
          ></div>
          <div
            data-contact-selector="ball"
            className={`flex justify-center items-center animate-floatDelay top-[10%] absolute ${
              formSubmitSuccess
                ? "right-1/2 translate-x-1/2 -translate-y-1/2 w-3/4 bg-gradient-to-tr from-[#1890DE] to-[#075DCE] !saturate-100"
                : "right-[12%] w-1/4 bg-[#075DCE]"
            } aspect-square rounded-full transition-all duration-1000 ease-out saturate-0 hover:saturate-50`}
          >
            <CheckSVG
              className={`w-[33%] fill-none transition-all delay-1000  ${
                formSubmitSuccess ? "opacity-100" : "opacity-0"
              }`}
              fill={"#ffffff"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
