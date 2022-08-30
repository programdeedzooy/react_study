import React from 'react'

import Form from './index'
import Field from './Field'
import Button from '@mui/material/Button';

export const Example = () => {
  /**
   * @param {object} formData - formData
   */
  const onFormSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <Form formName="loginForm" onSubmit={onFormSubmit} className="ms-3" >
      <Field.Input
        name="email"
        rules={{
          required: 'Email is required',
        }}
      />

      <div className="my-2">
        <Field.Input
          name="password"
          type="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be minimum of 6 characters'
            },
            maxLength: {
              value: 10,
              message: 'Password must be maximum of 10 characters'
            },
          }}
        />
      </div>

      <Button type="submit">Submit</Button>
    </Form>
  )
}

//
//  Types
//
Example.propTypes = {}

export default Example