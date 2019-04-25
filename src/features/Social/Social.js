import React from 'react'
import styles from './Social.module.css'
import {
  IoLogoFacebook as facebook,
  IoLogoGithub as github,
  IoLogoInstagram as instagram,
  IoLogoLinkedin as linkedin,
  IoLogoYoutube as youtube,
  IoLogoTwitter as twitter,
  IoMdMail as email,
} from 'react-icons/io'

const Social = props => {
  
  const icons = {facebook, github, instagram, linkedin, youtube, twitter, email}

  return !props.links ? '' : (
    <div className={styles.social}>
      <ul>
        {props.links.map((link, i) => {
          const Icon = icons[link.name]
          return (
            <li key={i}>
              <a href={link.url}>
                <Icon className={styles.icon}/>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Social