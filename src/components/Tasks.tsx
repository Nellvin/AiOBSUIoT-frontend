import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Header from 'components/Header';
import Wrapper from 'components/Wrapper';
import Task from 'components/Task';
import TaskModel from 'models/Task';

import 'styles/Tasks.scss';
import TaskForm from './TaskForm';
import CustomModal from './CustomModal';

const initialTasks : TaskModel[] = [{
  id: '1', title: 'Title1', user: 'floffler', finalDate: new Date(2021, 5, 5), text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
},
{
  id: '2', title: 'Title2', user: 'floffler', finalDate: new Date(2021, 5, 5), text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
},
{
  id: '3', title: 'Title3', user: 'floffler', finalDate: new Date(2021, 5, 5), text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
},
{
  id: '4', title: 'Title4', user: 'floffler', finalDate: new Date(2021, 5, 5), text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
}];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [isTaskModalOpen, setTaskModalOpen] = useState<boolean>(false);

  const closeModal = () => setTaskModalOpen(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { id: Math.random() * 100, ...newTask }]);
    closeModal();
  };

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8090/user/v1/roles');
    const data = await res.json();

    console.log(data);
  };

  const fetchData = () => {
    fetchTasks();
  };

  return (
    <div className="Tasks">
      <Header title="Tasks" />
      <Wrapper className="content">
        <div className="top">
          <h2>My Tasks</h2>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setTaskModalOpen(true)}
          >
            Add new task
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => fetchData()}
          >
            fetch
          </Button>
        </div>
        {tasks.map(((task) => (
          <Task
            key={task.id}
            task={task}
          />
        )))}
      </Wrapper>
      <CustomModal
        isOpen={isTaskModalOpen}
        closeModal={closeModal}
      >
        <TaskForm sumbit={handleAddTask} />
      </CustomModal>
    </div>
  );
}
