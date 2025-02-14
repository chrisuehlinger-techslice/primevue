const ChartProps = [
    {
        name: "type",
        type: "string",
        default: "null",
        description: "Type of the chart."
    },
    {
        name: "data",
        type: "any",
        default: "null",
        description: "Data to display."
    },
    {
        name: "options",
        type: "any",
        default: "null",
        description: "Options to customize the chart."
    },
    {
        name: "width",
        type: "number",
        default: "null",
        description: "Width of the chart in non-responsive mode."
    },
    {
        name: "height",
        type: "number",
        default: "null",
        description: "Height of the chart in non-responsive mode."
    }
];

const ChartEvents = [
    {
        name: "select",
        description: "Callback to invoke when a tab gets expanded.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Browser event"
            },
            {
                name: "dataset",
                type: "object",
                description: "Selected dataset"
            },
            {
                name: "element",
                type: "object",
                description: "Selected element"
            },
            {
                name: "element._datasetIndex",
                type: "number",
                description: "Index of the dataset in data"
            },
            {
                name: "element._index",
                type: "number",
                description: "Index of the data in dataset"
            }
        ]
    }
];

module.exports = {
    chart: {
        name: "Chart",
        description: "Chart components are based on Charts.js, an open source HTML5 based charting library.",
        props: ChartProps,
        events: ChartEvents
    }
};
