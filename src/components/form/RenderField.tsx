/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react'

export const RenderField: React.FC<any> = (props) => {
  const {
    id,
    className,
    type,
    input,
    disabled,
    placeholder,
    label,
    rows,
    meta: { touched, error },
    children,
  } = props
  return (
    <div className="inline">
      {type === 'textarea' ? (
        <textarea className={className} {...input} type={type} disabled={disabled} placeholder={placeholder} rows={rows} />
      ) : type === 'select' ? (
        <select className={className} {...input} type={type} disabled={disabled}>
          {children}
        </select>
      ) : type === 'checkbox' ? (
        <label htmlFor={id}>
          <input id={id} className={className} {...input} type={type} disabled={disabled} />
          <span className="ml-2">{label}</span>
        </label>
      ) : (
        <input className={className + (touched && error ? ' is-invalid' : '')} {...input} type={type} disabled={disabled} placeholder={placeholder} />
      )}
      {touched && error && <div className="small text-danger mt-1">{error}</div>}
    </div>
  )
}
