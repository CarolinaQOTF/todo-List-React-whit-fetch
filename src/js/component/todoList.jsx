import React, { useState } from "react";

const Tasklist = () => {
	const [task, setTask] = useState("");

	const [listOfTasks, setListOfTasks] = useState([]);
	const handleTask = (e) => {
		if (e.key === "Enter") {
			if (task !== "") {
				setListOfTasks([...listOfTasks, task]);
				setTask(" ");
			} else {
				alert("Rellena el campo vacio");
			}
		}
	};

	const DeleteTarea = (nombre) => {
		confirm("¿ Estas seguro que deseas eliminar esta tarea ?");
		const auxTarea = listOfTasks.filter((item) => {
			if (nombre !== item) return item;
		});

		setListOfTasks(auxTarea);
	};

	return (
		<>
			<div className="container justify-content-center text-center mt-5">
				<h1>
					TodoList whit React <i class="fab fa-react fa-lg"></i>
				</h1>
				<input
					value={task}
					type="text"
					className="form-control"
					placeholder="Enter a task"
					aria-label="Username"
					aria-describedby="basic-addon1"
					onChange={(e) => setTask(e.target.value)}
					onKeyDown={handleTask}
				/>
				<div id="listContainer" className="container my-2 py-4">
					{listOfTasks.map((item, index) => (
						<div className="border-bottom mt-2">
							<h3 key={index}>
								{item}{" "}
								<button
									type="button"
									className="btn btn-outline-primary btn-sm ms-3 pe-3"
									onClick={() => DeleteTarea(item)}>
									Delete
								</button>
							</h3>
						</div>
					))}
				</div>
			</div>
			;
		</>
	);
};

export default Tasklist;
