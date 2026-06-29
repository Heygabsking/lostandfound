import"./contact.css";
function Contact() {

  const API_URL = import.meta.env.VITE_API_URL;

  async function sendMessage(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      alert(data.message);

      // ✅ reset form after success
      form.reset();

    } catch (error) {
      console.error(error);
      alert("Failed to send message ❌");
    }
  }

  return (
    <div className="contactPage">
      <div className="contactOverlay">

        <h1>Contact Us</h1>

        <p className="contactIntro">
          If you have any questions about lost items, found items, or
          need assistance using our platform, feel free to contact us.
          Our team will respond as soon as possible.
        </p>

        <div className="contactContainer">

          <div className="contactInfo">
            <h2>Get In Touch</h2>

            <p>📍 USIU Nairobi, Kenya</p>
            <p>📧 Email: support@lostandfound.com</p>
            <p>📞 Phone: +254 718480954</p>
            <p>🕒 Mon – Fri: 9:00 AM – 5:00 PM</p>
          </div>

          <form className="contactForm" onSubmit={sendMessage}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;