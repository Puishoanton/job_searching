import { createContext, useState } from 'react'
import CardList from '../src/components/CardList'
import Pagination from '../src/components/Pagination'
import { useFetching } from '../src/hook/useFetching'
import { Job } from '../src/types'

export default function Main() {
  const url = 'http://localhost:4000/data'
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, totalPage } = useFetching(url, currentPage, 5)
  const pageArray = []

  for (let i = 0; i < Math.ceil(+totalPage / 5); i++) {
    pageArray.push(i)
  }

  const changePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className='wrapper'>
      <CardList data={data} error={error} isLoading={isLoading} />
      <Pagination pages={pageArray} currentPage={currentPage} changePage={changePage} />
    </div>
  )
}
