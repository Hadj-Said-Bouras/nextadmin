"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import styles from './search.module.css'
import {MdSearch} from 'react-icons/md'
import { useRouter } from 'next/navigation'

export default function Search({placeholder}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams)
    params.set("q", e.target.value)
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
        <MdSearch />
        <input type='text' placeholder={placeholder} className={styles.input} onChange={handleSearch}/>
    </div>
  )
}
