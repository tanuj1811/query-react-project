import React from "react";

import styles from  './home.module.scss'
// import stylesVariable from '../../shared/SassVariables/variable.scss'
import Jumbotron from "../../shared/components/UIElements/Jumbotron";
import Card from "../../shared/components/UIElements/Card";

const Home = () => {
    return (
        <React.Fragment>
        <h1>---</h1>
            <Jumbotron height='fit-content' width='92%' curve='curve' stackOverFlow>
                <div className={styles.home__jumbotron2}>
                    <Jumbotron height='fit-content' button='Join the community' to='/login' 
                        mainText='Join our Communtity' 
                        subText = 'Get the best answer to your technical questions, help others answer theirs' 
                        backgroundColor='lightsalmon' />
                    <Jumbotron height='fit-content'  button='Join the devps Community' to='/' 
                        mainText='Contribute to our code' 
                        subText = 'Improve the site perfornmace with contribute to our code via github' 
                        backgroundColor='rgb(150, 235, 150)' />
                </div>
                <div className={styles.jumbotron__text}>
                <h1> Yours every Doubt needs answer</h1>
                </div>

                <div>
                    <ul className={styles.home__displayQues}>
                        <li><h3>Total Queries</h3> <p>{2659}</p></li>
                        <li><h3>Pending Queries</h3> <p>{265}</p></li>
                        <li><h3>Avg. response Time</h3> <p>30 min</p></li>
                        <li><h3>active Users</h3> <p>{269}</p></li>
                    </ul>
                </div>
            </Jumbotron>
           <div className={styles.home__card__div}>
            <Card className={styles.home__card}>
                    <h1>A Thanks to our Contributer's</h1>
                    <ul>
                        <li>tanuj</li>
                        <li>tanuj</li>
                        <li>tanuj</li>
                        <li>tanuj</li>
                        <li>tanuj</li>
                        <li>tanuj</li>
                    </ul>
                </Card>
                <Jumbotron
                 height='fit-content'  button='Read More' to='/' 
                        mainText='About Query-Point' 
                        subText = 'this site do blah blah blah....' 
                        backgroundColor='rgb(150, 235, 150)' />

           </div>
           <div>
                <h1>Trends</h1>
                <div className={styles.home__trend__card}>
                    <ul>
                        <li>#{'python'}</li>
                        <li>#{'java'}</li>
                        <li>#{'ReactJs'}</li>
                        <li>#{'Spring-boot'}</li>
                        
                    </ul>
                </div>
           </div>


            
        </React.Fragment>
    )
}

export default Home;