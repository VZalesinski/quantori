import { useState, useEffect } from 'react'

const useFetchUserData = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    const authToken = localStorage.getItem('authToken')
    try {
      if (!authToken) {
        throw new Error('No token found')
      }

      const response = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })

      if (!response.ok) {
        throw new Error('Error fetching data')
      }

      const data = await response.json()
      setData(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, error, isLoading, fetchData }
}

export default useFetchUserData
