var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];

var linechart = new ApexCharts(
    document.querySelector('#chart'),
    options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            },
            foreColor: '#484848',
            background: '#d5caaa',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        series: [{
            name: "Desktops",
            data: []
        }],
        colors: colors,
        grid: {
            row: {
                colors: ['#transparent', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.25
            },
        },
        // labels: series.monthDataSeries1.dates,
        xaxis: {
            // categories: ['Test 1', 'Test 2', 'Test 3', 'Exam 1', 'Test 4', 'Test 5', 'Final Exam'],
            title: {
                text: 'Global step',
            }
        },
        yaxis: {
            // min: 0,
            // max: 1000,
            // decimalsInFloat: 0,
            title: {
                text: 'Loss',
            },
        },
        xaxis: {
            axisTicks: {
                show: false,
            }
        }
    }
)
linechart.render();