import Api from './api'

export default {
  loadProjects (state, setState) {
    Api.getAllProjects(state.searchTerm, state.currentPage)
      .then(res => setState({
        ...state,
        totalProjects: res.count,
        // prevents bubbling up the state
        projects: state.currentPage > 1 
          ? [...state.projects, ...res.projects]
          : res.projects 
      }))
  },
  nextPage (state, setState) {
    return state.currentPage === Math.ceil(state.totalProjects/8) // 8 = api response limit
      ? state.currentPage
      : setState({
        ...state,
        currentPage: ++state.currentPage
      })
  },
  searchByTerm (e, state, setState) {
    document.getElementById('Scrollable').scrollTop = 0
    setState({
      ...state,
      searchTerm: e.target.value,
      currentPage: 1
    })  
  },
  initialLoad (timer, setTyping, state, setState) {
    clearTimeout(timer)
    this.loadProjects(state, setState)
    setTyping(false)
  },
  delayedLoad (timer, setTimer, setTyping, state, setState) {
    clearTimeout(timer)
    setTyping(true)
    setTimer(setTimeout(() => {
      this.loadProjects(state, setState)
      setTyping(false)
    }, 600))  
  }
}