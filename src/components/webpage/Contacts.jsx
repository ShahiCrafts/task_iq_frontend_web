import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Contacts() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="bg-white py-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          We're Always Happy to Assist You
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Reach out to us anytime via email or phone. Our team is here to
          provide guidance and support for your queries.
        </p>

        <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
          <div className="w-full md:w-1/2 h-64 sm:h-80 rounded-lg overflow-hidden relative">
            {!mapLoaded && (
              <div
                className="absolute inset-0 rounded-lg
                bg-[linear-gradient(90deg,#e5e7eb_25%,#f3f4f6_50%,#e5e7eb_75%)]
                bg-[length:200%_100%]
                animate-[shimmer_1.5s_infinite]"
              />
            )}
            <iframe
              onLoad={() => setMapLoaded(true)}
              title="Hattiban, Lalitpur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11306.66662494443!2d85.30906877993077!3d27.64964177435166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd4335c05b%3A0xbce5c12e2c5443d0!2sHattiban%2C%20Lalitpur%2044700%2C%20Nepal!5e0!3m2!1sen!2sus!4v1678250284856!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-1 gap-8 text-left">
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Email Address
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                support@taskiq.com
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Assistance hours: Monday - Friday 8am - 8pm EST
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Phone Number
              </p>
              <h3 className="text-lg font-bold text-gray-900">
                (+977) 9866291003
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Assistance hours: Monday - Friday 8am - 8pm EST
              </p>
            </div>

            <div className="mt-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Subscribe for Updates
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`w-full sm:w-auto font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2
                    ${
                      subscribed
                        ? "bg-green-500 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                >
                  {subscribed ? (
                    <>
                      <Check className="w-5 h-5" />
                      Subscribed
                    </>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
