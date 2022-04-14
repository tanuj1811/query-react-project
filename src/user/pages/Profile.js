import React from 'react'

import styles from './profile.module.scss'
import Card from '../../shared/components/UIElements/Card'
import EmptySpace from '../../shared/components/UIElements/EmptySpace'
import AllQueriesList from '../../query/components/AllQueriesList'
const Profile = () => {
    return (
        <div>
            <Card className={styles.profile__main}>
                {/* <div className={styles.profile__user}> */}
                    <div className={styles.profile__dp}>
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                    </div>
                    <div className={styles.vertical__line}></div>
                    <div className={styles.profile__name}>
                        <h1>qh1801#admin</h1>
                        <EmptySpace height='30px'/>
                        <div className={styles.profile__main__info}>
                            <div><h3><strong>Name:</strong></h3>Query Hub</div> 
                            <div><h3><strong>Profession:</strong></h3>Developer</div>
                        </div>
                        <hr />
                        <p><strong>me: </strong>this is me the creator of this site...</p>
                        <hr />
                        <div className={styles.profile__work}>
                            <h3>Links:</h3>
                            <a href='$'>Resume</a>
                            <a href='$'>Webiste</a>
                            <a href='$'>Github</a>
                            <a href='$'>LinkedIn</a>
                            <a href='$'>Discord</a>
                        </div> 
                        

                    </div> 
                {/* </div> */}
            </Card>
            <div className={styles.profile__stats}>
                <Card className={styles.profile__stats__stats}>
                    <h2>Stats</h2>
                    <EmptySpace height='30px'/>
                    <div className={styles.profile__stats__stats__info}>
                        <div style={{padding:'20px'}}><h5><strong>Queries:</strong></h5>30</div> 
                        <div style={{padding:'20px'}}><h5><strong>Answers:</strong></h5>20</div>
                        <div style={{padding:'20px'}}><h5><strong>Groups:</strong></h5>3</div> 
                        <div style={{padding:'20px'}}><h5><strong>freq:</strong></h5>20</div>
                    </div>
                </Card>
                <Card className={styles.profile__stats__stats}>
                    <h2>Respects In:</h2>
                    <EmptySpace height='20px'/>
                    <p style={{padding:'10px'}}><strong>groups:</strong>Query Hub</p> <hr />
                    <p style={{padding:'10px'}}><strong>tech market:</strong>Query Hub</p> <hr />
                    <p style={{padding:'10px'}}><strong>cause:</strong>Query Hub</p> <hr />
                    <p style={{padding:'10px'}}><strong>other sites:</strong>Query Hub</p> 

                </Card>
                <div className={styles.profile__stats__row}>
                    <Card className={styles.profile__stats__tags}>
                        <h2>Specialization In:</h2>
                        <EmptySpace height='20px'/>
                        <div className={styles.profile__stats__tags__skills}>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                            <span>java</span>
                        </div>
                    </Card>
                    <Card className={styles.profile__stats__tags}>
                        <h2>Other Platform In:</h2>
                        <EmptySpace height='20px'/>
                        <div className={styles.profile__stats__tags__skills}>
                            <span>CodeChef</span>
                            <span>Leetcode</span>
                            <span>BinarySearch</span>
                            <span>HackerEarth</span>
                            <span>HackerRank</span>
                        </div>
                    </Card>
                </div>
            </div>
            <Card className={styles.profile__main__lists}>
                <h2>Recents Queries:</h2>
                <EmptySpace height='20px'/>
                <div className={styles.profile__main__lists__list}>
                    <h3>{`{queries.titles} Caused by: java.lang.IllegalArgumentException: Iteration variable cannot be null`}</h3>
                    <hr />
                    <p>date:sdjfs || time : sadf</p>
                </div>
            </Card>
            <Card className={styles.profile__main__lists}>
                <h2>Recent Answers:</h2>
                <EmptySpace height='20px'/>
                <div className={styles.profile__main__lists__list}>
                    <h3>{`{queries.titles} Caused by: java.lang.IllegalArgumentException: Iteration variable cannot be null`}</h3>
                    <hr />
                    <p>date:sdjfs || time : sadf</p>
                </div>
            </Card>
        </div>
    )
}

export default Profile
