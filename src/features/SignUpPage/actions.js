export default {
  validMsg (valid) {
    if (!valid.email) return 'Please enter a valid email'
    if (!valid.password) return `Password must be 8-72 characters and have at least 1 number`
    if (!valid.first_name) return 'Please enter a valid first name'
    if (!valid.last_name) return 'Please enter a valid last name'
  },
  validate : {
    email(email) {
      const regEx = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regEx.test(String(email).toLowerCase())
    },
    password(password) {
      const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      return regEx.test(String(password))
    },
    name(name) {
      const regEx = /^\D{1,20}$/
      return regEx.test(String(name))
    },
    avatar(avatar) {
      try {
        new URL(avatar)
        return true
      } catch {
        return false
      }
    }
  }
}