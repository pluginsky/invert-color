// import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Tabs } from './Tabs';

const items = [
  {
    name: 'Elements',
    id: 'elements',
  },
  {
    name: 'Colors',
    id: 'colors',
  },
] as any;

describe.skip('Tabs', () => {
  it('should render tabs component', () => {
    const onChange = jest.fn();

    // const {getByText} = render(<Tabs items={items} active="elements" onChange={onChange} />);

    // expect(getByText('Elements')).toBeInThe
    // expect(getByText('Colors')).toBeInThe
  });

  it('should change active tab', () => {
    const onChange = jest.fn();

    const activeTab = 'colors';

    // const {getByText} = render(
    //   <Tabs items={items} active={activeTab} onChange={onChange} />
    // );

    // fireEvent.click(getByText('Elements'));

    // expect(onChange).toHaveBeenCalledWith('elements');
  });
});
