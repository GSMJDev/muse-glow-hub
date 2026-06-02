import { useRef, useEffect } from "react";
import { SectionLabel } from "@/components/muse/Footer";

const reviews = [
  {
    name: "Luiza Abdala",
    date: "2 years ago",
    text: "The best ever !!! Highly recommend Fernanda and her team ❣️",
  },
  {
    name: "Cilla Souza",
    date: "5 months ago",
    text: "I don't have words to describe how amazing Fernanda is. She is very experienced, gave me all the details and everything I needed to know to make the most of the lymphatic massage. She is gentle and very professional.",
  },
  {
    name: "Trish Kehoe",
    date: "8 months ago",
    text: "Saw this on Groupon and thought why not?! So glad I did. The environment is so peaceful. Fernanda was amazing and I enjoyed a very relaxing facial and a gentle foot massage as a bonus.",
  },
  {
    name: "Michelle Sheperd",
    date: "a year ago",
    text: "The best place in the Worcester area for a relaxing facial. Fernanda is extremely experienced and professional. I just had my first microneedling session and she explained everything to me.",
  },
  {
    name: "Alison Whitehouse",
    date: "4 months ago",
    text: "Very satisfied! I've had many facials over the years and this one was amazing. Highly recommend.",
  },
  {
    name: "Amy Hloska",
    date: "a year ago",
    text: "I recently had a microneedling treatment at Mizz Missi and it was life-changing! I was a little nervous at first, but the aesthetician, Fernanda, was super chill and explained everything to me.",
  },
  {
    name: "Dayanna Lopes",
    date: "a year ago",
    text: "I've been going to this spa for a few years and I only have compliments! The beauty treatments are amazing, with visible results from the first sessions. The environment is super welcoming and relaxing. I highly recommend it!",
  },
  {
    name: "Faith Marie Meaney",
    date: "2 years ago",
    text: "I haven't had a facial in 2 years. Left with clean pores and my skin looks and feels great. Will definitely be returning. I actually fell asleep 4 times it was so relaxing. 100% worth it!",
  },
  {
    name: "Joanna DeLorey",
    date: "2 years ago",
    text: "Wow! Outstanding facial! My face felt so clean. I’ve had facials at high end luxury spas and Miss Missi did not miss a beat with service. She is customer focused and dedicated to delivering high quality results!",
  },
  {
    name: "Amanda Medina",
    date: "2 years ago",
    text: "I felt so relaxed during the facial! The back and foot massage was a pleasant surprise! My face looks so fresh, clean, and radiant. Can't wait for the next session!",
  },
  {
    name: "Cida Vieira",
    date: "2 years ago",
    text: "Great as always!!! I recommend Fernanda to take care of you. She has been taking care of me for 2 years and I am very happy with my treatments. Believe me... SHE IS THE BEST!!!",
  },
  {
    name: "Dalila Ferreira",
    date: "a year ago",
    text: "Excellent service! The aesthetician is very attentive to details, kind and makes me feel comfortable and welcome. Highly recommend Mizz Missi clinic!",
  },
  {
    name: "Josiely Barbosa",
    date: "a year ago",
    text: "Fernanda and her team are great, very professional, flexible and very kind. I am very satisfied. I loved the experience and highly recommend the spa.",
  },
  {
    name: "Danielle Murphy",
    date: "2 years ago",
    text: "Great facial! She is really customer-focused, uses great products and gives an amazing facial. Will definitely recommend to all my friends and will definitely be back.",
  },
  {
    name: "Elizabeth Torres",
    date: "2 years ago",
    text: "It was a very relaxing and calming experience. The facial left me feeling ready to take on the world. Thank you so much. Highly recommend! Great atmosphere!",
  },
  {
    name: "Luz Rodriguez",
    date: "a year ago",
    text: "Wow! Excellent, will definitely be back. Fernanda, it was a great experience.",
  },
  {
    name: "maria ciavola",
    date: "2 years ago",
    text: "Wonderful and relaxing facial. My skin looked amazing afterwards. Will definitely be back!",
  },
  {
    name: "Lee Souza",
    date: "2 years ago",
    text: "She is very friendly. Did a great job on my eyebrows. :)",
  },
  {
    name: "Gabriely Sa",
    date: "2 years ago",
    text: "Highly recommend! Fernanda is very attentive and an excellent professional.",
  },
  {
    name: "Gentjana Grabocka",
    date: "a year ago",
    text: "The facials are always the best! Thank you so much.",
  },
  {
    name: "Amanda Rodrigues",
    date: "a year ago",
    text: "Amazing place for skin care.",
  },
  {
    name: "Best and Beyond Spa",
    date: "a year ago",
    text: "The best place to go in the Worcester area.",
  }
];

export function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lógica do Auto-Play (Roda sozinho a cada 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Se chegou no final, volta pro começo suavemente. Se não, avança um card.
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        }
      }
    }, 5000); // 5000 ms = 5 segundos

    return () => clearInterval(interval); // Limpa o timer se sair da página
  }, []);

  // Lógica dos Botões (Setinhas)
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white px-6 border-t border-gold/10">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>CLIENT EXPERIENCES</SectionLabel>
          <div className="mt-6 flex flex-col items-center justify-center">
            {/* Logo do Google */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-serif text-3xl md:text-4xl text-[#631F37]">Excellent</span>
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            
            <div className="flex items-center gap-1">
              <span className="font-bold text-gray-800 text-lg mr-1">5.0</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FBBC05] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <a 
              href="https://www.google.com/search?q=Mizz+Missi+Aesthetics" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:underline mt-1"
            >
              Based on 70+ reviews
            </a>
          </div>
        </div>

        {/* CONTAINER DO CARROSSEL COM SETAS */}
        <div className="relative group">
          
          {/* Seta Esquerda */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-6 z-10 bg-white/90 backdrop-blur-sm border border-gold/20 shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gold hover:text-[#631F37] hover:border-[#631F37] hover:scale-105 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Previous review"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, i) => (
              <div 
                key={i} 
                className="min-w-[300px] md:min-w-[350px] bg-[#FCFAF8] border border-gray-200 rounded-lg p-6 shadow-sm snap-center flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                  <div className="ml-auto">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FBBC05] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow line-clamp-6">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Seta Direita */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-6 z-10 bg-white/90 backdrop-blur-sm border border-gold/20 shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-gold hover:text-[#631F37] hover:border-[#631F37] hover:scale-105 transition-all opacity-0 group-hover:opacity-100 hidden sm:flex"
            aria-label="Next review"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}