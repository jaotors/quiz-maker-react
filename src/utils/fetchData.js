const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const API_TOKEN = import.meta.env.VITE_API_TOKEN || ''

async function fetchData(url, options = { method: 'GET' }) {
  try {
    let headers = {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    }
    options.headers = headers

    const response = await fetch(`${BASE_URL}${url}`, options)

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: 'Unknown error' })) // Attempt to parse error message
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Server error'}`
      )
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch operation failed:', error)
    throw error
  }
}

export default fetchData
