import React, {useEffect} from "react";
import Layout from "@theme-original/Layout";

const AGENT_SCRIPT_ID = "agent5ive-script";

const initAgent = () => {
  if (typeof window === "undefined") {
    return;
  }

  if (window.__agent5iveInitialized) {
    return;
  }

  if (window.AgentXChat?.init) {
    window.AgentXChat.init({
      deploymentId: "6926e113027b3de03c2f4f19",
      agentName: "MongoDB Security Basics",
      baseUrl: "https://www.agent5ive.com",
      buttonText: "Chat with MongoDB Security Basics",
      widgetThemeUrl:
        "https://pgysmrif8xfchszs.public.blob.vercel-storage.com/css/deployments/6926e113027b3de03c2f4f19/agent5ive-widget-theme-6926e113027b3de03c2f4f19.css",
      chatThemeUrl:
        "https://pgysmrif8xfchszs.public.blob.vercel-storage.com/css/deployments/6926e113027b3de03c2f4f19/agent5ive-chat-theme-6926e113027b3de03c2f4f19.css",
    });
    window.__agent5iveInitialized = true;
  } else {
    console.error("AgentXChat script failed to load.");
  }
};

const loadAgentScript = () => {
  if (typeof document === "undefined") {
    return;
  }

  if (document.getElementById(AGENT_SCRIPT_ID)) {
    initAgent();
    return;
  }

  const script = document.createElement("script");
  script.id = AGENT_SCRIPT_ID;
  script.src = "https://www.agent5ive.com/agent5ive.js";
  script.defer = true;
  script.onload = initAgent;
  script.onerror = () => console.error("AgentXChat script failed to load.");

  document.body.appendChild(script);
};

export default function LayoutWrapper(props) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleLoad = () => initAgent();

    loadAgentScript();
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <Layout {...props} />;
}
