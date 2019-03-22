import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ProjectCard from '../ProjectCard/ProjectCard'
import { CustomLoader } from '../Basic/Basic'
import styles from './Scrollable.module.css'
 
const Scrollable = props => {
  return (
    <div id="Scrollable" className={styles.scrollable}>
      <InfiniteScroll
        hasMore={props.hasMore}
        next={()=> props.next()}
        loader={<CustomLoader/>}
        scrollableTarget="Scrollable"
        dataLength={props.dataLength}
        endMessage={props.totalItems > 5 ? <p className={styles.botMsg}>That's it for now.</p>: ''}>
        {props.items.map((p,i)=><ProjectCard key={i} project={p}/>)}
      </InfiniteScroll>
    </div>
  )
}

export default Scrollable