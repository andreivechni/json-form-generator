import React, { useState } from "react";
import Tabs, { Tab } from "./Components/Tabs";
import Demo from "./Components/Demo";
import Configurator from "./Components/Configurator/Configurator";
import Layout from "./Components/Layout";
import "./Styles/App.scss";
import { Config } from "./Types";

function App() {
  const [config, setConfig] = useState<Config>();

  return (
    <Layout>
      <div className="container">
        <Tabs>
          <Tab label="Configure">
            <Configurator config={config} setConfig={setConfig}></Configurator>
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
