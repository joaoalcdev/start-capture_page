/* eslint-disable import/no-duplicates */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
import Clock from '../Clock/Clock'
import Modal from '../Popup/Popup'

const HomeSection = () => {
  // Countdown timer init

  const [timerDays, setTimerDays] = useState(0)
  const [timerHours, setTimerHours] = useState(0)
  const [timerMinutes, setTimerMinutes] = useState(0)
  const [timerSeconds, setTimerSeconds] = useState(0)

  let interval

  const startTimer = () => {
    const countDownDate = new Date(
      'Sun Dec 12 2021 21:00:00 GMT-0200'
    ).getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current)
      } else {
        // Update Timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })
  // Countdown timer end

  // popup form init
  const [modalOpen, setModalOpen] = useState(false)
  // popup form end

  return (
    <div>
      <body>
        <main>
          <div className="big-wrapper light">
            {/* <img src="./img/shape.png" alt="" className="shape" /> */}
            <div className="showcase-area">
              <div className="container">
                <div className="left bg-mobile-rocket">
                  <div className="big-title">
                    <img
                      className="img-start"
                      src="start.svg"
                      alt="START LOGO"
                    />
                    <h1 className="text-yellow text-jornada">
                      {' '}
                      Jornada Start{' '}
                    </h1>
                  </div>
                  <p className="text-desc text-white">
                    <span className="text-thin">
                      {' '}
                      3 aulas gratuitas para você <br />
                      descobrir{' '}
                    </span>{' '}
                    <span className="text-bold">
                      um novo jeito de <br />
                      estudar inglês!
                    </span>
                  </p>
                  <p className="text-white">
                    <span className="text-thin text-subs">
                      {' '}
                      Inscreva-se agora para ter acesso a todos os conteúdos <br />
                      da Jornada Start e ser notificado sobre os próximos.
                    </span>
                  </p>
                  <div className="cta">
                    <div className="App">
                      {/* <button
                        className="openModalBtn btn"
                        onClick={() => {
                          setModalOpen(true)
                        }}
                      >
                        QUERO PARTICIPAR DA JORNADA START
                      </button> */}
                      {modalOpen && <Modal setOpenModal={setModalOpen} />}
                      <a
                        href="https://bit.ly/startenglishacademy"
                        className="btn-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        INSCREVER-SE AGORA NA JORNADA START
                      </a>
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="text-contador text-thin no-select">
                      {/* <span className="">AULA 03 | ICINIA EM </span> */}
                      <span className="">AULAS DISPONÍVEIS NO YOUTUBE | <a href="https://www.youtube.com/channel/UCHu70pwONH9cTIvLGhCGL7g/videos" className="text-white" target="_blank" rel="noopener noreferrer"> ÉRIKA GONDIM</a> </span>
                    </h3>
                    <div className="App no-select config-acess-aulas">
                      {/* clock section */}

                      {/* <Clock
                        timerDays={timerDays}
                        timerHours={timerHours}
                        timerMinutes={timerMinutes}
                        timerSeconds={timerSeconds}
                      /> */}

                      {/* class section */}
                      <a href="https://www.youtube.com/watch?v=zRGkOaEfk50&ab_channel=%C3%89rikaGondim"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Aula 01
                      </a>
                      <a href="https://www.youtube.com/watch?v=VB2KsxUYZ1I&ab_channel=%C3%89rikaGondim"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Aula 02
                      </a>
                      <a href="https://www.youtube.com/watch?v=L5xp4tfVQ7o&t=3s&ab_channel=%C3%89rikaGondim"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Aula 03
                      </a>
                    </div>
                  </div>
                </div>
                <div className="shape-rocket"></div>
                <div className="right">
                  <img src="rocket.svg" alt="rocket" className="rocket" />
                  {/* <Image
                    alt="rocket"
                    src="/rocket.svg"
                    className="rocket"
                    layout="responsive"
                    height={700}
                    width={700}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}

export default HomeSection
