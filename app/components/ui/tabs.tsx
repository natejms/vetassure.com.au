import { useState } from "react";

interface VETATabsProps {
  tabs: string[];
  onTabChange?: (tab: string) => void;
}

export default function Tabs({ tabs, onTabChange }: VETATabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(tabs[index]);
    }
  };

  return (
    <div className="">
      <div className="relative">
        <ul
          className="relative inline-flex list-none flex-wrap rounded-[6px] bg-gray-100 p-[3px] text-sm dark:bg-sidebarDark"
          role="list"
        >
          {tabs.map((tab, index) => (
            <li key={index} className="flex-auto text-center">
              <a
                className={`z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-[4px] border-0 px-2.5 py-1 font-medium capitalize transition-all ease-in-out ${
                  index === activeTab
                    ? "border bg-white/100 text-accentText dark:bg-sidebarLinkDark dark:text-sidebarActiveTextDark"
                    : "text-gray-500 dark:text-sidebarInactiveTextDark"
                }`}
                onClick={() => handleTabClick(index)}
                role="tab"
                aria-selected={index === activeTab}
              >
                <span>{tab}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
