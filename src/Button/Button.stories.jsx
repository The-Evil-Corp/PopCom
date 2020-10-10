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
            <Button text="Primary" />
            <Button text="Success" variant="success" />
            <Button text="Disabled" disabled />
        </div>
    );
};
