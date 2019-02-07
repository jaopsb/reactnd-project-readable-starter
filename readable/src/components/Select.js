import React from 'react'


class Select extends React.Component {
  render() {
    const { options,  onChange, onSubmit, btnTitle, selected, showSubmitBtn } = this.props

    return (
      <React.Fragment>
        <select
          className='form-control select'
          value={selected}
          onChange={onChange}>
          {
            options.map(opt =>
              <option
                key={opt.path}
                value={opt.path}>
                {opt.name}
              </option>
            )
          }
        </select>
        {
          showSubmitBtn &&
          <button
            type='submit'
            onSubmit={onSubmit}
            className='btn btn-light btn-select'>
            {btnTitle}
          </button>
        }
      </React.Fragment>
    )
  }
}
export default Select