export default function Sponsorship(){
    return(
        <section>
             <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-y-10">
          {[
            "/images/home/ARCIL.png",
            "/images/home/BAYER.png",
            "/images/home/AMIGO.png",
            "/images/home/mos.png",
            "/images/home/Rexello.png",
            "/images/home/urban.png",
            "/images/home/Hue fashion.png",
            "/images/home/hafele.png",
            "/images/home/Innosteelix.png",
            "/images/home/Al-Nuaim.png",
            "/images/home/Vertex.png",
            "/images/home/AddZ.png",
            "/images/home/Ambit.png",
            "/images/home/barcode.png",
            "/images/home/Bijoux.png",
            "/images/home/Fashion Bling.png",
            "/images/home/Community.png",
            "/images/home/Garrg.png",
            "/images/home/Cigmaa.png",
            "/images/home/Excel.png",
            "/images/home/Ecoreco.png",
            "/images/home/Ingersoll.png",
            "/images/home/Keratherapy.png",
            "/images/home/AITF.png",
            "/images/home/Loan Seva.png",
            "/images/home/NailAddict.png",
            "/images/home/NEI India.png",
            "/images/home/ORB.png",
            "/images/home/Oswal.png",
            "/images/home/Padamashree.png",
            "/images/home/Parallax.png",
            "/images/home/PGRO.png",
            "/images/home/Pioneer.png",
            "/images/home/RA.png",
            "/images/home/Regalia.png",
            "/images/home/RV.png",
            "/images/home/Ryobran.png",
            "/images/home/Sarthi.png",
            "/images/home/Schott-Kaisha.png",
            "/images/home/Tex.png",
            "/images/home/Tricolor.png",
            "/images/home/Valuefin.png",
            "/images/home/GIC.png",
            "/images/home/mahindra.png"
          ].map((logo, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/6 flex justify-center">
              <img src={logo} alt={`Client Logo ${index + 1}`} className="h-20 object-contain" />
            </div>
          ))}
        </div>
      </div>
        </section>
    );
}