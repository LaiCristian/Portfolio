import React from 'react';
import './App.css';

export function Stages({ stagePass }) {
  const stages = [
    { id: 9, value: '1.000.000' },
    { id: 8, value: '500.000' },
    { id: 7, value: '250.000' },
    { id: 6, value: '125.000' },
    { id: 5, value: '64.000' },
    { id: 4, value: '32.000' },
    { id: 3, value: '16.000' },
    { id: 2, value: '8.000' },
    { id: 1, value: '1.000' },
  ];

  const currentStage = stages.find((stage) => stage.id === stagePass);
  const passedStage = stagePass;
  const nextStage = stages.find((stage) => stage.id === stagePass+1);
  localStorage.setItem('stageValue', nextStage.value);
  return (
    <div className="game_stages">
      {stages.map((stage) => (
        <div
        key={stage.id}
        className={`stage ${stage.id <= passedStage ? 'passed' : ''} ${
          stage.id === stagePass + 1 ? 'current' : ''} ${stage.id === 3 ? 'block' : ''} ${stage.id === 6 ? 'block' : ''} ${stage.id === 9 ? 'block' : ''}`}
        id={`stage_${stage.id}`}
      >
        {stage.value}
      </div>
      ))}
      <div className="total_take">Total: {currentStage ? currentStage.value : '0'}$</div>
    </div>
  );
}

export const stages = [
  { id: 9, value: '1.000.000' },
  { id: 8, value: '500.000' },
  { id: 7, value: '250.000' },
  { id: 6, value: '125.000' },
  { id: 5, value: '64.000' },
  { id: 4, value: '32.000' },
  { id: 3, value: '16.000' },
  { id: 2, value: '8.000' },
  { id: 1, value: '1.000' },
];
