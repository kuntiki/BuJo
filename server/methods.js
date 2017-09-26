import { Tasks } from '../imports/api/tasks.js';

Meteor.methods({
	addTaskForDay({task, day}) {
		Tasks.insert({
			text: task,
			state: "pending",
			createdAt: new Date(),
			daily: true,
			forDay: day,
		});
	},
	setComplete(taskId) {
		Tasks.update(taskId, { $set: { state: "completed" } });
	},
	deleteTask(taskId) {
		Tasks.remove(taskId);
	},
});