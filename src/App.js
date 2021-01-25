import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
    <div className="app">
      <Header />
      <Layout>
        <Sidebar />
        <Main />
      </Layout>
      
      
    </div>
  );
}

export default App;
