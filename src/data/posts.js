/**
 * Alcuni post dovranno rimanere senza immagine, quindi avere la proprietà image = undefined
 */

import puffinsSrc from '../assets/img/puffins.jpg';
import wagtailSrc from '../assets/img/wagtail.jpg';
import blackBirdSrc from '../assets/img/yellowheaded_blackbird.jpg';

const posts = [
    {
        id: 1,
        title: 'Titolo del Post',
        image: puffinsSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html', 'css'],
        published: true,
    },
    {
        id: 2,
        title: 'Titolo del Post',
        image: '' /* compila questo campo */,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'css'],
        published: true,
    },
    {
        id: 3,
        title: 'Titolo del Post',
        image: wagtailSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['js', 'php'],
        published: true,
    },
    {
        id: 4,
        title: 'Titolo del Post',
        image: blackBirdSrc,
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.',
        tags: ['html'],
        published: false,
    },
];

export default posts;
