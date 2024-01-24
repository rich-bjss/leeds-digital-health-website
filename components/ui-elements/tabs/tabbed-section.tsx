"use client"

import { useState } from "react"

import TabButton from "./tab-button"

export interface TabPage {
  tabName: string
  page: React.ReactNode
}

export default function TabbedSection({ pages }: { pages: TabPage[] }) {
  const [tabPage, setTabPage] = useState(0)

  return (
    <div className="h-full">
      <div className="h-fit flex justify-end">
        <div className="w-16"/>
        <ul className="list-none inline-block sm:flex sm:justify-end">
          {pages.map((page, i) => (
            <li key={i}>
              <TabButton
                tabNumber={i}
                currentTabNumber={tabPage}
                setTabPage={setTabPage}
              >
                {page.tabName}
              </TabButton>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-full bg-slate-200 rounded-b-2xl">{pages[tabPage].page}</div>
    </div>
  )
}
