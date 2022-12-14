import React from "react";

export default (tasks) => {
    return (
        <div>
            {
            tasks.tasks.map((task, index) => {
                return (
                    <div
                        key={index}
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