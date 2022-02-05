import "./style.css";
import { createEndpoint, fromIframe } from "@remote-ui/rpc";

const iframe = document.createElement("iframe");
iframe.setAttribute("src", "/iframe.html");
const app = document.querySelector("#app");
app && app.appendChild(iframe);

const messenger = fromIframe(iframe);
const endpoint = createEndpoint<HostApi>(messenger);

export interface HostApi {
  sayHello: () => void;
}

endpoint.expose({
  sayHello() {
    console.log("Hello World!");
  },
});
