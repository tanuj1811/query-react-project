import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useForm } from '../../shared/hooks/form-hook'
import { Button, Card, Input } from '../../shared/components/UIElements'
import {
  Answers,
  Queries,
  Comments,
} from '../../query/components/Fetching/Queries'

import './query.scss'
import Answer from '../components/Answer/answer'
import UserBox from '../../user/components/UserBox/userbox'
import Comment from '../components/Comment/comment'
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validator'
import AdminFeature from '../components/AdminFeature/adminFeature'

const Query = () => {
  const currentQueryId = useParams().queryId
  const QUERY = Queries.find((query) => query._id === currentQueryId)

  const [ANSWERS, setAnswers] = useState(
    Answers.filter((ans) => ans.queryId === currentQueryId),
  )
  const [COMMENTS, setComments] = useState(
    Comments.filter((cmnt) => cmnt.queryId === currentQueryId),
  )

  const [comment, setComment] = useState('')
  const [answer, setAnswer] = useState('')
  const [formState, inputHandler] = useForm(
    {
      postAnswer: { value: '', isValid: false },
    },
    false,
  )

  const postAnswerHandler = (e) => {
    e.preventDefault()
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    var yyyy = today.getFullYear()

    today = dd + '/' + mm + '/' + yyyy
    console.log(answer)
    ANSWERS.push({
      _id: 'ccqha0n0s0',
      answer: answer,
      userId: 'queryhub1',
      date: today,
      queryId: currentQueryId,
      approved: false,
      score: 0,
    })
    setAnswer('')
    // console.log('added successfully')
  }
  const deleteCommentHandler = () => {
    console.log('deleting comment w.r.t')
  }
  const addCommentHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      COMMENTS.push({
        _id: 'ccqh0c0o0m001',
        content: comment,
        userId: 'queryhub1',
        queryId: QUERY._id,
      })
      setComment('')
    }
  }

  useEffect(() => {
    setComments(Comments.filter((cmnt) => cmnt.queryId === currentQueryId))
    console.log('rendered successfully')
  }, [])

  return (
    <>
      <Card className="container">
        <div className="tagsandquery">
          <div className="tags">
            <b>Tags: </b>
            {QUERY.tags.map((e) => (
              <span>{e}</span>
            ))}
          </div>
          <div className="tags">
            <b>Groups Mentioned: </b>
            {QUERY.groups.map((e) => (
              <span>{e}</span>
            ))}
          </div>
        </div>
        <div className="main_container">
          <h3>{QUERY.title}</h3>
          <div className="description">{QUERY.description}</div>
        </div>
        <AdminFeature
          className="adminFeature"
          queryId={QUERY._id}
          share
          edit
          delete
          post_answer
        />
        <UserBox date={QUERY.date} userId={QUERY.userId} className="userbox" />
        <hr />
        <div className="ansAndComments">
          <div className="answers">
            <h3>Answers</h3>
            {ANSWERS.map((ans) => (
              <Answer answer={ans} className="answer" />
            ))}
          </div>
          <div className="comments">
            <div className="add_comment">
              <input
                onKeyDown={addCommentHandler}
                type="input"
                className="add_comment_input"
                placeholder="Add a Comment"
                name="comment"
                id="add_comment_input"
                value={comment || ''}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            {COMMENTS.map((cmnt) => {
              return (
                <Comment
                  className="comment"
                  comment={cmnt}
                  deleteCommentHandler={deleteCommentHandler}
                />
              )
            })}
          </div>
        </div>
        <form
          id="post_answer"
          className="post-answer"
          onSubmit={postAnswerHandler}
        >
          <Input
            id="postAnswer"
            name="postAnswer"
            element="richTextarea"
            label="Post Answer"
            value={answer || ''}
            errText="Answer Range must be 20-500 words"
            row="15"
            validators={[VALIDATOR_MINLENGTH(20), VALIDATOR_MAXLENGTH(500)]}
            onInput={inputHandler}
            onKeyDown={(e) => setAnswer(e.target.value)}
          />
          <Button type="submit" inverse disabled={!formState.isValid}>
            Share Answer :)
          </Button>
        </form>
      </Card>
    </>
  )
}

export default Query
