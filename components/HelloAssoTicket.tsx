"use client";

import React, { useEffect, useRef, useState } from "react";

const HelloAssoTicket = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(750); // Hauteur par défaut

  useEffect(() => {
    // Écouteur pour les messages provenant de l'iframe HelloAsso (postMessage)
    const handleMessage = (event: MessageEvent) => {
      // Vérifier l'origine pour la sécurité
      if (event.origin !== "https://www.helloasso.com") return;

      if (event.data && typeof event.data.height === "number") {
        setIframeHeight((prev) => Math.max(prev, event.data.height));
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-full">
      <iframe
        ref={iframeRef}
        id="haWidget"
        scrolling="auto"
        src="https://www.helloasso.com/associations/massilia-barbell-club/evenements/marseille-throwdown-2026/widget"
        style={{
          width: "100%",
          height: `${iframeHeight}px`,
          border: "none",
        }}
        title="HelloAsso - Marseille Throwdown 2026"
      />
    </div>
  );
};

export default HelloAssoTicket;
