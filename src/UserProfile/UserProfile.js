import React from 'react'

export const UserProfile = props =>{

  console.log(props)
  return <div className="UserProfile">
    <div>
      <img src="https://media.licdn.com/dms/image/C5603AQHczcNC92cUWw/profile-displayphoto-shrink_200_200/0?e=1557964800&v=beta&t=rFj2JeH35F0YIX2innurcs5jG_ZHgJelqmRu6wuzkwA"/>
    </div>
    <div>
      {props.owner.name}
    </div>
  </div>
}