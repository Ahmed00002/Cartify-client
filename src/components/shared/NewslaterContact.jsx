import { MapPin, Phone, Mail } from "lucide-react";
const NewslaterContact = () => {
  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6">
          {/* Location */}
          <div className="col-span-12 md:col-span-3 rounded-md border-[rgba(32, 181, 38, 0.2)] border p-5 flex flex-col gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500">
              <MapPin size={22} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 uppercase text-sm">
                Our Location
              </h3>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                1901 Thornridge Cir. Shiloh, Washington DC 20020, United States
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="col-span-12 md:col-span-3 rounded-md border-[rgba(32, 181, 38, 0.2)] border p-5 flex flex-col gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500">
              <Phone size={22} />
            </div>
            <h3 className="font-medium text-gray-800 uppercase text-sm">
              Call Us 24/7
            </h3>
            <p className="text-Primary text-2xl ">(303) 555-0105</p>
          </div>

          {/* Newsletter */}
          <div className="col-span-12 md:col-span-6 rounded-md border-[rgba(32, 181, 38, 0.2)] border p-5 flex flex-col gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500">
              <Mail size={22} />
            </div>
            <h3 className="font-medium text-gray-800 uppercase text-sm">
              Subscribe Newsletter
            </h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full md:w-64 px-4 py-2 border border-gray-100 rounded-l-full focus:outline-none focus:ring-1 focus:ring-gray-200 flex-1"
              />
              <button className="bg-green-500 text-white px-6 py-2 rounded-r-full hover:bg-green-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewslaterContact;
