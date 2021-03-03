import { NextPage } from 'next'
import { useCookies } from 'react-cookie'

const loginUser = (user: string) => fetch('/api/login', { method: 'POST' })

const LoginPage: NextPage = () => {
  const [cookie, setCookie] = useCookies(['user'])

  const handleSignIn = async () => {
    try {
      const response = await loginUser('John')
      const { token } = await response.json()
      console.log('token', token)
      setCookie('user', JSON.stringify(token), { path: '/', maxAge: 3600, sameSite: true })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <label htmlFor="username">
      <input type="text" placeholder="enter username" />
      <button onClick={handleSignIn}>Sign In</button>
    </label>
  )
}

export default LoginPage
