import "./style.css";
import { createEndpoint, fromIframe } from "@remote-ui/rpc";

const iframe = document.createElement("iframe");
iframe.setAttribute("src", "/iframe.html");
iframe.setAttribute("style", "display: none;");
const app = document.querySelector("#app");
app?.appendChild(iframe);

const messenger = fromIframe(iframe);
const endpoint = createEndpoint<HostApi>(messenger);

export interface HostApi {
  say: (message: string) => void;
}

endpoint.expose({
  say(message) {
    const p = document.createElement("p");
    p.innerText = message;
    app?.appendChild(p);
  },
});
