/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Job } from '../types'

type useFetchingProps = (
  url: string,
  page?: number,
  limit?: number
) => { data: Job[] | []; error: string; isLoading: boolean; totalPage: string }

export const useFetching: useFetchingProps = (url, page, limit) => {
  const [data, setData] = useState<Job[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [totalPage, setTotalPage] = useState('0')

  const getAPIData = async (page?: number, limit?: number) => {
    try {
      setIsLoading(true)
      const response = await axios.get(url, {
        // headers: {
        //   'Content-Type': 'application/json',
        //   Authorization: `Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`,
        // },
        params: {
          _limit: limit,
          _page: page,
        },
      })
      setTotalPage(response.headers['x-total-count'] || '0')
      setIsLoading(false)
      return setData(response.data)
    } catch (e) {
      setIsLoading(false)
      setError('Error')
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getAPIData(page, limit)
  }, [page, limit])
  return { data, error, isLoading, totalPage }
}
