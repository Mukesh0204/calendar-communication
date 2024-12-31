import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus, FiMoreVertical, FiClock } from 'react-icons/fi';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskBoard = ({ tasks, onTaskMove, onTaskAdd, onTaskEdit }) => {
  const columns = {
    todo: { title: 'To Do', color: 'bg-gray-100' },
    inProgress: { title: 'In Progress', color: 'bg-blue-100' },
    completed: { title: 'Completed', color: 'bg-green-100' }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    onTaskMove({
      taskId: result.draggableId,
      fromStatus: result.source.droppableId,
      toStatus: result.destination.droppableId,
      newIndex: result.destination.index
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="bg-white rounded-lg shadow-sm">
            <div className={`p-4 ${column.color} rounded-t-lg`}>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{column.title}</h3>
                <button
                  onClick={() => onTaskAdd(columnId)}
                  className="p-1 hover:bg-white/50 rounded"
                >
                  <FiPlus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="p-4 min-h-[200px]"
                >
                  {tasks
                    .filter(task => task.status === columnId)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <motion.div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`
                              p-4 mb-3 rounded-lg border border-gray-200
                              ${snapshot.isDragging ? 'shadow-lg' : 'shadow-sm'}
                              bg-white
                            `}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">
                                  {task.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                  {task.description}
                                </p>
                              </div>
                              <button
                                onClick={() => onTaskEdit(task)}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <FiMoreVertical className="w-4 h-4 text-gray-400" />
                              </button>
                            </div>
                            
                            {task.dueDate && (
                              <div className="flex items-center mt-3 text-sm text-gray-500">
                                <FiClock className="w-4 h-4 mr-1" />
                                {task.dueDate}
                              </div>
                            )}

                            {task.assignee && (
                              <div className="mt-3 flex items-center">
                                <img
                                  src={task.assignee.avatar}
                                  alt={task.assignee.name}
                                  className="w-6 h-6 rounded-full"
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                  {task.assignee.name}
                                </span>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default TaskBoard; 