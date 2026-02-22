<h2 align="center">Task Manager</h2>

A simple React + TypeScript application to manage tasks with status, priority, and due dates. Includes filtering, status updates, and deletion.

Installation & Setup:
--------------------
````bash
git clone https://github.com/jayanthibs/task-manager-lab9.3.git
cd task-manager-lab9.3
npm install
npm run dev
````

##Components Overview

#### TaskList

* Displays a list of tasks.
* Receives tasks as props and maps over them to render TaskItem components.
* Handles status updates and deletions through callbacks passed from the parent.

#### TaskItem

* Represents a single task card.
* Shows:
 - Task title and description
 - Status dropdown to change task state
 - Delete button
 - Task priority and due date
 - Updates the parent via onStatusChange and onDelete.

#### TaskFilter

* Provides filtering options for tasks.
* Allows filtering by:
  - Status (Pending, In Progress, Completed)
  - Priority (Low, Medium, High)
  - Calls onFilterChange when filters are updated.

### Reflections

How did you ensure unique keys for your list items?

I used each task’s id as a key when showing the list. This helps React keep track of tasks, update them correctly, and avoid errors when tasks are changed or removed.

What considerations did you make when implementing the filtering functionality?

I made the filters work for status, priority, or both. The task list updates right away when a filter is changed, and only shows tasks that match. The original tasks stay the same, and the app stays fast.

How did you handle state updates for task status changes?

When a task’s status changes, I update the state by creating a new version of the tasks array instead of modifying it directly. I use setTasks(prev => prev.map(...)) to go through each task, and when the id matches the task being updated, I return a new object with the updated status. React can then detect the change and re‑render the UI correctly.

What challenges did you face when implementing conditional rendering?

The challenge with conditional rendering was making sure each task always shows its status, priority, and delete button correctly. The UI updates smoothly when tasks change, are deleted, or filtered, keeping the layout consistent.



  