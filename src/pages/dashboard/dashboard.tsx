import { z } from "zod";
import React, { useEffect, useState } from "react";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { UserNav } from "./components/user-nav";
import { taskSchema } from "./data/schema";
import tasksData from "./data/tasks.json";

type Task = {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    try {
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
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
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
