"use client";

import React, { useEffect, useRef, useState } from "react";

const HelloAssoShop = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(600); // Hauteur par défaut

  const resizeIframe = () => {
    if (iframeRef.current) {
      try {
        // Tentative d'accès au contenu de l'iframe (peut échouer à cause de CORS)
        const iframeContent =
          iframeRef.current.contentDocument ||
          iframeRef.current.contentWindow?.document;

        if (iframeContent) {
          const contentHeight = Math.max(
            iframeContent.body.scrollHeight,
            iframeContent.body.offsetHeight,
            iframeContent.documentElement.scrollHeight,
            iframeContent.documentElement.offsetHeight,
          );
          setIframeHeight(contentHeight);
        }
      } catch (error) {
        console.warn("Impossible d'accéder au contenu de l'iframe:", error);
        // Fallback : utiliser postMessage si disponible
      }
    }
  };

  useEffect(() => {
    // Écouteur pour les messages provenant de l'iframe (alternative recommandée)
    const handleMessage = (event: MessageEvent) => {
      // Vérifier l'origine pour la sécurité
      if (event.origin !== "https://www.helloasso.com") return;

      if (event.data && typeof event.data.height === "number") {
        setIframeHeight(event.data.height);
      }
    };

    // Écouteur pour le redimensionnement de la fenêtre
    const handleResize = () => {
      // Délai pour laisser le contenu se réorganiser
      setTimeout(resizeIframe, 100);
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        // allowtransparency={true}
        src="https://www.helloasso.com/associations/massilia-barbell-club/boutiques/marseille-throwdown-2026/widget"
        style={{
          width: "100%",
          height: `${iframeHeight}px`,
          border: "none",
          overflow: "hidden",
          background: "transparent",
        }}
        onLoad={() => {
          // Plusieurs tentatives de redimensionnement avec des délais différents
          setTimeout(() => resizeIframe(), 1000);
          setTimeout(() => resizeIframe(), 3000);
          setTimeout(() => resizeIframe(), 5000);
        }}
        title="HelloAsso Shop"
      />
    </div>
  );
};

export default HelloAssoShop;
