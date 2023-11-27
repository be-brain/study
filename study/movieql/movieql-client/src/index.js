import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import client from "./client";
import { ApolloProvider } from "@apollo/client";
import { StyleSheetManager } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* ApolloProvider : 어떤 컴포넌트이던 client에 접근가능하게 해준다 */}
        <ApolloProvider client={client}>
            <StyleSheetManager shouldForwardProp={() => true}>
                <App />
            </StyleSheetManager>
        </ApolloProvider>
    </React.StrictMode>
);
