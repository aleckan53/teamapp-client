import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import ProjectCard from 'features/ProjectCard'
import { CustomLoader, Msg } from 'features/Basic'
import styles from './styles.module.css'
 
const Scrollable = props => {
  return (
    <div id="Scrollable" className={styles.scrollable}>
      <InfiniteScroll
        hasMore={props.hasMore}
        next={()=> props.next()}
        loader={<CustomLoader/>}
        scrollableTarget="Scrollable"
        dataLength={props.dataLength}
        endMessage={props.totalItems > 5 ? <Msg text="You've seen them all"/>: ''}>
        {props.items.map((p,i)=><ProjectCard to={`/projects/${p.id}`} key={i} project={p}/>)}
      </InfiniteScroll>
    </div>
  )
}

export default Scrollable