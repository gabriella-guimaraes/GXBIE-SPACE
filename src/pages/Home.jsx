import './Home.css';
import Menu from '../components/Menu';

function Home() {
    return(
        <div className="home">
            <Menu />
            {/* <h1>Home page</h1> */}
            <section className="headerImg">
                <h1>Bem-vindo(a)!</h1>
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
            </section>
        </div>
    )
}
export default Home;