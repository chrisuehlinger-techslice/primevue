<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Inplace from 'primevue/inplace';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Inplace requires <i>display</i> and <i>content</i> templates to define the content of each state.</p>

<CodeHighlight>
<template v-pre>
&lt;Inplace&gt;
    &lt;template #display&gt;
        &lt;span class="pi pi-search" style="vertical-align: middle"&gt;&lt;/span&gt;
        &lt;span style="margin-left:.5rem; vertical-align: middle"&gt;View Picture&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;img src="demo/images/nature/nature1.jpg" /&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</CodeHighlight>

                <h5>Closable</h5>
                <p><i>closable</i> property is handy within forms as it enables to switch back to output mode after editing is completed using a button displayed next to the form field.</p>
<CodeHighlight>
<template v-pre>
&lt;Inplace :closable="true"&gt;
    &lt;template #display&gt;
        &#123;&#123;text || 'Click to Edit'&#125;&#125;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;InputText v-model="text" autoFocus /&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</CodeHighlight>

				<h5>Lazy Data</h5>
				<p>Inplace allows lazy loading content so that the content gets initialized after getting opened instead of on load. Here is an example that loads, data of a table if the user decides to open the inplace.</p>
<CodeHighlight>
<template v-pre>
&lt;Inplace @open="loadData"&gt;
    &lt;template #display&gt;
        View Data
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;DataTable :value="cars"&gt;
            &lt;Column field="vin" header="Vin"&gt;&lt;/Column&gt;
            &lt;Column field="year" header="Year"&gt;&lt;/Column&gt;
            &lt;Column field="brand" header="Brand"&gt;&lt;/Column&gt;
            &lt;Column field="color" header="Color"&gt;&lt;/Column&gt;
        &lt;/DataTable&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import CarService from '../../service/CarService';

export default {
     data() {
        return {
            cars: null
        }
    },
    carService: null,
    created() {
        this.carService = new CarService();
    },
    methods: {
        loadData() {
             this.carService.getCarsSmall().then(data => this.cars = data);
        }
    }
}
</CodeHighlight>

				<h5>Properties</h5>
                <p>Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>active</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the content is displayed or not.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays a button to switch back to display mode.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Events</h5>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>open</td>
                                <td>event: browser event </td>
                                <td>Callback to invoke when inplace is opened.</td>
                            </tr>
                            <tr>
                                <td>close</td>
                                <td>event: browser event </td>
                                <td>Callback to invoke when inplace is closed.</td>
                            </tr>
						</tbody>
					</table>
				</div>

                <h5>Slots</h5>
				<div class="doc-tablewrapper">
                    <table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>display</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>-</td>
                            </tr>
						</tbody>
					</table>
                </div>

				<h5>Styling</h5>
				<p>Following is the list of structural style classes, for theming classes visit <router-link to="/theming">theming</router-link> page.</p>
				<div class="doc-tablewrapper">
					<table class="doc-table">
						<thead>
                            <tr>
                                <th>Name</th>
                                <th>Element</th>
                            </tr>
						</thead>
						<tbody>
                            <tr>
                                <td>p-inplace</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-inplace-display</td>
                                <td>Display container</td>
                            </tr>
                            <tr>
                                <td>p-inplace-content</td>
                                <td>Content container</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/inplace" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;h3&gt;Input&lt;/h3&gt;
&lt;Inplace :closable="true"&gt;
    &lt;template #display&gt;
        &#123;&#123;text || 'Click to Edit'&#125;&#125;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;InputText v-model="text" autoFocus /&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;

&lt;h3&gt;Image&lt;/h3&gt;
&lt;Inplace&gt;
    &lt;template #display&gt;
        &lt;span className="pi pi-search" style="vertical-align: middle"&gt;&lt;/span&gt;
        &lt;span style="margin-left:.5rem; vertical-align: middle"&gt;View Picture&lt;/span&gt;
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;img src="demo/images/nature/nature1.jpg" /&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;

&lt;h3&gt;Lazy Data&lt;/h3&gt;
&lt;Inplace @open="loadData"&gt;
    &lt;template #display&gt;
        View Data
    &lt;/template&gt;
    &lt;template #content&gt;
        &lt;DataTable :value="products"&gt;
            &lt;Column field="code" header="Code"&gt;&lt;/Column&gt;
            &lt;Column field="name" header="Name"&gt;&lt;/Column&gt;
            &lt;Column field="category" header="Category"&gt;&lt;/Column&gt;
            &lt;Column field="quantity" header="Quantity"&gt;&lt;/Column&gt;
        &lt;/DataTable&gt;
    &lt;/template&gt;
&lt;/Inplace&gt;
</template>
</CodeHighlight>

<CodeHighlight lang="javascript">
import ProductService from '../../service/ProductService';

export default {
     data() {
        return {
            text: null,
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    methods: {
        loadData() {
             this.productService.getProductsSmall().then(data => this.products = data);
        }
    }
}
</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>