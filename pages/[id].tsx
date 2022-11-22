import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import arrow from '../public/arrow.svg'
import location from '../public/location.svg'
import map from '../public/map.png'
import save from '../public/save.svg'
import share from '../public/share.svg'
import Block from '../src/components/Block'
import { Job } from '../src/types'
import styles from '../styles/JobDescription.module.scss'

const JobDescription = () => {
  const router = useRouter()
  const query = router.query
  const job: Job = JSON.parse(query.data as any)
  return (
    <div className={styles.wrapper}>
      <div className={styles['jobDetails-contacts']}>
        <section className={styles['job-details']}>
          <header className={styles.header}>
            <h1 className={styles.title}>Job Details</h1>
            <div className={styles['save-share']}>
              <div className={styles.save}>
                <Image width={16} height={20} src={save} alt='save' />
                <p>Save to my list</p>
              </div>
              <div className={styles.share}>
                <Image width={18} height={20} src={share} alt='share' />
                <p>Share</p>
              </div>
            </div>
          </header>
          <main className={styles.main}>
            <button>Apply now</button>
            <div className={styles.info}>
              <div className={styles['title-salary']}>
                <h2 className={styles.title}>{job.title}</h2>
                <div className={styles.salary}>
                  <h3>{job.salary}</h3>
                  <p>Brutto, per year</p>
                </div>
              </div>
              <div className={styles['date-of-post']}>Posted 2 days ago</div>
              <div className={styles.description}>
                <p>{job.description}</p>
                <div className={styles.responsopilities}>
                  <h3>Responsopilities</h3>
                  <p>{job.description}</p>
                  <p>{job.description}</p>
                  <p>{job.description}</p>
                </div>
                <div className={styles['compensation-benefits']}>
                  <h3>Compensation & Benefits:</h3>
                  <h4>Our physicians enjoy a wide range of benefits, including:</h4>
                  <ul>
                    <li> Very competitive compensation package with bonuses </li>
                    <li>Medical, Dental, and Vision Insurance</li>
                    <li>Occurrence-based Malpractice Coverage</li>
                    <li>Short-term and Long-term Disability Insurance and life insurance</li>
                  </ul>
                </div>
              </div>
            </div>
            <button>Apply now</button>
            <section className={styles.additional}>
              <h2>Additional info</h2>
              <div className={styles['employment-type']}>
                <h3>Employment type</h3>
                <div className={styles.blocks}>
                  {job.employment_type.map(type => (
                    <Block
                      key={type}
                      text={type}
                      color={'#55699E'}
                      BGcolor='rgba(161, 177, 219, 0.317343)'
                    />
                  ))}
                </div>
              </div>
              <div className={styles.benefits}>
                <h3>Benefits</h3>
                <div className={styles.blocks}>
                  {job.benefits.map(benefit => (
                    <Block
                      key={benefit}
                      text={benefit}
                      color={'#988B49'}
                      BGcolor='rgba(255, 207, 0, 0.15)'
                    />
                  ))}
                </div>
              </div>
            </section>
            <section className={styles['attached-images']}>
              <h2>Attached images</h2>
              <div className={styles.images}>
                {job.pictures.map((picture, i) => (
                  <Image
                    width={300}
                    height={200}
                    key={i}
                    loader={() => picture}
                    src={picture}
                    alt='Attached images'
                  />
                ))}
              </div>
            </section>
          </main>
        </section>
        <section className={styles.contacts}>
          <div className={styles.address}>
            <div className={styles.decor}></div>
            <div className={styles.content}>
              <h2>{job.title}</h2>
              <div className={styles.location}>
                <p>
                  <Image width={13} height={18} src={location} alt='location' />
                  {job.address}
                </p>
                <p>{job.name}</p>
              </div>
              <div className={styles['phone-email']}>
                <p>{job.phone}</p>
                <p>{job.email}</p>
              </div>
            </div>
          </div>
          <div className={styles.map}>
            <Image width={402} height={218} src={map} alt='map' />
            <Image width={13} height={18} src={location} alt='location' />
          </div>
        </section>
      </div>
      <Link href={'/'} className={styles['back-to-home']}>
        <Image width={10} height={18} src={arrow} alt='arrow' />
        <h3>RETURN TO JOB BOARD</h3>
      </Link>
    </div>
  )
}

export default JobDescription
