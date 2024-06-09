import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PanierMystereList } from "./panierMystere/PanierMystereList";
import { PanierMystereCreate } from "./panierMystere/PanierMystereCreate";
import { PanierMystereEdit } from "./panierMystere/PanierMystereEdit";
import { PanierMystereShow } from "./panierMystere/PanierMystereShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Cart"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PanierMystere"
          list={PanierMystereList}
          edit={PanierMystereEdit}
          create={PanierMystereCreate}
          show={PanierMystereShow}
        />
      </Admin>
    </div>
  );
};

export default App;
