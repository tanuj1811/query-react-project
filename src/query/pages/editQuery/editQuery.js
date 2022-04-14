import React from 'react'
import { useParams } from 'react-router-dom'
import { Queries } from '../../components/Fetching/Queries'
import NewQuery from '../newQuery'

const EditQuery = () => {
  const curredQueryId = useParams().queryId
  const QUERY = Queries.find((query) => query._id === curredQueryId)
  return <NewQuery title={QUERY.title} description={QUERY.description} />
}

export default EditQuery
