import React from 'react';

import MonthlyLog from './MonthlyLog';

export default function MonthlyLogWrapper() {
  return (
    <div className="container">
      <MonthlyLog date={new Date()} />
    </div>
  );
}
