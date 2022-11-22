import React, { FC } from 'react'
import { Job } from '../types'
import Card from './Card'
import styles from '../../styles/CardList.module.scss'

type CardListProps = {
  error: string
  isLoading: boolean
  data: Job[] | []
}

const CardList: FC<CardListProps> = ({ error, isLoading, data }) => {
  return (
    <div className={styles['card-list']}>
      {error && error}
      {isLoading ? 'isLoading' : data?.map(card => <Card key={card.id} card={card} />)}
    </div>
  )
}

export default CardList
