import { useForm, ValidationError } from "@formspree/react";
import Head from 'next/head';

const formStyle = {
  backgroundColor: '#FFFFFF',
  color: '#2d3748',
  padding: '2rem',
  borderRadius: '0.5rem',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  width: '80%',
  maxWidth: '600px',
  margin: '0 auto',
};

export default function Contact() {
  const [state, handleSubmit] = useForm("xayzojrn");

  if (state.succeeded) {
    return (
    <div style={{...formStyle, textAlign: "center", paddingTop: "2rem", marginTop: "8rem"}}>
    <p>Thanks for your submission!</p>
    </div>
    );
    }

  return (
    <div className="mt-20">
      <Head>
        <title>Contact Me</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-8">Send us a message</h2>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full p-2 mb-4 rounded border border-gray-300"
        />
        <label htmlFor="email" className="block mb-2 font-medium">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-2 mb-4 rounded border border-gray-300"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message" className="block mb-2 font-medium">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 mb-4 rounded border border-gray-300"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          className="bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-300"
          disabled={state.submitting}
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>

        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
