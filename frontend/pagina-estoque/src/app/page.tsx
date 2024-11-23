'use client'

import { Header } from "../app/components/common/header"
import { NavigationColumn } from "./components/common/navigation-column"
import { useEffect, useState } from "react"
import { RegisterProduct } from "./components/register-products/register-product"
import { DashboardProduct } from "./components/dashboard-products/dashboard-products"

export default function Page() {

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>{isClient &&
      <main className="grid grid-cols-5 h-screen">
        <aside className="bg-slate-900">
          <NavigationColumn />
        </aside>

        <div className="col-span-4">
          <Header />
          <RegisterProduct />
          <DashboardProduct />
        </div>
      </main>}
    </div>
  )
}