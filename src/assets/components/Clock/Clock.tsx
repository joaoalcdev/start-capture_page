/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Fragment } from 'react'

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p className="text-bold text-clock">{timerDays}</p>
              <small className="text-ultrathin">Dias</small>
            </section>
            {/* <span>:</span> */}
            <section>
              <p className="text-bold text-clock">{timerHours}</p>
              <small className="text-ultrathin">Horas</small>
            </section>{' '}
            <span className="text-bold">:</span>
            <section>
              <p className="text-bold text-clock">{timerMinutes}</p>
              <small className="text-ultrathin">Minutos</small>
            </section>{' '}
            <span className="text-bold dots">:</span>
            <section>
              <p className="text-bold text-clock">{timerSeconds}</p>
              <small className="text-ultrathin">Segundos</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  )
}

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10
}

export default Clock
