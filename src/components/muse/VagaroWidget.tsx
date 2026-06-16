import { useEffect, useRef } from "react";

export function VagaroWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Toda vez que o componente monta, limpamos o container para garantir que está zerado
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // 2. Criamos o script dinamicamente
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    
    // Pegamos a URL exata do seu script do Vagaro
    script.src = "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpCJGtCZGcT3qmV35y6JuPlXez3Ly6puSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gCmjZcoapOUcPCvdfQOW?v=dvkaB1OlzzcrE7hBPH92vdqwtlKbEXQ5SQnPqgkpHco#";

    // 3. Injeta o script no container
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // 4. FUNÇÃO DE LIMPEZA (CLEANUP): Quando o usuário sai da página, removemos o script do DOM
    // Isso evita que o estado interno do widget do Vagaro fique travado na memória do navegador
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
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
        
        {/* Onde o calendário vai renderizar de forma limpa */}
        <div ref={containerRef} className="w-full min-h-[600px]"></div>
        
        {/* Links de atribuição do Vagaro */}
        <div className="mt-4 text-[11px] opacity-60">
          <a href="https://www.vagaro.com/pro/">Powered by Vagaro</a>&nbsp;
          <a href="https://www.vagaro.com/pro/salon-software">Salon Software</a>,&nbsp;
          <a href="https://www.vagaro.com/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
          <a href="https://www.vagaro.com/pro/fitness-software">Fitness Software</a>
        </div>
      </div>
    </div>
  );
}