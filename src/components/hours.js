import React, { Fragment } from 'react'
import format from 'date-fns/format'

import { hours } from '../../content/hours.yaml'

export default () => {
  const today = format(new Date(), 'dddd')

  return (
    <Fragment>
      <h4 className="text-center">Hours</h4>
      <small className="text-center" style={{ display: 'block' }}>
        Closed January 1st
      </small>

      <table className="table hours-table">
        <tbody>
          {hours.map((hour, idx) => (
            <tr key={idx}>
              <th>
                {hour.days}
                {hour.days === today && <small style={{ marginLeft: '0.5em' }}>(today)</small>}
              </th>
              <td className="text-right">{hour.time[0]}</td>
              <td className="text-center">&mdash;</td>
              <td className="text-left">{hour.time[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
