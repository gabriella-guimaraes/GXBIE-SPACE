import './Home.css';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
// import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';

function Home() {

    // const history = useHistory();

    // const aboutRoute = (event) => {
    //     event.preventDefault();
    //     history.push("/about");
    // }

    // const artworksRout = (event) => {
    //     event.preventDefault();
    //     history.push("/design");
    // }

    // const editsRoute = (event) => {
    //     event.preventDefault();
    //     history.push("/edits");
    // }

    return(
        <div className="home">
            <Menu />
            {/* <h1>Home page</h1> */}
            <section className="headerImg">
                <div className="intro">
                    <h1 id="introTitle">Bem-vindo(a)!</h1>
                    <p id="introText"><i>GXBIE SPACE</i> é um blog criado para treinos e estudos Front-End. Você pode
                    acessar o repositório dessa página clicando neste <a href="https://github.com/gabriella-guimaraes/GXBIE-SPACE" target="blank">link</a></p>
                </div>
            </section>
            {/* <section className="feed">
                <h1>Posts</h1>
                <div className="posts" onClick={(event) => aboutRoute(event)}>
                    <h1 className="post-tittle">Conheça a dev!</h1>
                    <section className="post-content">
                        <p className="post-text">Estudante de Desenvolvimento Front-End na Laboratória. Busco trazer um olhar criativo para desenvolver 
                        soluções tecnológicas, designs e edições. Sou uma pessoa curiosa, proativa e que ama aprender coisas novas. Acredito que a vida
                        é um constante processo de aprendizagem.</p>
                        <img src="../images/20210122_141338edited.jpg" alt="developer selfie" className="profileImg" />
                    </section>
                </div>
                <div className="posts" onClick={(event) => artworksRout(event)}>
                    <h1>Artworks</h1>
                    <p>Coleção de desenhos e concept arts</p>
                </div>
                <div className="posts" onClick={(event) => editsRoute(event)}>
                    <h1>Adobe Lightroom filters</h1>
                    <p>Coleção de filtros gratuitos para Adobe Lightroom</p>
                </div>
            </section> */}
            <Footer />
        </div>
    )
}
export default Home;

// gatinha arruma o flex e faz o box shadow com vinho. Não esqueça das media query