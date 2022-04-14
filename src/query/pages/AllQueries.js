import React from 'react'

import AllQueriesList from '../components/AllQueriesList'


const AllQueries = () => {
    return (
        <React.Fragment>
            <AllQueriesList id='unsolvedqueries'  heading='Unsolved Questions' />
            <AllQueriesList id='topqueries'  heading='Top Hashtag Questions' />
            <AllQueriesList id='mostcommonquery'  heading='Most Veiwed Questions' />
        </React.Fragment>
    )
}

export default AllQueries
