import React from 'react'
import styles from './sidebar.module.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from './menuLink/menuLink'
import Image from 'next/image';
import { auth, signOut } from '../../../auth'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const {user} = await auth()
  console.log(user)
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image priority={true} className={styles.userImage} src={user.img || '/noavatar.png'} alt='avatar' width={50} height={50} />
        <div className={styles.userDetail}>
          <span className={styles.userName}>{user.username}</span>
          <span className={styles.userTitle}>CEO</span>
        </div>
      </div>
      
      <ul className={styles.list}>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item={item} key={item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <form action={async () => {
        "use server";
        signOut();
      }}>

      <button className={styles.logout}>
        <MdLogout />
        Logout
        </button>
      </form>
    </div>
  )
}

export default Sidebar;
