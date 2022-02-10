import React, { useState } from "react";
import Tabs, { Tab } from "./Components/Tabs";
import Demo from "./Components/Demo";
import Configurator from "./Components/Configurator/Configurator";
import Layout from "./Components/Layout";
import "./Styles/App.scss";
import { Config } from "./Types";

// const mock = {
//   header: "Sample Form",
//   fields: [
//     {
//       name: "count",
//       label: "count",
//       type: "number",
//     },
//     {
//       name: "radio",
//       label: "radio option 1",
//       type: "radio",
//     },
//     {
//       name: "radio",
//       label: "radio option 2",
//       type: "radio",
//     },
//     {
//       name: "radio",
//       label: "radio option 3",
//       type: "radio",
//       checked: true,
//     },
//     {
//       name: "checkbox",
//       label: "is editable",
//       type: "checkbox",
//       checked: true,
//     },
//     {
//       name: "caption",
//       label: "caption",
//       type: "text",
//     },
//     {
//       name: "description",
//       label: "description",
//       type: "textarea",
//     },
//   ],
//   controls: [{ text: "Cancel" }, { text: "Apply" }],
// };

function App() {
  const [config, setConfig] = useState<Config>();

  return (
    <Layout>
      <div className="container">
        <Tabs>
          <Tab label="Configure">
            <Configurator setConfig={setConfig}></Configurator>
          </Tab>

          <Tab label="Result">
            {config ? (
              <Demo config={config}></Demo>
            ) : (
              <p>You have to enter config first!</p>
            )}
          </Tab>
        </Tabs>
      </div>
    </Layout>
  );
}

export default App;
