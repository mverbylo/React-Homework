import './App.css';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <>
      <Header />
      <Section />
      <footer
        className="footer"
        children={<p>Copywright 2020 Bella Onojie.com</p>}
      />
    </>
  );
}

export default App;
