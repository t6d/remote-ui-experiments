import "./style.css";
import { createEndpoint, fromInsideIframe } from "@remote-ui/rpc";
import type { HostApi } from "./host";

const messenger = fromInsideIframe();
const endpoint = createEndpoint<HostApi>(messenger);
endpoint.call.say("Hello from withing the iframe");
