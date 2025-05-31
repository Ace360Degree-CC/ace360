import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#CCCCCC] text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company Info */}
          <div>
            <h1 className="mb-4 text-base font-extrabold text-white uppercase">Ace360Degree</h1>

            <div className="mb-4">
              <h2 className="text-white font-semibold mb-1 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-white" /> Registered Office
              </h2>
              <p className="">2882, Hasham House, Kharodi, Ali Talao Rd, Malad West, Mumbai, Maharashtra 400095</p>
            </div>

            <div className="mb-4">
              <h2 className="text-white font-semibold mb-1 flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-white" /> Corporate Office
              </h2>
              <p className="">12 Upper, Mindspace, Chincholi Bunder Road, New Link Rd, Malad West, Mumbai, Maharashtra 400064</p>
            </div>

            <p className="flex items-center gap-2 mb-1">
              <EnvelopeIcon className="w-4 h-4 text-white" /> info@a360pl.com
            </p>
            <p className="flex items-center gap-2 mb-1">
              <PhoneIcon className="w-4 h-4 text-white" /> +91-7045 360 360
            </p>
            <p className="flex items-center gap-2 mb-4">
              <PhoneIcon className="w-4 h-4 text-white" /> +022-46 020 360
            </p>

            <p className="mb-1"><strong className="text-white">CIN</strong>: U72901MH2022PTC382331</p>
            <p>Altreen 360 Creative Solutions PVT LTD</p>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-4 text-base font-extrabold text-white uppercase">Services</h2>
            <ul className="space-y-2">
              {["Search Engine Optimization","Pay Per Click","Social Media Marketing","Graphic Designing","Youtube Optimization","Website Design & Development","Video Editing","Content Writing","View All"].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="mb-4 text-base font-extrabold text-white uppercase">Other Links</h2>
            <ul className="space-y-2">
              {["Company","Contact","Career","Blog","FAQs"].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-white" /> <a href="#" className="hover:text-white transition">career@a360pl.com</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-white" /> <a href="#" className="hover:text-white transition">HR +91-8452 833 606</a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h2 className="mb-4 text-base font-extrabold text-white uppercase">Policies</h2>
            <ul className="space-y-2">
              {["Privacy Policy","Terms & Conditions","Refund","Approval","Service"].map((item, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1F1F1F] text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Ace360Degree. All Rights Reserved.
      </div>
    </footer>
  );
}
