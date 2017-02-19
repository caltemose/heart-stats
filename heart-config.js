window.HEART = window.HEART || {}
window.HEART.colors = {
    yellow: '255, 217, 102',
    blue: '164, 194, 244',
    red: '219, 64, 82'
}
window.HEART.config = [
    {
        key: 'sys',
        base: {
            mode: 'lines+markers',
            name: 'sys',
            marker: {
                color: 'rgb(' + window.HEART.colors.yellow + ')',
                size: 8
            },
            line: {
                color: 'rgb(' + window.HEART.colors.yellow + ')',
                width: 2
            }
        }
    },
    {
        key: 'dia',
        base: {
            mode: 'lines+markers',
            name: 'dia',
            marker: {
                color: 'rgb(' + window.HEART.colors.blue + ')',
                size: 8
            },
            line: {
                color: 'rgb(' + window.HEART.colors.blue + ')',
                width: 2
            }
        }
    },
    {
        key: 'bpm',
        base: {
            mode: 'lines+markers',
            name: 'bpm',
            marker: {
                color: 'rgb(' + window.HEART.colors.red + ')',
                size: 8
            },
            line: {
                color: 'rgb(' + window.HEART.colors.red + ')',
                width: 2
            }
        }
    }
]
window.HEART.defaults = {
    'min-sys': {
        x: [],
        y: [],
        value: 90,
        type: 'scatter',
        name: 'min sys',
        line: {
            color: 'rgba(' + window.HEART.colors.yellow + ', 0.6)',
            width: 1
        }
    },
    'max-sys': {
        x: [],
        y: [],
        value: 120,
        type: 'scatter',
        name: 'max sys',
        line: {
            color: 'rgba(' + window.HEART.colors.yellow + ', 0.6)',
            width: 1
        }
    },
    'min-dia': {
        x: [],
        y: [],
        value: 60,
        type: 'scatter',
        name: 'min dia',
        line: {
            color: 'rgba(' + window.HEART.colors.blue + ', 0.6)',
            width: 1
        }
    },
    'max-dia': {
        x: [],
        y: [],
        value: 80,
        type: 'scatter',
        name: 'max dia',
        line: {
            color: 'rgba(' + window.HEART.colors.blue + ', 0.6)',
            width: 1
        }
    }
}