import { useEffect, useRef } from "react";

export function VagaroWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Garante que o script só seja injetado uma vez
    if (containerRef.current && containerRef.current.children.length === 0) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      // O link exato do seu código:
      script.src = "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpCJGtCZGcT3qmV35y6JuPlXez3Ly6puSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gCmjZcoapOUcPCvdfQOW?v=dvkaB1OlzzcrE7hBPH92vdqwtlKbEXQ5SQnPqgkpHco#";
      
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* TÍTULO EXATO DO SEU CÓDIGO */}
      <div 
        id="frameTitle" 
        className="embedded-widget-title" 
        style={{
          fontSize: '23px', 
          color: '#333',
          fontFamily: 'Arial, Helvetica, sans-serif', 
          lineHeight: '24px', 
          padding: '18px 10px 8px', 
          textAlign: 'center', 
          boxSizing: 'border-box'
        }}
      >
        Book Now
      </div>

      {/* CONTAINER EXATO DO SEU CÓDIGO */}
      <div 
        className="vagaro" 
        style={{
          width: '250px', 
          padding: 0, 
          border: 0, 
          margin: '0 auto', 
          textAlign: 'center'
        }}
      >
        <style>{`.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}`}</style>
        
        {/* AQUI É ONDE O CALENDÁRIO VAI RENDERIZAR */}
        <div ref={containerRef}></div>
        
        {/* LINKS EXATOS DO SEU CÓDIGO */}
        <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
        <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
        <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
        <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
      </div>
    </div>
  );
}