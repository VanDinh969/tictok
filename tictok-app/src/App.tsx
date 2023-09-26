import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/following" element={<Following />} /> */}
        {publicRoutes.map((route, index) => {
          const Page = route.element;
          const Layout = route.layout ? route.layout : DefaultLayout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
