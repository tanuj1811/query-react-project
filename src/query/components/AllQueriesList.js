import React from 'react'
import { Link } from 'react-router-dom'

import { Queries as queries } from './Fetching/Queries'

import styles from './AllQueriesList.module.scss'
import Card from '../../shared/components/UIElements/Card'

const AllQueriesList = (props) => {
  if (props.queries) {
    queries = props.queries
  }

  return (
    <React.Fragment>
      <div id={props.id} className={styles.heading_container}>
        <h1>
          {props.heading}
          <hr />
        </h1>
        {/* <img src='https://media.istockphoto.com/vectors/the-question-mark-vector-id934903676?k=20&m=934903676&s=612x612&w=0&h=R2PofHuQHfSLSJ9Sr5wPwcODeAqgwOZrOp133CtZwGQ='
                alt='images' /> */}
      </div>
      <div className={styles.queriesContainer}>
        {queries.map((query) => {
          return (
            <Card className={styles.queryBox}>
              <Link className={styles.link} to={`/${query._id}/query`}>
                <h2>{query.title}</h2>
                <h5>{query.description}</h5>
              </Link>
              <p>answer:{query.answers.length}</p>
              <p>{`${query.userId} || ${query.date}`}</p>
            </Card>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default AllQueriesList
