import './App.css';

import Title, {SubTitle} from "./components/Title.jsx";
import Card, {CardButton, CardNIM, CardTitle} from "./elements/Card.jsx";
import ImageCard from "./elements/ImageCard.jsx";
import TextInput from "./elements/TextInput.jsx";
import Button1 from "./elements/Button.jsx";


function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <Title/>
                    <SubTitle/>
                    <div className='Components'>
                        <Card>
                            <ImageCard
                                src={"https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-beautiful-sea-view-in-hot-summer-image_2759007.jpg"}/>
                            <h3>Refanda Surya Saputra</h3>
                            <CardTitle>Mahasiswa</CardTitle>
                            <CardNIM>21120120120022</CardNIM>

                            <p>Universitas Diponegoro</p>
                            <CardButton>Github</CardButton>
                        </Card>
                    </div>
                    <div className='Form'>
                        <TextInput/>
                        <Button1>Cari</Button1>
                    </div>

                </header>
            </div>
        </>
    );
}


export default App;
