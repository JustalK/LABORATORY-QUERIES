import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const useBack = () => {
  const { data, error } = useSWR('http://localhost:4000/', fetcher, {
    refreshInterval: 10000
  })

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}

export default useBack
