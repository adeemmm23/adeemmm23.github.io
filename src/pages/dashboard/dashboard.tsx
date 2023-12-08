import { z } from "zod";
import React, { useEffect, useState } from "react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";
import tasksData from "./data/tasks.json";

import Nuit2023 from "../../../public/logo/nuit_2023.svg";
import Nuit2022 from "../../../public/logo/nuit_2022.svg";
import Nuit2021 from "../../../public/logo/nuit_2021.svg";
import Nuit2019 from "../../../public/logo/nuit_2019.svg";
import Nuit2018 from "../../../public/logo/nuit_2018.svg";
import Nuit2017 from "../../../public/logo/nuit_2017.svg";
import Nuit2016 from "../../../public/logo/nuit_2016.svg";
import Nuit2015 from "../../../public/logo/nuit_2015.svg";
import Nuit2014 from "../../../public/logo/nuit_2014.svg";
import Nuit2013 from "../../../public/logo/nuit_2013.svg";
import Nuit2012 from "../../../public/logo/nuit_2012.svg";
import Nuit2011 from "../../../public/logo/nuit_2011.svg";
import Nuit2010 from "../../../public/logo/nuit_2010.svg";
import Nuit2009 from "../../../public/logo/nuit_2009.svg";
import Nuit2008 from "../../../public/logo/nuit_2008.svg";
import Nuit2007 from "../../../public/logo/nuit_2007.svg";

type Task = {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
};

export let theme = "nuit2022";

const themes = [
  "nuit2007",
  "nuit2008",
  "nuit2009",
  "nuit2010",
  "nuit2011",
  "nuit2012",
  "nuit2013",
  "nuit2014",
  "nuit2015",
  "nuit2016",
  "nuit2017",
  "nuit2018",
  "nuit2019",
  "nuit2021",
  "nuit2022",
  "nuit2023",
];
interface Logo {
  [key: string]: string;
}

const logo: Logo = {
  nuit2023: Nuit2023,
  nuit2022: Nuit2022,
  nuit2021: Nuit2021,
  nuit2019: Nuit2019,
  nuit2018: Nuit2018,
  nuit2017: Nuit2017,
  nuit2016: Nuit2016,
  nuit2015: Nuit2015,
  nuit2014: Nuit2014,
  nuit2013: Nuit2013,
  nuit2012: Nuit2012,
  nuit2011: Nuit2011,
  nuit2010: Nuit2010,
  nuit2009: Nuit2009,
  nuit2008: Nuit2008,
  nuit2007: Nuit2007,
};

interface ThemeNames {
  [key: string]: string;
}

const themeNames: ThemeNames = {
  nuit2023: "Nuit de l'info 2023",
  nuit2022: "Nuit de l'info 2022",
  nuit2021: "Nuit de l'info 2021",
  nuit2019: "Nuit de l'info 2019",
  nuit2018: "Nuit de l'info 2018",
  nuit2017: "Nuit de l'info 2017",
  nuit2016: "Nuit de l'info 2016",
  nuit2015: "Nuit de l'info 2015",
  nuit2014: "Nuit de l'info 2014",
  nuit2013: "Nuit de l'info 2013",
  nuit2012: "Nuit de l'info 2012",
  nuit2011: "Nuit de l'info 2011",
  nuit2010: "Nuit de l'info 2010",
  nuit2009: "Nuit de l'info 2009",
  nuit2008: "Nuit de l'info 2008",
  nuit2007: "Nuit de l'info 2007",
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
      theme = themes[Math.floor(Math.random() * themes.length)];
      const parsedTasks = z.array(taskSchema).parse(tasksData);
      setTasks(parsedTasks);
    } catch (error) {
      console.error("Error parsing tasks:", error);
    }
  }, []);

  return (
    <>
      <div className="hidden h-screen flex-1 flex-col space-y-8 p-10 md:flex font-Inter">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center justify-start gap-4">
            <img src={logo[theme]} alt="Nuit Logo" className="w-16" />
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                {"Bon retour à " + themeNames[theme]}
              </h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
