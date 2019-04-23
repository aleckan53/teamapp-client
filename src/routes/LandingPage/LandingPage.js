import React, { useContext, useState } from 'react'
import styles from './LandingPage.module.css'
import { BtnLink, Btn, LoaderFull } from '../../components/Basic/Basic'
import ipad from './files/ipad_2.png'
import phones from './files/3-phones.png'
import joinDemo from './files/join_demo.png'
import AuthApiService from '../../services/AuthApiService'
import EventsContext from '../../context/EventsContext'

const LandingPage = props => {
  const [loading, setLoading] = useState(false)
  const { setAuthorized } = useContext(EventsContext)

  const handleGuestLogin = () => {
    AuthApiService.guestLogin(setAuthorized, props.history, setLoading)
  }

  return (
    <>
    {loading ? <LoaderFull/> : ''}
    <div className={styles.landingPage}>
      <header className={styleMedia.header}>
        <div className={styles.hero}>
        </div>
        <span className={styles.version}>v 0.1 <strong>Beta</strong></span>
        <div className={styles.btnContainer}>
          <BtnLink 
            style={{color: 'var(--sub-text)'}}
            to='signup'
            className={styles.btn}
            type='button'
            title='Sign up'/>
          <BtnLink
            to='/login' 
            className={styles.btn}
            type='button'
            title='Log in'/>
        </div>
        <div className={styles.titleContainer}>
          <h1>A new way to collaborate!</h1>
          <h2>Welcome to the TeamApp</h2>
        </div>
      </header>
      <div>
        <section>
          <h3>About</h3>
          <p>
            TeamApp is a new collaboration platform, helping people to team up and work together.<br/><br/>
          </p>
          <img src={ipad} alt=''/>
          <p>
            If you want to:
          </p>
            <ul>
              <li>Bring your great idea into life</li>
              <li>Volunteer to an open source project</li>
              <li>Gain a real working experience</li>
              <li>Level up your skills</li>
            </ul>
          <p style={{textAlign: 'center'}}>
            - TeamApp is a great tool for all of that!
          </p>
          <img src={phones} alt=''/>
        </section>
        <section>
          <h3>How to start?</h3>
          <p>
            Simple!
          </p>
          <ol>
            <li>Sign up for an account</li>
            <li>Set up a profile</li>
            <li>Create / Join a project</li>
            <li>Collaborate with a team</li>
          </ol>
          <img src={joinDemo} alt=''/>
        </section>
        <section>
            <Btn 
              onClick={() => handleGuestLogin()}
              className={styles.guestBtn}
              type='button'
              title='Just curious? - Continue as a guest'/>
          <p className='devMsg'>
            Please note TeamApp is still in development. <br/>
            More features coming soon! <br/>
            If you'd like to contribute to the project, please visit our
            <a href='https://github.com'> github page</a>
          </p>
        </section>
        <footer>
          <a href='https://github.com'>{'\u00a9'} 2019 Alec Kan</a>
        </footer>
      </div>
    </div>
    </>
  )
}

export default LandingPage