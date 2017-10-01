import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { MainLayout } from '../imports/ui/layouts/MainLayout';
import DailyLogWrapper from '../imports/ui/DailyLogWrapper';
import MonthlyLogWrapper from '../imports/ui/MonthlyLogWrapper';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<DailyLogWrapper />),
    });
  },
});

FlowRouter.route('/monthly', {
  action() {
    mount(MainLayout, {
      content: (<MonthlyLogWrapper />),
    });
  },
});
