<template>
    <div class="p-chart">
        <canvas ref="canvas" :width="width" :height="height" @click="onCanvasClick($event)"></canvas>
    </div>
</template>

<script>
// import * as Chart from 'chart.js/auto';

export default {
    props: {
        type: String,
        data: null,
        options: null,
        width: Number,
        height: Number
    },
    chart: null,
    mounted() {
        this.initChart();
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    },
    watch: {
        data: {
            handler() {
                this.reinit();
            },
            deep: true
        },
        type() {
            this.reinit();
        },
        options() {
            this.reinit();
        }
    },
    methods: {
        initChart() {
            import('chart.js/auto').then((module) => {
                if (this.chart) {
                    this.chart.destroy();
                    this.chart = null;
                }

                if (module && module.default) {
                    this.chart = new module.default(this.$refs.canvas, {
                        type: this.type,
                        data: this.data,
                        options: this.options
                    });
                }
            });
        },
        getCanvas() {
            return this.$canvas;
        },
        getBase64Image() {
            return this.chart.toBase64Image();
        },
        refresh() {
            if (this.chart) {
                this.chart.update();
            }
        },
        reinit() {
            this.initChart();
        },
        onCanvasClick(event) {
            if (this.chart) {
                const element = this.chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
                const dataset = this.chart.getElementsAtEventForMode(event, 'dataset', { intersect: true }, false);

                if (element && element[0] && dataset) {
                    this.$emit('select', {originalEvent: event, element: element[0], dataset: dataset});
                }
            }
        },
        generateLegend() {
            if (this.chart) {
                return this.chart.generateLegend();
            }
        }
    }
}
</script>

<style>
.p-chart {
    position: relative;
}
</style>