import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Container } from './Container';
import { Card } from '../Card/Card';
import Themes from '../utils/themes';

export default {
    title: 'Container',
    decorators: [withKnobs],
};

export const container = () => {
    const theme = select('Theme', Themes, Themes.Default);

    return (
        <Container theme={theme}>
            <Card>
                Vertical
            </Card>

            <Card>
                Layout
            </Card>
        </Container>
    );
};

export const containerHorizontal = () => {
    const theme = select('Theme', Themes, Themes.Default);

    return (
        <Container theme={theme} horizontal>
            <Card>
                Horizontal
            </Card>
            <Card>
                Layout
            </Card>
        </Container>
    );
};
