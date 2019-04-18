import React, { useContext } from 'react'
import styles from './LandingPage.module.css'
import { BtnLink, Btn } from '../../components/Basic/Basic'
import ipad from './files/ipad_2.png'
import gif from './files/signup.png'
import AuthApiService from '../../services/AuthApiService'
import EventsContext from '../../context/EventsContext'

const LandingPage = props => {

  const { setAuthorized } = useContext(EventsContext)

  const handleGuestLogin = () => {
    AuthApiService.guestLogin(setAuthorized, props.history)
  }

  return (
    <div className={styles.landingPage}>
      <nav>

      </nav>
      <header className={styleMedia.header}>
        <div className={styles.hero}>
        </div>
        <span className={styles.version}>v 0.1</span>
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
          <h2>Welcome to the app</h2>
        </div>
      </header>
      <div>
        <section>
          <h3>About</h3>
          <p>
            AppName is a new collaboration platform, helping people to find .<br/><br/>
            If you:
          </p>
            <ul>
              <li>Have a great idea</li>
              <li>Want to volunteer</li>
              <li>Want to gain experience working in a team</li>
            </ul>
          <p>
            - AppName is a great tool for all of that!
          </p>
          <img src={ipad} alt=''/>
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
            <li>Collaborate</li>
          </ol>
          <p className={styles.guestMsg}>Not sure if you ready to signup? - No problem, </p>
            <Btn 
              onClick={() => handleGuestLogin()}
              className={styles.guestBtn}
              type='button'
              title='Continue as a guest'/>
          <img src={gif} alt=''/>
          <p className='devMsg'>
            *** Please note AppName is still in development. <br/>
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
  )
}

export default LandingPage