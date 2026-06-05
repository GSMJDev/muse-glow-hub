import { useEffect, useRef } from "react";

export function VagaroWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Evita que o React injete o script duas vezes no modo de desenvolvimento
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpCJGtCZGcT3qmV35y6JuPlXez3Ly6puSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gCmjZcoapOUcPCvdfQOW?v=dvkaB1OlzzcrE7hBPH92vdqwtlKbEXQ5SQnPqgkpHco#";
      
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* CONTAINER DO VAGARO */}
      <div 
        className="vagaro w-full max-w-4xl" 
        style={{
          padding: 0, 
          border: 0, 
          margin: '0 auto', 
          textAlign: 'center'
        }}
      >
        <style>{`.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}`}</style>
        
        {/* AQUI É ONDE O CALENDÁRIO VAI RENDERIZAR SEM O RODAPÉ PRETO */}
        <div ref={containerRef} className="w-full"></div>
        
        {/* LINKS EXATOS DO SEU CÓDIGO */}
        <div className="mt-4 text-[11px]">
          <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
          <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
          <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
          <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
        </div>
      </div>
    </div>
  );
}