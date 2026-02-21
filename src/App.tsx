import { useState } from 'react'
import type { Task } from './types';
import type { TaskStatus } from './types';
import { TaskList } from "./components/TaskList/TaskList";
import './App.css'
import TaskFilter from './components/TaskFilter/TaskFilter';
const initialTasks : Task[] = [
    {
        id: "001",
        title: "Task 1",
        description: "Description 1",
        status: "pending",
        priority: "low",
        dueDate: "2/19/2026"
    },
    {
        id: "002",
        title: "Task 2",
        description: "Description 2",
        status: "in-progress",
        priority: "medium",
        dueDate: "2/15/2026"
    },
    {
        id: "003",
        title: "Task 3",
        description: "Description 3",
        status: "completed",
        priority: "high",
        dueDate: "2/13/2026"
    }
];
type Filter = {
  status?: TaskStatus | "";
  priority?: 'low' | 'medium' | 'high' | "";
};
function App() {
    const [tasks,setTasks] = useState (initialTasks);
    const [filters, setFilters] = useState({status: "", priority:""})
    function handleStatusChange (taskId: string, taskStatus: TaskStatus) {
        setTasks((prev) => 
            prev.map((task) => {
                if(task.id === taskId){
                    return {...task, status: taskStatus}; 
                }
                else{
                    return task
                };
            })
        );
    }
    function handleDelete (taskId: string) {
        setTasks((prev) =>
            prev.filter((task) =>
                task.id !== taskId)
        )
    }
   function handleFilterChange(newFilters: Filter) {
  setFilters(prev => ({
    ...prev,
    ...newFilters
  }));
}
const filteredTasks = tasks.filter(task => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });
    return (
        <>
        <TaskFilter onFilterChange={handleFilterChange}/>
        <TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
        </>
    )
}
export default App