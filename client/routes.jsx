import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { MainLayout } from '../imports/ui/layouts/MainLayout.jsx';
import App from '../imports/ui/App.jsx';

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<App />),
		});
	}
});