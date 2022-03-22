
import "./App.css";
import Layout from "./layout";
function App() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.active);
    });
  };
  return <div className="root">
    <Layout />
  </div>;

}

export default App;