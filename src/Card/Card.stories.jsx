import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Card } from './Card';
import { Button } from '../Button/Button';
import Themes from '../utils/themes';

export default {
    title: 'Card',
    decorators: [withKnobs],
};

export const card = () => {
    const theme = select('Theme', Themes, Themes.Default);

    return (
        <div className={`theme-${theme}`}>
            <Card>
                <Button>Horizontal</Button>
                <Button>Sample</Button>
            </Card>

            <Card vertical>
                <Button>Vertical</Button>
                <Button>Sample</Button>
            </Card>

            <Card>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque interdum ligula eget condimentum pharetra. Praesent
                    aliquam diam ut elit placerat pretium. Duis molestie luctus
                    aliquet. Cras vitae tortor ut justo accumsan finibus. Aenean
                    finibus congue dolor, sed porta enim pulvinar vel. Nam ullamcorper
                    at ipsum vel pulvinar. Mauris erat quam, porttitor vitae nisl non,
                    aliquet malesuada leo. Aliquam imperdiet, neque eget tempor
                    hendrerit, mi nunc luctus metus, sit amet pharetra purus nisl
                    sit amet sem. Sed euismod urna nisi, quis pulvinar quam faucibus
                    vitae. Mauris fringilla odio quis maximus dignissim. Pellentesque
                    pharetra ligula vel felis suscipit, quis porttitor turpis ornare.
                    Aliquam suscipit turpis varius, dignissim ligula sed, tempus orci.
                    Pellentesque eget ligula tellus. Suspendisse potenti.
                </p>
            </Card>
        </div>
    );
};
