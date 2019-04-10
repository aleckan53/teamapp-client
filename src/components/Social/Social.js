import React from 'react'
import styles from './Social.module.css'
import {
  IoLogoFacebook as facebook,
  IoLogoGithub as github,
  IoLogoInstagram as instagram,
  IoLogoLinkedin as linkedin,
  IoLogoYoutube as youtube,
  IoLogoTwitter as twitter,
  IoMail as email,
} from 'react-icons/io'

const Social = props => {

  const test = [
    {
      name: 'github',
      url: 'http://facebook.com',
    },
    {
      name: 'youtube',
      url: 'http://facebook.com',
    },
    {
      name: 'twitter',
      url: 'http://facebook.com',
    },
  ]

  const icons = {facebook, github, instagram, linkedin, youtube, twitter}

  return (
    <div className={styles.social}>
      <ul>
        {test.map((link, i) => {
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