export default {
    grid: {
        media: {
            name: [
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
                'xxxlarge'
            ],
            value: [
                'only screen and (min-width: 480px)',
                'only screen and (min-width: 768px)',
                'only screen and (min-width: 960px)',
                'only screen and (min-width: 1200px)',
                'only screen and (min-width: 1400px)',
                'only screen and (min-width: 1600px)'
            ]
        },
        size: {
            name: ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
            value: [5, 10, 15, 20, 25, 30, 35, 40],
        },
        column: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        item: {
            width: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            order: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
}
