import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/muse/Footer";
import { GoogleReviews } from "@/components/muse/GoogleReviews";

// ==========================================
// IMPORTS DE IMAGENS (BASEADOS NO SEU ASSETS)
// ==========================================
import imgAcneDefense from "@/assets/AcneDefense.jpeg";
import imgAdvancedAge from "@/assets/AdvancedAge.jpeg";
import imgArmpitWax from "@/assets/ArmpitWax.jpeg";
import imgBackBikiniBraz from "@/assets/BackWaxBikiniWaxFullBrazilianWax.jpeg";
import imgCintura from "@/assets/cintura.jpeg";
import imgDermaplaning from "@/assets/DermaplaningGlowWDeepfacialCleaning.jpeg";
import imgDeepCleaningFacialMuseByMissi from "@/assets/DeepCleaningFacialMuseByMissi.jpeg";
import imgFullLeggWax from "@/assets/FullLeggWax.jpeg";
import imgHydraglossLipsHydration from "@/assets/HydraglossLipsHydration.jpeg";
import imgLedLamp from "@/assets/ledlamp.jpeg";
import imgLowerLegWax from "@/assets/LowerLegWax.jpeg";
import imgMascaraFacial from "@/assets/mascarafacial.jpeg";
import imgMascaraFacialTerrosa from "@/assets/mascarafacialterrosa.jpg";
import imgMassagemCostas from "@/assets/massagemcostas.jpeg";
import imgMassagemPerna from "@/assets/massagemperna.jpeg";
import imgMicroNeedlingOne from "@/assets/Micro-needlingFacialoneession.jpeg";
import imgMicroNeedlingThree from "@/assets/Micro-NeedlingFacialPackagethreeessions.jpeg";
import imgMicroAgulhasRosto from "@/assets/microagulhasrosto.jpeg";
import imgPeelingDoroSto from "@/assets/peelingdorosto.jpeg";
import imgPeelingVitaminC from "@/assets/PeelingVitaminC.jpeg";
import imgTeenFacialNova from "@/assets/teenfacial-nova.jpeg";
import imgUpperLipWax from "@/assets/UpperLipWax.jpeg";
import imgeyebrown from "@/assets/eyebrown.jpeg";

// NOVAS IMAGENS MAPEADAS PARA DAR CONTEXTO AOS SERVIÇOS
import imgAcariciandoLabios from "@/assets/acariciandolabios.jpeg";
import imgBarrigaMassagem from "@/assets/barrigamassagem.jpeg";
import imgBarrigaMassagem2 from "@/assets/barrigamassagem-2.jpeg";
import imgDepilacaoCanela from "@/assets/depilacaocanela.jpeg";
import imgFaceLimpezaPontosPretos from "@/assets/facelimpezapontospretos.jpeg";
import imgIPLHalfLegs from "@/assets/IPLHairRemoval-HalfLegs.jpeg";
import imgLaserRostoDois from "@/assets/lasernorostodois.jpg"; 
import imgLasersNoRosto from "@/assets/lasersnorosto.jpeg";
import imgMassagemOmbro from "@/assets/massagemombro.jpeg";
import imgUtensilioRostoRaspagem from "@/assets/utensiliorostoraspagem.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  const categories = [
    {
      id: "facial", label: "Facial", items: [
        { title: "Skin Assessment", duration: "30 min", price: "$30.00", desc: "Discover the Perfect Treatment for Your Skin! Your skin is unique, and understanding its specific needs is essential for real, lasting results.", link: "https://www.vagaro.com/cl/iPUUoMiNTENNwaEuCGUrQ4~2n~4YQlytJUxy-2-IzOY=", image: imgDeepCleaningFacialMuseByMissi },
        { title: "Deep Cleansing Facial Mizz Missi", duration: "60 min", price: "$95.00", desc: "Experience a deep cleansing treatment that purifies, rejuvenates and reveals radiant, revitalized skin.", link: "https://www.vagaro.com/cl/e3XTbPwag6j6mnd8dPjQLJq06YepsqJLq203QvXln8w=", image: imgDeepCleaningFacialMuseByMissi },
        { title: "Teen Clear Skin Facial", duration: "45 min", price: "$85.00", desc: "Deep facial cleansing for teenagers focuses on extracting blackheads and impurities from the skin. Helps unclog pores and reduce acne.", link: "https://www.vagaro.com/cl/rpgo8HhL65SU0FN2r~Z2f0GUxYdl5hUzkN-Mtg9xfy4=", image: imgTeenFacialNova },
        { title: "Dermaplaning Glow w/ Deep Facial Cleansing", duration: "75 min", price: "$140.00", desc: "A procedure that involves gently exfoliating the outer layer of dead skin cells and fine vellus hair (peach fuzz) using a specialized surgical blade.", link: "https://www.vagaro.com/cl/E55Ji14rXvQK-hw2h8afLIlGOzi3igi0B24b-erf8Aw=", image: imgUtensilioRostoRaspagem },
        { title: "Led Lamp Therapy w/ Deep Facial Cleansing", duration: "60 min", price: "$120.00", desc: "Improves texture by minimizing enlarged pores and increasing smoothness. Effectively reduces acne by reducing inflammation and breakouts.", link: "https://www.vagaro.com/cl/XYJd1OBP5FKtbPYpBaRgR1sjvF9qVdrTM5kPtI5t69A=", image: imgLedLamp },
        { title: "Diamond Glow Microdermabrasion w/ Deep Facial Cleansing", duration: "75 min", price: "$120.00", desc: "A cosmetic treatment designed to refresh the skin’s surface by removing dead skin cells and imperfections using a specialized device.", link: "https://www.vagaro.com/cl/ikOUzFpTtiEFUUQC9ilx8WiUCqOwr5aOpHewu7iQbSY=", image: imgFaceLimpezaPontosPretos },
        { title: "Acne Defense Facial Peel", duration: "45 min", price: "From $160.00", desc: "An effective solution for those seeking clearer skin. It works by removing the superficial layers of the skin, promoting cell renewal.", link: "https://www.vagaro.com/cl/P~crthzreveRox1uELoecKM4Jpn0qk8nmMBOHrXMPuY=", image: imgAcneDefense },
        { title: "Melasma Treatment Facial", duration: "60 min", price: "$180.00", desc: "With the microneedling technique, we can control and inhibit the melasma, rejuvenating and improving the texture and skin tone.", link: "https://www.vagaro.com/cl/ZNzbjDdgooMXIWfgM7KobY9hZPZnXyEtHBjrkw5VTbM=", image: imgPeelingDoroSto },
        { title: "Jessner Clarifying Chemical Peel", duration: "30 min", price: "$140.00", desc: "A Chemical Peel treatment that uses a skin exfoliating solution, improving its appearance, helps treat Acne, and stimulates new cells.", link: "https://www.vagaro.com/cl/FtmQYXnQyqG8zR3-94R4eEGf4XSzDgUEhRsPb39ydKI=", image: imgMascaraFacialTerrosa },
        { title: "Advanced Age-Defying Facial", duration: "75 min", price: "$180.00", desc: "Combats signs of aging, providing younger, firmer, and more radiant skin. Uses an AHA Chemical Peel which promotes controlled exfoliation.", link: "https://www.vagaro.com/cl/mvqTfgB3RPVyqcS8omr-eSdgaEGfB0Ul5fzJsZjhWVA=", image: imgAdvancedAge },
        { title: "Collagen Induction Therapy-Microneedling", duration: "90 min", price: "From $220.00", desc: "Uses tiny needles to stimulate collagen and elastin production. Improves texture, reduces wrinkles, acne scars, enlarged pores, and dark spots.", link: "https://www.vagaro.com/cl/lSVcRKYkEBhApcUdKT3ZgKPDYy0hyFO8GJNvTWSTCKA=", image: imgMicroAgulhasRosto },
        { title: "Microneedling Facial (3 Sessions)", duration: "Package", price: "$500.00", desc: "A series of 3 sessions for optimal collagen induction results.", link: "https://www.vagaro.com/cl/fLIDgC5Tg1ab8w8CQyTJzFZvx9wg~XNsFNcxcHa8HZI=", image: imgMicroNeedlingThree },
        { title: "Seeweed Detox Peel", duration: "45 min", price: "$160.00", desc: "Detoxifying and revitalizing peel packed with marine minerals.", link: "https://www.vagaro.com/cl/v-OjtehJAYcp2wOpKGDj3ErsODoWcMBqSxnmy5-e57I=", image: imgMascaraFacial },
        { title: "Vitamin C Radiance Peel", duration: "45 min", price: "$140.00", desc: "Indicated to reduce wrinkles and expression lines caused by photoaging. Promotes deep hydration, stimulates firmness and elasticity.", link: "https://www.vagaro.com/cl/~Qli9EMPlNINgfK6QFz7oft1I0PeNfcfIceq4Hyc7m0=", image: imgPeelingVitaminC },
        { title: "Deep Cleansing Facial from Groupon", duration: "60 min", price: "Voucher", desc: "Exclusive deep cleansing facial for our Groupon customers.", link: "https://www.vagaro.com/cl/GzRVhEne577ccTjxpXBW2YPfzv9OU2mw6fMjXYCIpv0=", image: imgFaceLimpezaPontosPretos },
        { title: "Hydragloss Lips Hydration", duration: "30 min", price: "$80.00", desc: "An exclusive treatment designed to restore hydration, improve texture, and enhance the natural beauty of the lips using hyaluronic acid.", link: "https://www.vagaro.com/cl/0wj6jPPcAIFXhGhxK632xzlAQaeJ8G9Rs~EMRKhUfr4=", image: imgHydraglossLipsHydration }
      ]
    },
    {
      id: "body", label: "Body", items: [
        { title: "Body Contour Brazilian", duration: "60 min", price: "$130.00", desc: "Sculpting massage to enhance natural body contours.", link: "https://www.vagaro.com/cl/4Ne7167jFBjtJwZCGSpsYUdBlHS0xRJn1wWfuOM~3eI=", image: imgCintura },
        { title: "Lymphatic Drainage", duration: "60 min", price: "$120.00", desc: "A technique designed to enhance the flow of lymph fluid in the body, promoting detoxification and reducing swelling.", link: "https://www.vagaro.com/cl/UOMqfMTnjKAxqDTI7Ua1luDVgJ3afHigCdUf0mdYRc4=", image: imgMassagemPerna },
        { title: "Detox & Glow Body Exfoliating", duration: "45 min", price: "$140.00", desc: "A relaxing body treatment that combines exfoliation and wellness to leave your skin feeling soft, smooth, and radiant with a heated thermal blanket.", link: "https://www.vagaro.com/cl/l8LRpvk1mwduOMM7VtwLPiTkyuDW8o1rF2yc~GCiqC4=", image: imgBarrigaMassagem },
        { title: "Body Relaxing Treatment", duration: "60 min", price: "$120.00", desc: "Deeply relaxing treatment to melt away stress and tension.", link: "https://www.vagaro.com/cl/Qm7kABTS385VLuZH9988IcJDkfXnvYeYsNJuWJQ4KKo=", image: imgMassagemCostas },
        { title: "Body Contour Detox", duration: "75 min", price: "$130.00", desc: "Combines contouring techniques with detoxifying elements.", link: "https://www.vagaro.com/cl/l8LRpvk1mwduOMM7VtwLPiTkyuDW8o1rF2yc~GCiqC4=", image: imgBarrigaMassagem2 },
        { title: "Back Facial w/ extractions", duration: "45 min", price: "$120.00", desc: "Help with ingrown and acne prone skin.", link: "https://www.vagaro.com/cl/jv65AnX37CYZDba-SfyyyiHSul5qE25oVKR4szaSzMQ=", image: imgMassagemCostas },
        { title: "Body Treatment Peeling Organic Algae", duration: "60 min", price: "$120.00", desc: "Organic algae peel for body rejuvenation.", link: "https://www.vagaro.com/cl/msEWdl~4s5PuzZm4zbQgHpJ0L32KcN6Z4FPj~c2BoRs=", image: imgMascaraFacialTerrosa },
        { title: "Stretch Marks Treatment", duration: "60 min", price: "$480.00", desc: "Offers an innovative Organic Peeling technique that effectively diminishes the look of stretch marks. Includes three sessions.", link: "https://www.vagaro.com/cl/Yntu9zt~P14280rGAZfrViuP52DiVNe4cnBsXQrqJrg=", image: imgCintura },
        { title: "Brightening Intimate Areas", duration: "45 min", price: "$140.00", desc: "A highly effective and safe service that uses organic peels to gently brighten and rejuvenate the intimate area.", link: "https://www.vagaro.com/cl/6q3d6i~hA0BKVLBEE~3MEMLxM2gFf1hICT~i6A06m9k=", image: imgBackBikiniBraz },
        { title: "Detox Hot Blanket", duration: "45 min", price: "$120.00", desc: "Thermal therapy to sweat out toxins and relax muscles.", link: "https://www.vagaro.com/cl/LHirH9Jb62Nj0vAeb36pKmgr0Qa5E3GNEdm-xxOqyR0=", image: imgMassagemOmbro }
      ]
    },
    {
      id: "waxing", label: "Waxing", items: [
        { title: "Upper Lip Wax", duration: "10 min", price: "$15.00", desc: "Quick and effective hair removal for the upper lip.", link: "https://www.vagaro.com/cl/kumGRlgQ1m~HZddoQtr2nzU2vLe2rfsTqxbdU-RLrVQ=", image: imgUpperLipWax },
        { title: "Armpit Wax", duration: "15 min", price: "$25.00", desc: "Smooth underarms lasting for weeks.", link: "https://www.vagaro.com/cl/Yofsa-vQACW~sSUQfISd-sBXKwRMwKJvp5m0wSfRLv8=", image: imgArmpitWax },
        { title: "Back Wax", duration: "30 min", price: "$60.00", desc: "Complete back hair removal for a smooth finish.", link: "https://www.vagaro.com/cl/4rnD79K2hYOw7rXgWpzTaq88ZsYJoIyvx~qGsufalxw=", image: imgMassagemCostas },
        { title: "Bikini Wax", duration: "20 min", price: "$45.00", desc: "Classic bikini line hair removal.", link: "https://www.vagaro.com/cl/wZsc5qsEvfqQUtCuzmjbstzmHT2Y5liEAWPLFljHc7A=", image: imgBackBikiniBraz },
        { title: "Full Brazilian Wax", duration: "30 min", price: "$55.00", desc: "Complete front to back hair removal.", link: "https://www.vagaro.com/cl/Jy4G6nGtpXyIY606BTCK9CUDEM0R~gbVEyQCdFPQ8yo=", image: imgBackBikiniBraz },
        { title: "Full Leg Wax", duration: "45 min", price: "$60.00", desc: "Smooth and hair-free legs from thigh to ankle.", link: "https://www.vagaro.com/cl/WGKjEE6cNzrq2VASoaauHe42RGqYsVhnjyuxvS7~wvc=", image: imgFullLeggWax },
        { title: "Lower Leg Wax", duration: "30 min", price: "$40.00", desc: "Hair removal for the lower legs.", link: "https://www.vagaro.com/cl/2YasF2kK2ALm3-JcjLrJxBp~E4gmaeFoSaP6~i7EoXU=", image: imgDepilacaoCanela }
      ]
    },
    {
      id: "eyebrows", label: "Eyebrows", items: [
        { title: "Eyebrow Tweezers Shaping", duration: "20 min", price: "$45.00", desc: "Precision eyebrow shaping using tweezers.", link: "https://www.vagaro.com/cl/IEhyqG8PDJtOIviJOIVgF915eEWCqKvviN4Bj1mk8ZQ=", image: imgeyebrown }
      ]
    },
    {
      id: "lashes", label: "Lashes", items: [
        { title: "EyeLashes Extension Classic", duration: "120 min", price: "$150.00", desc: "A beautiful, natural enhancement with classic extensions.", link: "https://www.vagaro.com/cl/xcPfkdzyxRXr0lqYWJyGlYs0o9i-fBs-L0A45McNto4=", image: imgeyebrown },
        { title: "EyeLashes Extension Fills - Classic - 3 week", duration: "60 min", price: "$75.00", desc: "Maintenance fill for your classic set.", link: "https://www.vagaro.com/cl/cCm1tx~5GDgjxaAGVjnbCgrYm12Z~54nv4yUDzY6gbg=", image: imgeyebrown },
        { title: "EyeLashes Extension Brazilian", duration: "150 min", price: "$180.00", desc: "Voluminous and glamorous Brazilian style extensions.", link: "https://www.vagaro.com/cl/Y4NtX43cVNd2OR0Zy9P8DnZh9vic2xSpPhHyPapgZlQ=", image: imgeyebrown },
        { title: "EyeLashes Extension - Fills - Brazilian", duration: "75 min", price: "$90.00", desc: "Maintenance fill for your Brazilian set.", link: "https://www.vagaro.com/cl/O3US4MV-wHdtvy78roVfvQlutzvVZ-B85fHm6rCqFKs=", image: imgeyebrown },
        { title: "EyeLashes Extension Hybrid", duration: "135 min", price: "$165.00", desc: "The perfect mix of classic and volume lashes.", link: "https://www.vagaro.com/cl/-Bp3FcA-10AkQxO1uEAiiDr24UKs6IA1eOCV8JRVW6g=", image: imgeyebrown },
        { title: "EyeLashes Extension - Fills - Hybrid", duration: "75 min", price: "$85.00", desc: "Maintenance fill for your hybrid set.", link: "https://www.vagaro.com/cl/sdIJIzEWwq4HwOI5DUJv4Cjto1zCLCET6j~LXmGMm5E=", image: imgeyebrown }
      ]
    },
    {
      id: "ipl", label: "IPL Hair Removal", items: [
        { title: "IPL Hair Removal - Full Face", duration: "30 min", price: "$90.00", desc: "Utilizes advanced Intense Pulsed Light technology to effectively target and eliminate unwanted hair, resulting in smoother skin.", link: "https://www.vagaro.com/cl/sjxVdsAvP~yWlKK5HkTKSQswVOhIVdpqlA~9pK04it4=", image: imgLasersNoRosto },
        { title: "IPL Hair Removal - Lips", duration: "15 min", price: "$40.00", desc: "An effective solution to eliminate unwanted hair using intense pulsed light technology, ensuring smooth skin.", link: "https://www.vagaro.com/cl/nJnqEQLEjhFrmVWeaybIXjrw1lliM9wTHLneZ~EMq9U=", image: imgAcariciandoLabios },
        { title: "IPL Hair Removal - Chin", duration: "15 min", price: "$40.00", desc: "Uses intense pulsed light to target hair follicles, effectively reducing unwanted hair growth with minimal discomfort.", link: "https://www.vagaro.com/cl/CLoym3Z0Cc0qVOgRBI995DP~ZyUOWmUD6mgILNvmDno=", image: imgLaserRostoDois },
        { title: "IPL Hair Removal - Lip and Chin", duration: "20 min", price: "$75.00", desc: "Uses intense pulsed light to effectively reduce unwanted hair by targeting and damaging hair follicles.", link: "https://www.vagaro.com/cl/9xjtaq62pkdqKVmV-~frOAWHj0-~jXt2c~IwAn170dw=", image: imgLaserRostoDois },
        { title: "IPL Hair Removal - Side-Burns", duration: "15 min", price: "$45.00", desc: "A precise and effective method to eliminate unwanted hair using intense pulsed light technology.", link: "https://www.vagaro.com/cl/lIpQCrQ6D0w~MylFUFWaLxZA1hUc4rVCeZXCYfzB8Uk=", image: imgLasersNoRosto },
        { title: "IPL Hair Removal - Underarms", duration: "20 min", price: "$55.00", desc: "A medical procedure that uses a laser—an intense, pulsating beam of light—to remove unwanted hair by damaging the follicle.", link: "https://www.vagaro.com/cl/ZJ7nec4JCwxjOUFbBAJIPLMxLH8DSqqMy4zMyb2aCxc=", image: imgArmpitWax },
        { title: "IPL Hair Removal - Full Arms", duration: "45 min", price: "$100.00", desc: "Utilizes intense pulsed light to effectively target and reduce unwanted hair growth, ensuring smooth and hair-free skin.", link: "https://www.vagaro.com/cl/gUNYn-hBCYKowJNwq~lbk1z5NDpVxjbUItgn-YmMozY=", image: imgMassagemOmbro },
        { title: "IPL Hair Removal - Half Arms", duration: "30 min", price: "$60.00", desc: "Uses intense pulsed light technology to target and disable hair follicles, preventing future growth.", link: "https://www.vagaro.com/cl/szW75wPLp7mULV~4IiZLj-NGzHUe3i1sZvDFheXnWek=", image: imgMassagemOmbro },
        { title: "IPL Hair Removal - Full Legs", duration: "60 min", price: "$150.00", desc: "Provides a safe, effective solution to permanently reduce unwanted hair using intense pulsed light technology.", link: "https://www.vagaro.com/cl/OPpIQAqLPflAPlRvTrnU-5NvOZZMaBkIJPS5v62VODE=", image: imgIPLHalfLegs },
        { title: "IPL Hair Removal - Half Legs", duration: "45 min", price: "$100.00", desc: "Uses advanced light technology to target hair follicles, effectively reducing unwanted hair growth for long-lasting smoothness.", link: "https://www.vagaro.com/cl/uhYSFbXNrOIKDoc486aYBOxnAeMinl7WEuNpx7JXdAc=", image: imgIPLHalfLegs },
        { title: "IPL Hair Removal - Chest", duration: "45 min", price: "$70.00", desc: "Uses intense pulsed light to target and damage hair follicles, effectively reducing unwanted hair growth.", link: "https://www.vagaro.com/cl/5AAYIhtzK8oWU6MRhbrhiySGMRtlbpAhQbeqGUUazJU=", image: imgBarrigaMassagem },
        { title: "IPL Hair Removal - Abdomen", duration: "45 min", price: "$90.00", desc: "Uses intense pulsed light to target and disable hair follicles, effectively reducing unwanted hair growth.", link: "https://www.vagaro.com/cl/sf2xpwcYeDSnybWMmp9n44CJgPABKG1-F8dKLv9LS~M=", image: imgBarrigaMassagem2 },
        { title: "IPL Hair Removal - Full Back", duration: "60 min", price: "$120.00", desc: "Uses intense pulsed light to target and eliminate unwanted hair, providing long-lasting smoothness.", link: "https://www.vagaro.com/cl/kkOY1LYjJZpUEsU~LLWGxXKac6eT5WFh0n6IzHJ5xFk=", image: imgMassagemCostas },
        { title: "IPL Hair Removal - Small Areas", duration: "15 min", price: "$50.00", desc: "Uses intense light to target hair follicles, reducing and inhibiting future hair growth in specific areas.", link: "https://www.vagaro.com/cl/Ue3ZjJuG4JaaV0h8tLaogUFl12~Z7yf~WXwMF5GWC~Q=", image: imgLaserRostoDois },
        { title: "IPL Hair Removal - Bikini", duration: "25 min", price: "$55.00", desc: "Effectively targets and reduces unwanted hair using intense pulsed light technology for long-lasting smoothness.", link: "https://www.vagaro.com/cl/Mnuy956iAi6Bksed3vHWg7R~gGYSAFQRUixvehzKEtA=", image: imgBackBikiniBraz },
        { title: "IPL Hair Removal - Full Brazilian", duration: "45 min", price: "$100.00", desc: "Uses advanced pulsed light technology for safe and effective permanent hair reduction.", link: "https://www.vagaro.com/cl/RSEhQbdbzSIeLjTEPCsRyV2chSK6cub37XjsFYDZ~ug=", image: imgBackBikiniBraz },
        { title: "IPL Hair Removal - Combo Underarms and Full Brazilian", duration: "60 min", price: "$150.00", desc: "Achieve lasting smoothness with our IPL Hair Removal service for underarms and full Brazilian.", link: "https://www.vagaro.com/cl/wFevv0yz8aDtoMens2e~lI-iEMhNxX1n2uQlsJ4fzfA=", image: imgBackBikiniBraz }
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
                    <div className="w-full h-80 overflow-hidden">
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full h-full object-cover object-[center_bottom] transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-serif text-foreground group-hover:text-gold transition-colors">{s.title}</h3>
                      {s.desc && <p className="text-xs text-foreground/60 mt-2 flex-grow line-clamp-3" title={s.desc}>{s.desc}</p>}
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-gold/10">
                        <span className="text-[10px] uppercase text-gold/70">{s.duration}</span>
                        <span className="text-sm font-bold text-gold">{s.price}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <p className="mt-6 text-[10px] text-foreground/50 italic">* Cancellation Policy: Please provide 24 hours notice for any cancellations.</p>
            </div>
          ))}
        </div>
      </div>
      <GoogleReviews />
    </section>
  );
}