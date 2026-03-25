import { Link } from "@inertiajs/react";
import { useState } from "react";

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 35 35" fill="none">
      <path d="M29.5032 21.9785L25.7604 19.7458C24.8874 19.2244 23.8474 19.0582 22.8554 19.2815C21.8633 19.5048 20.9949 20.1005 20.4295 20.9457L19.35 22.5565C16.2673 21.042 13.7756 18.5458 12.2666 15.4604L13.8689 14.3936C14.7153 13.8312 15.3135 12.9654 15.5402 11.9748C15.7669 10.9842 15.6047 9.94436 15.0872 9.0698L12.8772 5.3298C12.5363 4.75947 12.0264 4.30933 11.4182 4.04178C10.81 3.77423 10.1337 3.70254 9.48288 3.83664C8.46816 4.04111 7.50614 4.45147 6.65625 5.04235C5.80636 5.63323 5.08664 6.39209 4.54155 7.27205C4.0039 8.13032 3.65069 9.09106 3.50435 10.0932C3.35802 11.0953 3.42177 12.117 3.69155 13.0931C4.88857 17.4018 7.18041 21.3273 10.3441 24.4878C13.5078 27.6483 17.4356 29.9361 21.7455 31.1287C22.7208 31.3984 23.7415 31.4621 24.7427 31.3157C25.7439 31.1694 26.7037 30.8162 27.561 30.2787C28.4411 29.7341 29.2003 29.0147 29.7914 28.165C30.3825 27.3153 30.7931 26.3534 30.9978 25.3388C31.1261 24.6929 31.0513 24.0232 30.7837 23.4215C30.5161 22.8198 30.0688 22.3157 29.5032 21.9785Z" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 31 31" fill="none">
      <path d="M27.3701 13.497L23.873 10.5828V7.00587C23.873 6.61756 23.5582 6.30275 23.1699 6.30275H18.7447L16.1304 4.03704C15.8661 3.80796 15.4737 3.80796 15.2094 4.03704L12.5952 6.30275H8.16992C7.78161 6.30275 7.46679 6.61756 7.46679 7.00587V10.5828L3.96978 13.497C3.80952 13.6305 3.7168 13.8284 3.7168 14.0371V27.1621C3.7168 27.5504 4.03161 27.8652 4.41992 27.8652H26.9199C27.3082 27.8652 27.623 27.5504 27.623 27.1621V14.0371C27.623 13.8284 27.5303 13.6305 27.3701 13.497ZM11.7121 20.5996L5.12305 25.7245V15.4747L11.7121 20.5996ZM13.0986 21.3027H18.2411L24.8706 26.459H6.4692L13.0986 21.3027ZM19.6277 20.5996L26.2168 15.4747V25.7245L19.6277 20.5996ZM25.7989 14.0182L23.873 15.5162V12.4133L25.7989 14.0182ZM15.6699 5.49884L16.5975 6.30275H14.7423L15.6699 5.49884ZM22.4668 7.70899V16.6099L18.2412 19.8965H13.0986L8.87304 16.6099V7.70899H22.4668ZM7.46679 15.5162L5.54089 14.0182L7.46679 12.4133V15.5162Z" fill="currentColor" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 31 31" fill="none">
      <path d="M15.3398 15.0527C17.0199 15.0527 18.3867 13.6859 18.3867 12.0059C18.3867 10.3258 17.0199 8.95898 15.3398 8.95898C13.6598 8.95898 12.293 10.3258 12.293 12.0059C12.293 13.6859 13.6598 15.0527 15.3398 15.0527ZM15.3398 10.9902C15.8999 10.9902 16.3555 11.4458 16.3555 12.0059C16.3555 12.5659 15.8999 13.0215 15.3398 13.0215C14.7798 13.0215 14.3242 12.5659 14.3242 12.0059C14.3242 11.4458 14.7798 10.9902 15.3398 10.9902Z" fill="currentColor" />
      <path d="M24.4805 12.0059C24.4805 6.96572 20.38 2.86523 15.3398 2.86523C10.2997 2.86523 6.19922 6.96572 6.19922 12.0059C6.19922 13.9998 6.83002 15.8947 8.02348 17.4859L12.9014 23.9893C13.4744 24.753 14.386 25.209 15.3398 25.209C16.2937 25.209 17.2053 24.753 17.7783 23.9892L22.6562 17.4859C23.8497 15.8947 24.4805 13.9998 24.4805 12.0059ZM21.0313 16.267L16.1534 22.7703C15.9591 23.0293 15.6626 23.1777 15.3398 23.1777C15.0171 23.1777 14.7206 23.0292 14.5263 22.7704L9.64843 16.267C8.72081 15.0303 8.23047 13.5568 8.23047 12.0059C8.23047 8.08575 11.4197 4.89648 15.3398 4.89648C19.26 4.89648 22.4492 8.08575 22.4492 12.0059C22.4492 13.5568 21.9589 15.0303 21.0313 16.267Z" fill="currentColor" />
      <path d="M20.418 27.8496C20.418 27.2887 19.9633 26.834 19.4023 26.834H11.2773C10.7164 26.834 10.2617 27.2887 10.2617 27.8496C10.2617 28.4105 10.7164 28.8652 11.2773 28.8652H19.4023C19.9633 28.8652 20.418 28.4105 20.418 27.8496Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  );
}

function TwitterXIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function ContactInfoCard({ icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
        <p className="text-sm font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : <div>{inner}</div>;
}

const ContactUS = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = "w-full border border-gray-200 rounded-lg px-4 py-4 sm:py-6 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 transition";

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800&display=swap');
        * { font-family: 'Barlow', sans-serif; }
      `}</style>

      {/* Hero Banner */}
      <div
        className="relative flex min-h-[220px] items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-12 sm:min-h-[420px] sm:py-20 lg:min-h-[550px] lg:bg-fixed"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gray-900/70 pointer-events-none" />
        <div className="relative z-20 flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold uppercase text-white sm:text-5xl lg:text-6xl">Contact Us</h2>
<h3 className="mt-2 text-sm font-semibold text-white sm:text-base lg:text-xl">
      <Link to="/" className="hover:text-red-500 transition-colors duration-300">Home</Link>
      <span className="mx-2">/</span>
      <span>Contact Us</span>
    </h3>        </div>
      </div>

      {/* Section 1: Info Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* Left */}
          <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 41" fill="none">
                  <path d="M19.9437 0.601318C8.90141 0.601318 0 9.50273 0 20.545C0 31.5872 8.90141 40.6013 19.9437 40.6013C30.9859 40.6013 39.8873 31.6999 39.8873 20.6577C39.8873 9.6154 30.9859 0.601318 19.9437 0.601318Z" fill="white" />
                </svg>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Contact Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              <span className="text-red-600">Secure your</span> with us
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Have questions or need a customized security solution? Our team is here to assist you. Get in touch with us today.
            </p>
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: <InstagramIcon />, label: "Instagram" },
                { icon: <LinkedInIcon />, label: "LinkedIn" },
                { icon: <PinterestIcon />, label: "Pinterest" },
                { icon: <TwitterXIcon />, label: "Twitter" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-200">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Cards */}
          <div className="w-full flex-1 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ContactInfoCard icon={<PhoneIcon />} label="Phone Number" value="+977 01-4535104" href="tel:+97701-4535104" />
              <ContactInfoCard icon={<EmailIcon />} label="Email Address" value="info@mnm.com.np" href="mailto:info@mnm.com.np" />
            </div>
            <ContactInfoCard
              icon={<LocationIcon />}
              label="Location"
              value="429/12 Ichhunadi Marg, Baluwatar, Kathmandu Nepal
"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6">
        <div className="border-t border-gray-100" />
      </div>

      {/* Section 2: Map + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-16 sm:pb-20">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Map */}
          <div className="w-full lg:w-1/2 overflow-hidden border border-gray-100 min-h-[300px] sm:min-h-[420px] lg:min-h-[620px]">
            {/* ✅ FIXED: style={{border:0}}, referrerPolicy camelCase, width/height via className */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.7430059038925!2d85.32935807904262!3d27.72522006328628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1914cb445939%3A0x24d838cffeda4811!2s429%20Ichhunadi%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1774421469810!5m2!1sen!2snp"
              title="Office Location"
              className="w-full h-full min-h-[300px] sm:min-h-[420px] lg:min-h-[620px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Send us message</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                We specialize in providing top-quality security and CCTV solutions to safeguard your home and business.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleChange} className={inputClass} />
                <input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleChange} className={inputClass} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} className={inputClass} />
                <input type="text" name="phone" placeholder="Phone no" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-base sm:text-lg px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  {submitted ? "Message Sent ✓" : "Send Message"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUS;