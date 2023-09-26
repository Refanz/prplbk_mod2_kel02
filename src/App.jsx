import "./App.css";

import Title, { SubTitle } from "./components/Title.jsx";
import TextInput from "./elements/TextInput.jsx";
import Button1 from "./elements/Button.jsx";
import CardProfile from "./components/CardProfile.jsx";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Title />
          <SubTitle />
          <div className="Components">
            <CardProfile
              src={
                "https://i0.wp.com/dianisa.com/wp-content/uploads/2022/11/4-Gambar-pemandangan-gunung-dengan-sungai.jpg?resize=1280%2C720&ssl=1"
              }
              name={"Refanda Surya Saputra"}
              email={"refandasuryasaputra@gmail.com"}
              title={"Mahasiswa"}
              nim={"21120120120022"}
              college={"Universitas Diponegoro"}
            />
            <CardProfile
              src={
                "https://i0.wp.com/dianisa.com/wp-content/uploads/2022/11/4-Gambar-pemandangan-gunung-dengan-sungai.jpg?resize=1280%2C720&ssl=1"
              }
              name={"Khasandra Nur Pristiwaning Rahayu"}
              email={"khasandranur@gmail.com"}
              title={"Mahasiswa"}
              nim={"21120120140089"}
              college={"Universitas Diponegoro"}
              g
            />
          </div>
          <div className="Form">
            <TextInput />
            <Button1>Cari</Button1>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
