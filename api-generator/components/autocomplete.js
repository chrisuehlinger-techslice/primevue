const AutoCompleteProps = [
    {
        name: "value",
        type: "any",
        default: "null",
        description: "Value of the component."
    },
    {
        name: "suggestions",
        type: "array",
        default: "null",
        description: "An array of suggestions to display."
    },
    {
        name: "field",
        type: "any",
        default: "null",
        description: "Property name or getter function of a suggested object to resolve and display."
    },
    {
        name: "scrollHeight",
        type: "string",
        default: "200px",
        description: "Maximum height of the suggestions panel."
    },
    {
        name: "dropdown",
        type: "boolean",
        default: "false",
        description: "Displays a button next to the input field when enabled."
    },
    {
        name: "dropdownMode",
        type: "string",
        default: "blank",
        description: 'Specifies the behavior dropdown button. Default "blank" mode sends an empty string and "current" mode sends the input value.'
    },
    {
        name: "multiple",
        type: "boolean",
        default: "false",
        description: "Specifies if multiple values can be selected."
    },
    {
        name: "minLength",
        type: "number",
        default: "1",
        description: "Minimum number of characters to initiate a search."
    },
    {
        name: "delay",
        type: "number",
        default: "300",
        description: "Delay between keystrokes to wait before sending a query."
    },
    {
        name: "appendTo",
        type: "string",
        default: "null",
        description: 'Id of the element or "body" for document where the overlay should be appended to.'
    },
    {
        name: "forceSelection",
        type: "boolean",
        default: "false",
        description: "When present, autocomplete clears the manual input if it does not match of the suggestions to force only accepting values from the suggestions."
    },
    {
        name: "panelClass",
        type: "string",
        default: "null",
        description: "Style class of the overlay panel."
    },
    {
        name: "autoHighlight",
        type: "boolean",
        default: "false",
        description: "Highlights automatically the first item of the dropdown to be selected."
    }
];

const AutoCompleteEvents = [
    {
        name: "complete",
        description: "Callback to invoke to search for suggestions.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "query",
                type: "string",
                description: "Value to search with"
            }
        ]
    },
    {
        name: "item-select",
        description: "Callback to invoke when a suggestion is selected.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "value",
                type: "object",
                description: "Selected item"
            }
        ]
    },
    {
        name: "item-unselect",
        description: "Callback to invoke when a selected value is removed.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "value",
                type: "object",
                description: "Unselected item"
            }
        ]
    },
    {
        name: "dropdown-click",
        description: "Callback to invoke to when dropdown button is clicked.",
        arguments: [
            {
                name: "originalEvent",
                type: "object",
                description: "Original event"
            },
            {
                name: "query",
                type: "string",
                description: "Current value of the input field"
            }
        ]
    },
    {
        name: "clear",
        description: "Callback to invoke when input is cleared by the user."
    }
];

const AutoCompleteSlots = [
    {
        name: "item",
        description: "Custom content for the item."
    }
];

module.exports = {
    autocomplete: {
        name: "AutoComplete",
        description: "AutoComplete is an input component that provides real-time suggestions when being typed.",
        props: AutoCompleteProps,
        events: AutoCompleteEvents,
        slots: AutoCompleteSlots
    }
};
