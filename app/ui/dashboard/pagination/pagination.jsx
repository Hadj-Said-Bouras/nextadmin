"use client"
import styles from './pagination.module.css'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function Pagination({count}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace} = useRouter()

  const page = searchParams.get('page') || 1;

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 2

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0 
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type) => {
    type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1)
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={styles.container}>
        <button className={styles.prev} disabled={!hasPrev} onClick={() => handleChangePage("prev")}>Previous</button>
        <button className={styles.next} disabled={!hasNext} onClick={() => handleChangePage("next")}>Next</button>
    </div>
  )
}
