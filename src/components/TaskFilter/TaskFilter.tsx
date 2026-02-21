// // types/index.ts
// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }
import type { TaskFilterProps, TaskStatus } from "../../types";
function TaskFilter({ onFilterChange }: TaskFilterProps) {
  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onFilterChange({ status: e.target.value as TaskStatus });
  }
  function handlePriorityChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onFilterChange({ priority: e.target.value as "low" | "medium" | "high" });
  }

  return (
    <div className="common">
    <div className="filter ">
      <div className="filter-status">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          onChange={handleStatusChange}
          defaultValue="All Statuses"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="filter-priority">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          defaultValue="All Priorities"
          onChange={handlePriorityChange}
        >
          <option value="">All Priorities</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>
    </div>
    </div>
  );
}
export default TaskFilter;
