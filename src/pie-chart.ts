import Chart from "chart.js";

export class PieChart {

    constructor() {
        Chart.defaults.global.defaultFontSize = 20;
    }

    public myDoughnutChart!: Chart;

    public init() {

        Chart.defaults.global.defaultFontSize = 20;
            Chart.pluginService.register({
                beforeRender: function (chart: any) {
                    if (chart.config.options.showAllTooltips) {
                        chart.pluginTooltips = [];
                        chart.config.data.datasets.forEach(function (dataset: any, i: any) {
                            chart.getDatasetMeta(i).data.forEach(function (sector: any, j: any) {
                                chart.pluginTooltips.push(new Chart.Tooltip({
                                    _chart: chart.chart,
                                    _chartInstance: chart,
                                    _data: chart.data,
                                    _options: chart.options,
                                    _active: [sector]
                                }, chart));
                            });
                        });
                        chart.options.tooltips.enabled = false;
                    }
                },
                afterDraw: function (chart: any, easing: any) {
                    if (chart.config.options.showAllTooltips) {
                        if (!chart.allTooltipsOnce) {
                            if (easing !== 1)
                                return;
                            chart.allTooltipsOnce = true;
                        }
                        chart.options.tooltips.enabled = true;
                        Chart.helpers.each(chart.pluginTooltips, function (tooltip: any) {
                            tooltip.initialize();
                            tooltip.update();
                            tooltip.pivot();
                            tooltip.transition(easing).draw();
                        });
                        chart.options.tooltips.enabled = false;
                    }
                }
            });
            const ctx = document.getElementById('skillsCanvas');
            const data = {
                labels: [
                    "Backend development",
                    "Frontent development",
                    "Project management",
                    "Architecture",
                    "UX"
                ],
                datasets: [
                    {
                        data: [16, 8, 4, 8, 2],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            "#57C2DB",
                            "#4B966E",
                        ],
                    }]
            };
            const options = {
                legend: {
                    display: false,
                },
                showAllTooltips: true,
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem: any, data: any) {
                            const label = data.labels[tooltipItem.index];
                            return label;
                        }
                    },
                }
            };
            const cfg = {
                type: 'doughnut',
                data: data,
                options: options
            };
            this.myDoughnutChart = new Chart(ctx, cfg);

       
    }


}