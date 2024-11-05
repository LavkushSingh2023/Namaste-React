const heading = [React.createElement(
    'div',
    {id: 'parent1'},
    React.createElement(
        'div',
        {id: 'child1'},
        [React.createElement(
            'h1',
            {id: 'heading1'},
            'Hi i am h1'
        ),
            React.createElement(
                'h2',
                { id: 'heading2' },
                'Hi i am h2'
            )]
    )
),
    React.createElement(
        'div',
        { id: 'parent2' },
        React.createElement(
            'div',
            { id: 'child2' },
            [React.createElement(
                'h1',
                { id: 'heading1' },
                'Hi i am h1'
            ),
            React.createElement(
                'h2',
                { id: 'heading2' },
                'Hi i am h2'
            )]
        )
    )]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)

   