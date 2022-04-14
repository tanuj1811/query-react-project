import React, { useState } from 'react'

import { useForm } from '../../shared/hooks/form-hook'

import { Queries } from '../components/Fetching/Queries'

import styles from './newQuery.module.scss'
import Input from '../../shared/components/UIElements/Input'
import Button from '../../shared/components/UIElements/Button'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validator'

const NewQuery = (props) => {
  const [formState, inputHandler] = useForm(
    {
      title: { value: '', isValid: false },
      description: { value: '', isValid: false },
      groups: { value: '', isValid: false },
    },
    false,
  )
  let newQuery = {
    _id: 'newQueryAdded' + Queries.length + 1,
    userId: 'ccqh03',
    comments: [],
    answers: [],
    tags: ['query', 'programming', 'engineering', 'project'],
    groups: [],
    title: '',
    description: '',
    date: '25/01/2021',
  }
  const [values, setValues] = useState(newQuery)
  const formHandler = (event) => {
    event.preventDefault()
    console.log(inputHandler.value)
    Queries.push()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    // <div className={styles.formWithBackground}>
    <div className={styles.form__container}>
      <div className={styles.heading_container}>
        <h2>Ask your Query</h2>
        <img
          src="https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368"
          alt="images"
        />
      </div>
      <form className={styles.placeForm} onSubmit={formHandler}>
        <Input
          id="title"
          name="title"
          element="input"
          type="text"
          label="Title"
          value={props.title || ''}
          placeholder="Enter Title of Place"
          errText="Ivnalid Entered Text"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(150)]}
          onInput={inputHandler}
          handleInputChange={handleInputChange}
        />
        {/* <Input
          id="description"
          element="textarea"
          label="Description"
          placeholder="Description must atleast contains 20 characters"
          errText="Ivnalid Entered Text"
          row="15"
          validators={[VALIDATOR_MINLENGTH(20), VALIDATOR_MAXLENGTH(500)]}
          onInput={inputHandler}
          
        /> */}

        <Input
          id="description"
          name="description"
          element="richTextarea"
          label="Description"
          value={props.description || ''}
          errText="Ivnalid Entered Text"
          row="15"
          validators={[VALIDATOR_MINLENGTH(20), VALIDATOR_MAXLENGTH(500)]}
          onInput={inputHandler}
        />
        <Input
          id="groups"
          name="groups"
          element="input"
          type="text"
          value=""
          label="Mentions the Groups"
          placeholder=""
          errText="Max. 5 groups is allowed"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <div>
          <label className="col-sm-2 col-form-label">Have Image?</label>
          <input
            name="imgURL"
            type="file"
            className="custom-file-input pading"
            id="customFile"
            placeholder="Select Image"
          />
          <label className="col-sm-2 col-form-label">(upto 5MB only)</label>
        </div>
        <Button type="submit" disabled={!formState.isValid}>
          Submit
        </Button>
      </form>
    </div>
    // </div>
  )
}

export default NewQuery
