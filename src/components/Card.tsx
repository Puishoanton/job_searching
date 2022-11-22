import Image from 'next/image'
import React, { FC } from 'react'
import styles from '../../styles/Card.module.scss'
import { Job } from '../types'
import location from '../../public/location.svg'
import star from '../../public/star.svg'
import save from '../../public/save.svg'
import Link from 'next/link'

type CradProps = {
  card: Job
}

const Card: FC<CradProps> = ({ card }) => {
  return (
    <article className={styles.card}>
      <Link
        href={{
          pathname: `/${card.id}`,
          query: {
            data: JSON.stringify(card),
          },
        }}
        as={`${card.id}`}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image
              loader={() => card.pictures[0]}
              width={85}
              height={85}
              src={card.pictures[0]}
              alt='logo'
            />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className={styles.location}>
              <Image width={15} height={15} src={location} alt='location' /> {card.address}
            </div>
          </div>
        </div>
      </Link>
      <div className={styles.rating}>
        <Image width={19} height={18} src={star} alt='star' />
        <Image width={19} height={18} src={star} alt='star' />
        <Image width={19} height={18} src={star} alt='star' />
        <Image width={19} height={18} src={star} alt='star' />
        <Image width={19} height={18} src={star} alt='star' />
      </div>
      <div className={styles['save-posted']}>
        <Image width={16} height={20} src={save} alt='save' />
        <p>Posted 2 days ago</p>
      </div>
    </article>
  )
}

export default Card
