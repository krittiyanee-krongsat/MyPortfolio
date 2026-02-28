import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ComputerExperience from "../components/Contact/ComputerExperience";

const ContactSection = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ตรวจสอบรูปแบบอีเมลให้ถูกต้องก่อนส่ง
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      alert('Message sent successfully. Thank you for reaching out!');
      // clear form
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending email:", error);
      alert('Error sending email. Please Try Again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
        <div className="w-full h-full md:px-20 px-5">
            <TitleHeader 
                title="Contact" 
                sub="💬For professional inquiries or opportunities"
            />
            <div className="grid-12-cols mt-16">
              <div className="xl:col-span-5">
                <div className="flex-center card-border rounded-xl p-10">
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col gap-7"
                  >
                    <div>
                      <label htmlFor="name">Your name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What's your name?"
                        required
                        className="bg-white-70"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="What's your email address?"
                        required
                        className="bg-white-70"
                      />
                    </div>

                    <div>
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How Can I help you?"
                        rows="5"
                        required
                        className="bg-white-70"
                      />
                    </div>

                    <button type="submit">
                      <div className="cta-button group">
                        <div className="bg-circle"/>
                        <p className="text">
                           { loading ? "Sending..." : "Send Message"}
                        </p>
                        <div className="arrow-wrapper">
                          <img src="/images/arrow-down.svg" alt="arrow"/>
                        </div>
                      </div>
                    </button>
                  </form>
                </div>
              </div>
              <div className="xl:col-span-7 min-h-96">
                <div className="bg-slate-400 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                  <ComputerExperience/>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default ContactSection;