"use client"
import Header from "@/components/Header/Header";
import styles from './page.module.scss';
import { useState } from "react";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeSmallTab, setActiveSmallTab] = useState(1);

  const getTabsData = (value: string, tabNumber: number) => {
    if (value === 'All') {
      setActiveTab(1)
    }
    else {
      setActiveTab(tabNumber)
    }
  }
  const getSmallTabsData = (value: string, tabNumber: number) => {
    if (value === 'All') {
      setActiveSmallTab(1)
    }
    else {
      setActiveSmallTab(tabNumber)
    }
  }

  return (
    <>
      <div className="app_container mb-28">
        <div>
          <Header />
        </div>
        <div className="">
          <div className={styles.tabs_container}>
            <div className={styles.tabs}>
              <div className={styles.tabs_content}>
                <p onClick={() => getTabsData("ALL", 1)} className={activeTab === 1 ? `${styles.chosenTab}` : "ml-[10px]"}>All Opportunities</p>
                <p onClick={() => getTabsData("Content", 2)} className={activeTab === 2 ? styles.chosenTab : ""}>Content</p>
                <p onClick={() => getTabsData("Design", 3)} className={activeTab === 3 ? styles.chosenTab : ""}>Design</p>
                <p onClick={() => getTabsData("Development", 4)} className={activeTab === 4 ? styles.chosenTab : ""}>Development</p>
                <p onClick={() => getTabsData("Others", 5)} className={activeTab === 5 ? `${styles.chosenTab}` : "mr-[10px]"}>Others</p>
              </div>
            </div>
          </div>
          <div className={styles.small_tabs}>
            <div className={styles.small_tabs_content}>
              <p onClick={() => getSmallTabsData("Opened", 1)} className={activeSmallTab === 1 ? styles.chosenTab : ""}>Opened</p>
              <p onClick={() => getSmallTabsData("In View", 2)} className={activeSmallTab === 2 ? styles.chosenTab : ""}>In View</p>
              <p onClick={() => getSmallTabsData("Completed", 3)} className={activeSmallTab === 3 ? styles.chosenTab : ""}>Completed</p>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div>
          <Projects />
        </div>
      </div>
    </>
  );
}
