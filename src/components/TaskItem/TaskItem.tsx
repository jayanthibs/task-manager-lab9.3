import type { ChangeEvent } from "react";
import type { TaskItemProps, TaskStatus } from "../../types";

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps){

    function handleStatusChange (e: ChangeEvent<HTMLSelectElement>) {
        onStatusChange(task.id, e.target.value as TaskStatus)
    }

    function handleDelete () {
        onDelete(task.id)
    }

    return (
        <>
            <div className="task-list common">
                <div className="task-card">
                    <div className="task-header">
                    <div>
                        <h3>{task.title} </h3>
                        <p>{task.description}</p>
                    </div>
                    <div className="task-actions">
                        <select className={`status ${task.status}`} defaultValue={task.status} onChange={handleStatusChange}>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                        <button className="delete-btn" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                <div className="task-footer">
                    <span className={`priority ${task.priority}`}>Priority: {task.priority}</span>
                    <span className="due-date">Due: {task.dueDate}</span>
                </div>
            </div>
            </div>
        </>
    )
}

export { TaskItem };