"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { backendSkills, frontendSkills, toolSkills } from "@/lib/skills";

export default function SharedLayoutAnimation() {
  const tabs = [
    { label: "Frontend", items: frontendSkills },
    { label: "Backend", items: backendSkills },
    { label: "Tools", items: toolSkills },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <section>
      <h1 className="text-4xl max-w-4xl mx-8 md:mx-auto font-bold mb-4 border-b-1 py-3 text-green-600">
        Skills
      </h1>

      <div className="flex justify-center items-center min-h-[50vh] md:min-h-[0vh]">
        <div>
          <div className="flex justify-center items-center m-4 mb-10 p-4 ">
            <div className="shadow-2xl rounded-lg p-5">
              <div className="flex justify-around min-w-[25vw]">
                <nav style={nav}>
                  <ul style={tabsContainer}>
                    {tabs.map((item) => (
                      <motion.li
                        key={item.label}
                        initial={{ backgroundColor: "#eee0" }}
                        animate={{
                          backgroundColor:
                            item.label === selectedTab.label ? "#eee" : "#eee0",
                        }}
                        style={tab}
                        className=""
                        onClick={() => setSelectedTab(item)}
                      >
                        <div className="flex text-center">{item.label}</div>
                        {hydrated && item.label === selectedTab.label ? (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500"
                          />
                        ) : null}
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
              <main style={iconContainer}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1.5rem",
                      justifyContent: "center",
                    }}
                  >
                    {selectedTab?.items?.map((skill) => (
                      <div
                        key={skill.name}
                        style={{
                          width: 100,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={skill.img}
                          alt={skill.name}
                          style={{
                            width: 48,
                            height: 48,
                            objectFit: "contain",
                          }}
                          className="m-5"
                        />
                        <span style={{ fontSize: 14, marginTop: 8 }}>
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ==============   Styles   ================
 */

const nav: React.CSSProperties = {
  background: "#fdfdfd",
  padding: "5px 5px 0",
  borderRadius: "10px",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  borderBottom: "1px solid #eeeeee",
  height: 44,
};

const tabsStyles: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  fontWeight: 500,
  fontSize: 14,
};

const tabsContainer: React.CSSProperties = {
  ...tabsStyles,
  display: "flex",
  width: "100%",
};

const tab: React.CSSProperties = {
  ...tabsStyles,
  borderRadius: 5,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  width: "100%",
  padding: "10px 15px",
  position: "relative",
  background: "white",
  cursor: "pointer",
  height: 24,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  minWidth: 0,
  userSelect: "none",
  color: "#0f1115",
};

const iconContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};
