import React from 'react'


class Select extends React.Component {
  render() {
    const { options, onChange, selected } = this.props

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
      </React.Fragment>
    )
  }
}
export default Select