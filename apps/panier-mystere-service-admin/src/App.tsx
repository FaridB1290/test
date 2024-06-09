import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { CommandeList } from "./commande/CommandeList";
import { CommandeCreate } from "./commande/CommandeCreate";
import { CommandeEdit } from "./commande/CommandeEdit";
import { CommandeShow } from "./commande/CommandeShow";
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
        title={"PanierMystereService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Commande"
          list={CommandeList}
          edit={CommandeEdit}
          create={CommandeCreate}
          show={CommandeShow}
        />
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
