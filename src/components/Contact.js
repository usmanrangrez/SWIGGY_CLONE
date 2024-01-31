const Contact = () => {
  return (
    <section className="bg-blue-50 dark:bg-slate-800 image-height" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center md:mx-auto">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
              GoFood!
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                scelerisque sagittis ante, ac tincidunt sem venenatis ut.
              </p>
              <ul>
                {/* Address */}
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {/* Icon */}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      1230 Maecenas Street Donec Road, New York, EEUU
                    </p>
                  </div>
                </li>

                {/* Contact */}
                <li className="flex mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {/* Icon */}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mobile: +1 (123) 456-7890
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Mail: tailnext@gmail.com
                    </p>
                  </div>
                </li>

                {/* Working hours */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    {/* Icon */}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working Hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday & Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-white text-2xl font-bold">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  {/* Name Field */}
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                    />
                  </div>
                  {/* Email Field */}
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email address"
                      className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                    />
                  </div>
                  {/* Message Field */}
                  <textarea
                    id="textarea"
                    name="textarea"
                    cols="30"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full rounded-md border border-gray-400 py-2 px-4 shadow-md dark:text-gray-300"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    disabled
                    className="w-full bg-blue-800 text-white px-6 py-3 rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
