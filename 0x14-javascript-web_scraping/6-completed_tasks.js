#!/usr/bin/node
const request = require('request');

function computeCompletedTasks(apiUrl) {
  request(apiUrl, { json: true }, (err, res, data) => {
    if (err) {
      console.error('Error fetching data:', err);
      return;
    }

    const completedTasks = data.filter(task => task.completed);

    const completedTasksCount = {};

    completedTasks.forEach(task => {
      if (completedTasksCount.hasOwnProperty(task.userId)) {
        completedTasksCount[task.userId]++;
      } else {
        completedTasksCount[task.userId] = 1;
      }
    });

    console.log(completedTasksCount);
  });
}

computeCompletedTasks(process.argv[2]);

