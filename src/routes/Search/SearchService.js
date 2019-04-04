const SearchService = {
  scrollTop(elementId){
    document.getElementById(elementId).scrollTop = 0
  },
  nextPage(current, total, setPage) {
    return current === Math.ceil(total/15)
      ? current
      : setPage(current+1)
  },
}

export default SearchService