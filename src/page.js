import styles from './page.module.css'

import dynamic from 'next/dynamic'



const Scene = dynamic(() => import('@/components/Landing'), {

    ssr: false,

})



export default function Home() {

  return (

    <main className={styles.main}>

        <Landing />

    </main>

  )

}