import React from 'react';

import DailyLog from './DailyLog';

export default function DailyLogWrapper() {
  return (
    <div className="container">
      <DailyLog date={new Date()} />
    </div>
  );
}
