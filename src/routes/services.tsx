import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import { GoogleReviews } from "@/components/muse/GoogleReviews";

// IMPORTS ORIGINAIS
import imgAcneDefense from "@/assets/AcneDefense.jpeg";
import imgAdvancedAge from "@/assets/AdvancedAge.jpeg";
import imgArmpitWax from "@/assets/ArmpitWax.jpeg";
import imgBackBikiniBraz from "@/assets/BackWaxBikiniWaxFullBrazilianWax.jpeg";
import imgCintura from "@/assets/cintura.jpeg";
import imgDeepCleaningFacialMuseByMissi from "@/assets/DeepCleaningFacialMuseByMissi.jpeg";
import imgFullLeggWax from "@/assets/FullLeggWax.jpeg";
import imgHydraglossLipsHydration from "@/assets/HydraglossLipsHydration.jpeg";
import imgLedLamp from "@/assets/ledlamp.jpeg";
import imgBodyTreatmentPeelingOrganicAlgae from "@/assets/body-treatment-peeling-organic-algae.jpg.asset.json";
import imgMascaraFacial from "@/assets/mascarafacial.jpeg";
import imgBackFacialExtractions from "@/assets/back-facial-extractions.jpg.asset.json";
import imgMascaraFacialTerrosa from "@/assets/mascarafacialterrosa.jpg";
import imgMassagemCostas from "@/assets/massagemcostas.jpeg";
import imgMassagemPerna from "@/assets/massagemperna.jpeg";
import imgMicroNeedlingThree from "@/assets/Micro-NeedlingFacialPackagethreeessions.jpeg";
import imgMicroAgulhasRosto from "@/assets/microagulhasrosto.jpeg";
import imgPeelingVitaminC from "@/assets/PeelingVitaminC.jpeg";
import imgTeenFacialNova from "@/assets/teenfacial-nova.jpeg";
import imgUpperLipWax from "@/assets/UpperLipWax.jpeg";
import imgeyebrown from "@/assets/eyebrown.jpeg";
import imgFaceLimpezaPontosPretos from "@/assets/facelimpezapontospretos.jpeg";
import imgDermaplaningGlow from "@/assets/dermaplaning-glow.jpg.asset.json";
import imgBarrigaMassagem from "@/assets/barrigamassagem.jpeg";
import imgBarrigaMassagem2 from "@/assets/barrigamassagem-2.jpeg";
import imgMassagemOmbro from "@/assets/massagemombro.jpeg";
import imgDepilacaoCanela from "@/assets/depilacaocanela.jpeg";

// NOVOS IMPORTS IPL (CERTIFIQUE-SE QUE ESTÃO NA PASTA)
import iplBikiniSmall from "@/assets/iplhairremovalbikiniesmallparts.jpeg";
import iplCombo from "@/assets/combosipl.png";
import iplFullLegs from "@/assets/iplhairremovalfulllegs.png";
import iplChest from "@/assets/iplhairremovalchest.png";
import iplAbdomen from "@/assets/iplhairremovalabdomen.png";
import iplFullBack from "@/assets/iplhairremovalfullback.png";
import iplHalfArms from "@/assets/iplhairremovalhalfarms.png";
import iplFullArms from "@/assets/iplhairremovalfullarm.png";
import iplUnderarm from "@/assets/iplhairremovalunderarm.png";
import iplFullFace from "@/assets/iplhairremovalfullface.png";
import iplSideburns from "@/assets/iplhairremovalsidebuns.png";
import iplUpperLips from "@/assets/ipllips.png";
import iplChinLips from "@/assets/ipllips.png";
import iplChin from "@/assets/iplhairremovalchin.png";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const categories = [
    {
      id: "facial", label: "Facial", items: [
        { title: "Skin Assessment", duration: "30 min", price: "$30.00", desc: "Discover the Perfect Treatment for Your Skin!", link: "https://www.vagaro.com/cl/iPUUoMiNTENNwaEuCGUrQ4~2n~4YQlytJUxy-2-IzOY=", image: imgDeepCleaningFacialMuseByMissi },
        { title: "Deep Cleansing Facial Mizz Missi", duration: "60 min", price: "$95.00", desc: "Experience a deep cleansing treatment that purifies.", link: "https://www.vagaro.com/cl/e3XTbPwag6j6mnd8dPjQLJq06YepsqJLq203QvXln8w=", image: imgDeepCleaningFacialMuseByMissi },
        { title: "Teen Clear Skin Facial", duration: "45 min", price: "$85.00", desc: "Deep facial cleansing for teenagers.", link: "https://www.vagaro.com/cl/rpgo8HhL65SU0FN2r~Z2f0GUxYdl5hUzkN-Mtg9xfy4=", image: imgTeenFacialNova },
        { title: "Dermaplaning Glow w/ Deep Facial Cleansing", duration: "75 min", price: "$140.00", desc: "Exfoliating outer layer of dead skin cells.", link: "https://www.vagaro.com/cl/E55Ji14rXvQK-hw2h8afLIlGOzi3igi0B24b-erf8Aw=", image: imgDermaplaningGlow.url },
        { title: "Led Lamp Therapy w/ Deep Facial Cleansing", duration: "60 min", price: "$120.00", desc: "Improves texture by minimizing enlarged pores.", link: "https://www.vagaro.com/cl/XYJd1OBP5FKtbPYpBaRgR1sjvF9qVdrTM5kPtI5t69A=", image: imgLedLamp },
        { title: "Diamond Glow Microdermabrasion w/ Deep Facial Cleansing", duration: "75 min", price: "$120.00", desc: "Refresh the skin’s surface.", link: "https://www.vagaro.com/cl/ikOUzFpTtiEFUUQC9ilx8WiUCqOwr5aOpHewu7iQbSY=", image: imgMascaraFacial },
        { title: "Acne Defense Facial Peel", duration: "45 min", price: "From $160.00", desc: "Effective solution for clearer skin.", link: "https://www.vagaro.com/cl/P~crthzreveRox1uELoecKM4Jpn0qk8nmMBOHrXMPuY=", image: imgAcneDefense },
        { title: "Melasma Treatment Facial", duration: "60 min", price: "$180.00", desc: "Control and inhibit the melasma.", link: "https://www.vagaro.com/cl/ZNzbjDdgooMXIWfgM7KobY9hZPZnXyEtHBjrkw5VTbM=", image: imgMicroAgulhasRosto },
        { title: "Jessner Clarifying Chemical Peel", duration: "30 min", price: "$140.00", desc: "Chemical Peel treatment.", link: "https://www.vagaro.com/cl/FtmQYXnQyqG8zR3-94R4eEGf4XSzDgUEhRsPb39ydKI=", image: imgMascaraFacialTerrosa },
        { title: "Advanced Age-Defying Facial", duration: "75 min", price: "$180.00", desc: "Combats signs of aging.", link: "https://www.vagaro.com/cl/mvqTfgB3RPVyqcS8omr-eSdgaEGfB0Ul5fzJsZjhWVA=", image: imgAdvancedAge },
        { title: "Collagen Induction Therapy-Microneedling", duration: "90 min", price: "From $220.00", desc: "Stimulate collagen and elastin production.", link: "https://www.vagaro.com/cl/lSVcRKYkEBhApcUdKT3ZgKPDYy0hyFO8GJNvTWSTCKA=", image: imgMicroAgulhasRosto },
        { title: "Microneedling Facial (3 Sessions)", duration: "Package", price: "$500.00", desc: "3 sessions for optimal collagen.", link: "https://www.vagaro.com/cl/fLIDgC5Tg1ab8w8CQyTJzFZvx9wg~XNsFNcxcHa8HZI=", image: imgMicroNeedlingThree },
        { title: "Seeweed Detox Peel", duration: "45 min", price: "$160.00", desc: "Detoxifying and revitalizing peel.", link: "https://www.vagaro.com/cl/v-OjtehJAYcp2wOpKGDj3ErsODoWcMBqSxnmy5-e57I=", image: imgFaceLimpezaPontosPretos },
        { title: "Vitamin C Radiance Peel", duration: "45 min", price: "$140.00", desc: "Reduces wrinkles caused by photoaging.", link: "https://www.vagaro.com/cl/~Qli9EMPlNINgfK6QFz7oft1I0PeNfcfIceq4Hyc7m0=", image: imgPeelingVitaminC },
        { title: "Hydragloss Lips Hydration", duration: "30 min", price: "$80.00", desc: "Restore hydration for lips.", link: "https://www.vagaro.com/cl/0wj6jPPcAIFXhGhxK632xzlAQaeJ8G9Rs~EMRKhUfr4=", image: imgHydraglossLipsHydration }
      ]
    },
    {
      id: "body", label: "Body", items: [
        { title: "Body Contour Brazilian", duration: "60 min", price: "$130.00", desc: "Sculpting massage.", link: "https://www.vagaro.com/cl/4Ne7167jFBjtJwZCGSpsYUdBlHS0xRJn1wWfuOM~3eI=", image: imgCintura },
        { title: "Lymphatic Drainage", duration: "60 min", price: "$120.00", desc: "Enhance lymph fluid flow.", link: "https://www.vagaro.com/cl/UOMqfMTnjKAxqDTI7Ua1luDVgJ3afHigCdUf0mdYRc4=", image: imgMassagemPerna },
        { title: "Detox & Glow Body Exfoliating", duration: "45 min", price: "$140.00", desc: "Exfoliation and wellness.", link: "https://www.vagaro.com/cl/l8LRpvk1mwduOMM7VtwLPiTkyuDW8o1rF2yc~GCiqC4=", image: imgBarrigaMassagem },
        { title: "Body Relaxing Treatment", duration: "60 min", price: "$120.00", desc: "Melt away stress and tension.", link: "https://www.vagaro.com/cl/Qm7kABTS385VLuZH9988IcJDkfXnvYeYsNJuWJQ4KKo=", image: imgMassagemCostas },
        { title: "Body Contour Detox", duration: "75 min", price: "$130.00", desc: "Combines contouring with detox.", link: "https://www.vagaro.com/cl/l8LRpvk1mwduOMM7VtwLPiTkyuDW8o1rF2yc~GCiqC4=", image: imgBarrigaMassagem2 },
        { title: "Back Facial w/ extractions", duration: "45 min", price: "$120.00", desc: "Help with ingrown skin.", link: "https://www.vagaro.com/cl/jv65AnX37CYZDba-SfyyyiHSul5qE25oVKR4szaSzMQ=", image: imgBackFacialExtractions.url },
        { title: "Body Treatment Peeling Organic Algae", duration: "60 min", price: "$120.00", desc: "Organic algae peel.", link: "https://www.vagaro.com/cl/msEWdl~4s5PuzZm4zbQgHpJ0L32KcN6Z4FPj~c2BoRs=", image: imgBodyTreatmentPeelingOrganicAlgae.url },
        { title: "Stretch Marks Treatment", duration: "60 min", price: "$480.00", desc: "Innovative Organic Peeling.", link: "https://www.vagaro.com/cl/Yntu9zt~P14280rGAZfrViuP52DiVNe4cnBsXQrqJrg=", image: imgCintura },
        { title: "Brightening Intimate Areas", duration: "45 min", price: "$140.00", desc: "Brighten intimate area.", link: "https://www.vagaro.com/cl/6q3d6i~hA0BKVLBEE~3MEMLxM2gFf1hICT~i6A06m9k=", image: imgBackBikiniBraz },
        { title: "Detox Hot Blanket", duration: "45 min", price: "$120.00", desc: "Thermal therapy.", link: "https://www.vagaro.com/cl/LHirH9Jb62Nj0vAeb36pKmgr0Qa5E3GNEdm-xxOqyR0=", image: imgMassagemOmbro }
      ]
    },
    {
      id: "waxing", label: "Waxing", items: [
        { title: "Upper Lip Wax", duration: "10 min", price: "$15.00", desc: "Hair removal.", link: "https://www.vagaro.com/cl/kumGRlgQ1m~HZddoQtr2nzU2vLe2rfsTqxbdU-RLrVQ=", image: imgUpperLipWax },
        { title: "Armpit Wax", duration: "15 min", price: "$25.00", desc: "Smooth underarms.", link: "https://www.vagaro.com/cl/Yofsa-vQACW~sSUQfISd-sBXKwRMwKJvp5m0wSfRLv8=", image: imgArmpitWax },
        { title: "Back Wax", duration: "30 min", price: "$60.00", desc: "Back hair removal.", link: "https://www.vagaro.com/cl/4rnD79K2hYOw7rXgWpzTaq88ZsYJoIyvx~qGsufalxw=", image: imgMassagemCostas },
        { title: "Bikini Wax", duration: "20 min", price: "$45.00", desc: "Bikini line removal.", link: "https://www.vagaro.com/cl/wZsc5qsEvfqQUtCuzmjbstzmHT2Y5liEAWPLFljHc7A=", image: imgBackBikiniBraz },
        { title: "Full Brazilian Wax", duration: "30 min", price: "$55.00", desc: "Complete removal.", link: "https://www.vagaro.com/cl/Jy4G6nGtpXyIY606BTCK9CUDEM0R~gbVEyQCdFPQ8yo=", image: imgBackBikiniBraz },
        { title: "Full Leg Wax", duration: "45 min", price: "$60.00", desc: "Smooth legs.", link: "https://www.vagaro.com/cl/WGKjEE6cNzrq2VASoaauHe42RGqYsVhnjyuxvS7~wvc=", image: imgFullLeggWax },
        { title: "Lower Leg Wax", duration: "30 min", price: "$40.00", desc: "Lower leg removal.", link: "https://www.vagaro.com/cl/2YasF2kK2ALm3-JcjLrJxBp~E4gmaeFoSaP6~i7EoXU=", image: imgDepilacaoCanela }
      ]
    },
    {
      id: "eyebrows", label: "Eyebrows", items: [
        { title: "Eyebrow Tweezers Shaping", duration: "20 min", price: "$45.00", desc: "Precision shaping.", link: "https://www.vagaro.com/cl/IEhyqG8PDJtOIviJOIVgF915eEWCqKvviN4Bj1mk8ZQ=", image: imgeyebrown }
      ]
    },
    {
      id: "ipl", label: "IPL Hair Removal", items: [
        { title: "IPL Hair Removal - Full Face", duration: "30 min", price: "$90.00", desc: "Advanced light technology.", link: "https://www.vagaro.com/cl/sjxVdsAvP~yWlKK5HkTKSQswVOhIVdpqlA~9pK04it4=", image: iplFullFace },
        { title: "IPL Hair Removal - Lips", duration: "15 min", price: "$40.00", desc: "Eliminate unwanted hair.", link: "https://www.vagaro.com/cl/nJnqEQLEjhFrmVWeaybIXjrw1lliM9wTHLneZ~EMq9U=", image: iplUpperLips },
        { title: "IPL Hair Removal - Chin", duration: "15 min", price: "$40.00", desc: "Targeted reduction.", link: "https://www.vagaro.com/cl/CLoym3Z0Cc0qVOgRBI995DP~ZyUOWmUD6mgILNvmDno=", image: iplChin },
        { title: "IPL Hair Removal - Lip and Chin", duration: "20 min", price: "$75.00", desc: "Combined treatment.", link: "https://www.vagaro.com/cl/9xjtaq62pkdqKVmV-~frOAWHj0-~jXt2c~IwAn170dw=", image: iplChinLips },
        { title: "IPL Hair Removal - Side-Burns", duration: "15 min", price: "$45.00", desc: "Precise method.", link: "https://www.vagaro.com/cl/lIpQCrQ6D0w~MylFUFWaLxZA1hUc4rVCeZXCYfzB8Uk=", image: iplSideburns },
        { title: "IPL Hair Removal - Underarms", duration: "20 min", price: "$55.00", desc: "Targeted laser light.", link: "https://www.vagaro.com/cl/ZJ7nec4JCwxjOUFbBAJIPLMxLH8DSqqMy4zMyb2aCxc=", image: iplUnderarm },
        { title: "IPL Hair Removal - Full Arms", duration: "45 min", price: "$100.00", desc: "Smooth and hair-free.", link: "https://www.vagaro.com/cl/gUNYn-hBCYKowJNwq~lbk1z5NDpVxjbUItgn-YmMozY=", image: iplFullArms },
        { title: "IPL Hair Removal - Half Arms", duration: "30 min", price: "$60.00", desc: "Effective follicle targeting.", link: "https://www.vagaro.com/cl/szW75wPLp7mULV~4IiZLj-NGzHUe3i1sZvDFheXnWek=", image: iplHalfArms },
        { title: "IPL Hair Removal - Full Legs", duration: "60 min", price: "$150.00", desc: "Safe and effective.", link: "https://www.vagaro.com/cl/OPpIQAqLPflAPlRvTrnU-5NvOZZMaBkIJPS5v62VODE=", image: iplFullLegs },
        { title: "IPL Hair Removal - Half Legs", duration: "45 min", price: "$100.00", desc: "Long-lasting results.", link: "https://www.vagaro.com/cl/uhYSFbXNrOIKDoc486aYBOxnAeMinl7WEuNpx7JXdAc=", image: iplFullLegs },
        { title: "IPL Hair Removal - Chest", duration: "45 min", price: "$70.00", desc: "Effectively reducing hair.", link: "https://www.vagaro.com/cl/5AAYIhtzK8oWU6MRhbrhiySGMRtlbpAhQbeqGUUazJU=", image: iplChest },
        { title: "IPL Hair Removal - Abdomen", duration: "45 min", price: "$90.00", desc: "Targeted reduction.", link: "https://www.vagaro.com/cl/sf2xpwcYeDSnybWMmp9n44CJgPABKG1-F8dKLv9LS~M=", image: iplAbdomen },
        { title: "IPL Hair Removal - Full Back", duration: "60 min", price: "$120.00", desc: "Long-lasting smoothness.", link: "https://www.vagaro.com/cl/kkOY1LYjJZpUEsU~LLWGxXKac6eT5WFh0n6IzHJ5xFk=", image: iplFullBack },
        { title: "IPL Hair Removal - Small Areas", duration: "15 min", price: "$50.00", desc: "Specific area inhibition.", link: "https://www.vagaro.com/cl/Ue3ZjJuG4JaaV0h8tLaogUFl12~Z7yf~WXwMF5GWC~Q=", image: iplBikiniSmall },
        { title: "IPL Hair Removal - Bikini", duration: "25 min", price: "$55.00", desc: "Long-lasting smoothness.", link: "https://www.vagaro.com/cl/Mnuy956iAi6Bksed3vHWg7R~gGYSAFQRUixvehzKEtA=", image: iplBikiniSmall },
        { title: "IPL Hair Removal - Full Brazilian", duration: "45 min", price: "$100.00", desc: "Uses advanced pulsed light technology for safe and effective permanent hair reduction.", link: "https://www.vagaro.com/cl/RSEhQbdbzSIeLjTEPCsRyV2chSK6cub37XjsFYDZ~ug=", image: iplBikiniSmall },
        { title: "IPL Hair Removal - Combo Underarms and Full Brazilian", duration: "60 min", price: "$150.00", desc: "Achieve lasting smoothness.", link: "https://www.vagaro.com/cl/wFevv0yz8aDtoMens2e~lI-iEMhNxX1n2uQlsJ4fzfA=", image: iplCombo }
      ]
    }
  ];

  return (
    <section className="pt-40 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center font-serif text-5xl text-gold-gradient mb-16">Services</h1>
        <div className="space-y-20">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <h2 className="text-3xl font-serif text-gold-gradient border-b border-gold/20 pb-4 mb-8">{cat.label}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((s) => (
                  <a key={s.title} href={s.link} target="_blank" rel="noopener noreferrer" className="border border-gold/15 hover:border-gold transition-all flex flex-col group bg-card/30">
                    <div className="w-full h-80 overflow-hidden shrink-0">
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full h-full object-cover object-[center_bottom] transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-serif text-foreground group-hover:text-gold transition-colors">{s.title}</h3>
                      {s.desc && <p className="text-xs text-foreground/60 mt-2 flex-grow line-clamp-3" title={s.desc}>{s.desc}</p>}
                      <div className="mt-4 pt-4 border-t border-gold/10 flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase text-gold/70">{s.duration}</span>
                          <span className="text-sm font-bold text-gold">{s.price}</span>
                        </div>
                        <span className="text-[9px] text-foreground/50 italic text-left">
                          * 24-hour cancellation policy applies.
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <GoogleReviews />
    </section>
  );
}