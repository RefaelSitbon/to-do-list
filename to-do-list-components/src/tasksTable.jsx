import React from "react";

export default (tasks) => {
    return (
        <div>
            {
            tasks.tasks.map(task => {
                return (
                    <div
                        completed={task.completed}
                        id={task.id}
                    >
                        {task.task}
                    </div>
                );
            })}
        </div>
    );
}