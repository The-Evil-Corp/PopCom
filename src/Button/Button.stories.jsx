import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Button } from './Button';
import Themes from '../utils/themes';

export default {
    title: 'Button component',
    decorators: [withKnobs],
};

export const button = () => {
    const theme = select('Theme', Themes, Themes.Default);

    return (
        <div className={`theme-${theme}`}>
            <Button>Primary</Button>
            <Button variant="brand">Brand</Button>
            <Button variant="themed">Themed</Button>
            <Button variant="success">Success</Button>
            <Button disabled>Disabled</Button>
        </div>
    );
};
