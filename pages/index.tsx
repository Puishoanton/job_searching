import { createContext, useState } from 'react'
import CardList from '../src/components/CardList'
import Pagination from '../src/components/Pagination'
import { useFetching } from '../src/hook/useFetching'
import { Job } from '../src/types'

export default function Main() {
  const url = 'https://job-searching-f472b-default-rtdb.europe-west1.firebasedatabase.app/data.json'
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading, totalPage } = useFetching(url, currentPage, 5)
  const pageArray = [] as number[]

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
