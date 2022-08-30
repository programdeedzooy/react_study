    
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { isArray, get, isObject, isEmpty } from 'lodash'

export const Form = ({ formName, useFormProps, onSubmit, onError, children, ...props }) => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    ...useFormProps
  })

  const getFormElement = child => React.createElement(child.type, {
    ...{
      ...child.props,
      register,
      errors,
      key: child.props.name
    }
  })

  const getAlteredChildren = (childrenArray) => (
    React.Children.map(childrenArray,
      child => {
        const propsChildren = get(child, 'props.children', '')

        // condition to check if it is a span tag and add new props.
        if (!isArray(propsChildren) && !isEmpty(child.props.name)) {
          return getFormElement(child)
        }

        // condition to check if the dom extends with object or array of children.
        if (isArray(propsChildren) || isObject(propsChildren)) {
          const alteredChildren = getAlteredChildren(propsChildren)

          // cloneElement with modified children array.
          return React.cloneElement(child,
            { ...child.props }, [...alteredChildren])
        }

        return child
      }
    ))

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} data-testid={formName} {...props} >
      {getAlteredChildren(children)}
    </form>
  )
}

//
// Types
//
Form.propTypes = {
  formName: PropTypes.string.isRequired,
  useFormProps: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func,
  children: PropTypes.node.isRequired
}

//
//  Default Values
//
Form.defaultProps = {
  useFormProps: {
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  },
  onError: null
}

export default memo(Form)

export { default as Field } from './Field'