import React from "react";

export default function RequestQuoteForm() {
  return (
    <section className="bg-[var(--theme-grey)]">
      <div className=" p-8 rounded-md max-w-3xl mx-auto ">
        <h2 className="text-white text-2xl font-light text-center mb-6 font-serif">
          Request a Quote
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded-md border-none text-gray-900 bg-white"
            required
          />
          <input
            type="text"
            placeholder="Phone No."
            className="w-full p-3 rounded-md border-none text-gray-900 bg-white"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md border-none text-gray-900 bg-white"
            required
          />
          {/* <input
            type="text"
            placeholder="Choose services"
            className="w-full p-3 rounded-md border-none text-gray-900 bg-white"
            required
          /> */}
          <select className="w-full p-3 rounded-md border-none text-gray-900 bg-white ">
            <option>Service</option>
            <option>DigitalMarketing</option>
            <option>Branding</option>
            <option>Technology</option>
          </select>
          <textarea
            className="bg-white w-full p-3 rounded-md border-none text-gray-900"
            placeholder="Message"
            required
          ></textarea>

          <div className="flex justify-center items-center mt-4 flex-wrap gap-4">
            <button
              type="submit"
              className="bg-yellow-500 text-center hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
