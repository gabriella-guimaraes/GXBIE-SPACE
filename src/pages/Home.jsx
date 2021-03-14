import './Home.css';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
// import { Link } from 'react-router-dom';

function Home() {
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
            <section className="feed">
                <h1>Posts</h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur
                       adipiscing elit semper rutrum rhoncus bibendum 
                       ultricies ullamcorper erat, facilisis interdum 
                       placerat maecenas sollicitudin nisi praesent
                        pellentesque ridiculus ornare ante tempus augue.
                         Volutpat varius sed auctor neque duis dolor 
                         rhoncus cras, fringilla lacus amet ut parturient
                         quam curabitur, placerat ullamcorper sociosqu
                          montes dictum imperdiet id. Tempus et dignissim
                           tellus habitant hac integer varius enim in 
                           ornare magna libero, nostra donec senectus 
                           class justo gravida ad iaculis mi finibus semper, 
                           tincidunt nascetur mauris rutrum nec hendrerit
                            consectetur elit fusce ligula natoque. Magna
                             molestie fusce varius facilisis eros gravida
                              cras, tristique dapibus pretium ligula nec
                               proin a morbi, mattis mollis suscipit non nam 
                               felis. Odio viverra scelerisque urna dignissim 
                               onsequat facilisi rhoncus neque nam et, sed curae
                               us himenaeos sollicitudin parturient etiam cras
                               </p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur
                       adipiscing elit semper rutrum rhoncus bibendum 
                       ultricies ullamcorper erat, facilisis interdum 
                       placerat maecenas sollicitudin nisi praesent
                        pellentesque ridiculus ornare ante tempus augue.
                         Volutpat varius sed auctor neque duis dolor 
                         rhoncus cras, fringilla lacus amet ut parturient
                         quam curabitur, placerat ullamcorper sociosqu
                          montes dictum imperdiet id. Tempus et dignissim
                           tellus habitant hac integer varius enim in 
                           ornare magna libero, nostra donec senectus 
                           class justo gravida ad iaculis mi finibus semper, 
                           tincidunt nascetur mauris rutrum nec hendrerit
                            consectetur elit fusce ligula natoque. Magna
                             molestie fusce varius facilisis eros gravida
                              cras, tristique dapibus pretium ligula nec
                               proin a morbi, mattis mollis suscipit non nam 
                               felis. Odio viverra scelerisque urna dignissim 
                               onsequat facilisi rhoncus neque nam et, sed curae
                               us himenaeos sollicitudin parturient etiam cras
                               </p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur
                       adipiscing elit semper rutrum rhoncus bibendum 
                       ultricies ullamcorper erat, facilisis interdum 
                       placerat maecenas sollicitudin nisi praesent
                        pellentesque ridiculus ornare ante tempus augue.
                         Volutpat varius sed auctor neque duis dolor 
                         rhoncus cras, fringilla lacus amet ut parturient
                         quam curabitur, placerat ullamcorper sociosqu
                          montes dictum imperdiet id. Tempus et dignissim
                           tellus habitant hac integer varius enim in 
                           ornare magna libero, nostra donec senectus 
                           class justo gravida ad iaculis mi finibus semper, 
                           tincidunt nascetur mauris rutrum nec hendrerit
                            consectetur elit fusce ligula natoque. Magna
                             molestie fusce varius facilisis eros gravida
                              cras, tristique dapibus pretium ligula nec
                               proin a morbi, mattis mollis suscipit non nam 
                               felis. Odio viverra scelerisque urna dignissim 
                               onsequat facilisi rhoncus neque nam et, sed curae
                               us himenaeos sollicitudin parturient etiam cras
                               </p>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Home;