import Image from 'next/image'
import { FC, useEffect, useState } from 'react'
import arrow from '../../public/arrow.svg'
import styles from '../../styles/Pagination.module.scss'

type PaginationProps = {
  pages: number[]
  changePage: (n: number) => void
  currentPage: number
}

const Pagination: FC<PaginationProps> = ({ pages, changePage, currentPage }) => {
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)
  useEffect(() => {
    if (+currentPage === 1) {
      setPrev(true)
    } else {
      setPrev(false)
    }
    if (+currentPage === pages.length) {
      setNext(true)
    } else {
      setNext(false)
    }
  }, [currentPage, pages.length])

  const rootClass = [styles.page, styles.active]
  return (
    <div className={styles.pagination}>
      <button disabled={prev} className={styles.prev} onClick={() => changePage(+currentPage - 1)}>
        <Image width={10} height={18} src={arrow} alt='arrow' />
      </button>

      <div className={styles.pages}>
        {pages.map(page => {
          return (
            <div
              className={page + 1 === +currentPage ? rootClass.join(' ') : styles.page}
              onClick={(e: any) => changePage(e.target.innerHTML)}
              key={page}>
              {page + 1}
            </div>
          )
        })}
      </div>
      <button disabled={next} className={styles.next} onClick={() => changePage(+currentPage + 1)}>
        <Image width={10} height={18} src={arrow} alt='arrow' />
      </button>
    </div>
  )
}

export default Pagination
