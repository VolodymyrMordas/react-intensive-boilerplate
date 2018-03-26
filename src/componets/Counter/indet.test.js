import React from 'react';

import dom from 'react-test-renderer';
import Counter from './index';

const renderTree = dom.create(<Counter count = { 2 } />).toJSON();

it('some text', () => {
    expect(renderTree).toMatchSnapshot();
});
