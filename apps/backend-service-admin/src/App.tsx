import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeesList } from "./employees/EmployeesList";
import { EmployeesCreate } from "./employees/EmployeesCreate";
import { EmployeesEdit } from "./employees/EmployeesEdit";
import { EmployeesShow } from "./employees/EmployeesShow";
import { StoresList } from "./stores/StoresList";
import { StoresCreate } from "./stores/StoresCreate";
import { StoresEdit } from "./stores/StoresEdit";
import { StoresShow } from "./stores/StoresShow";
import { CustomersList } from "./customers/CustomersList";
import { CustomersCreate } from "./customers/CustomersCreate";
import { CustomersEdit } from "./customers/CustomersEdit";
import { CustomersShow } from "./customers/CustomersShow";
import { AppointmentsList } from "./appointments/AppointmentsList";
import { AppointmentsCreate } from "./appointments/AppointmentsCreate";
import { AppointmentsEdit } from "./appointments/AppointmentsEdit";
import { AppointmentsShow } from "./appointments/AppointmentsShow";
import { ServicesList } from "./services/ServicesList";
import { ServicesCreate } from "./services/ServicesCreate";
import { ServicesEdit } from "./services/ServicesEdit";
import { ServicesShow } from "./services/ServicesShow";
import { PaymentsList } from "./payments/PaymentsList";
import { PaymentsCreate } from "./payments/PaymentsCreate";
import { PaymentsEdit } from "./payments/PaymentsEdit";
import { PaymentsShow } from "./payments/PaymentsShow";
import { ReviewsList } from "./reviews/ReviewsList";
import { ReviewsCreate } from "./reviews/ReviewsCreate";
import { ReviewsEdit } from "./reviews/ReviewsEdit";
import { ReviewsShow } from "./reviews/ReviewsShow";
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
        title={"BackendService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employees"
          list={EmployeesList}
          edit={EmployeesEdit}
          create={EmployeesCreate}
          show={EmployeesShow}
        />
        <Resource
          name="Stores"
          list={StoresList}
          edit={StoresEdit}
          create={StoresCreate}
          show={StoresShow}
        />
        <Resource
          name="Customers"
          list={CustomersList}
          edit={CustomersEdit}
          create={CustomersCreate}
          show={CustomersShow}
        />
        <Resource
          name="Appointments"
          list={AppointmentsList}
          edit={AppointmentsEdit}
          create={AppointmentsCreate}
          show={AppointmentsShow}
        />
        <Resource
          name="Services"
          list={ServicesList}
          edit={ServicesEdit}
          create={ServicesCreate}
          show={ServicesShow}
        />
        <Resource
          name="Payments"
          list={PaymentsList}
          edit={PaymentsEdit}
          create={PaymentsCreate}
          show={PaymentsShow}
        />
        <Resource
          name="Reviews"
          list={ReviewsList}
          edit={ReviewsEdit}
          create={ReviewsCreate}
          show={ReviewsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
