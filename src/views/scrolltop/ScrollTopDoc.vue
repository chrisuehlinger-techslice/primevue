<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import ScrollTop from 'primevue/scrolltop';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Without any configuration, ScrollTop listens window scroll.</p>
<CodeHighlight>
&lt;ScrollTop /&gt;
</CodeHighlight>

				<h5>Threshold</h5>
				<p>When the vertical scroll position reaches a certain value, ScrollTop gets displayed. This value is
					defined with the <i>threshold</i> property that defaults to 400.</p>
<CodeHighlight>
&lt;ScrollTop :threshold="200" /&gt;
</CodeHighlight>

				<h5>Target Element</h5>
				<p>ScrollTop can also be assigned to its parent element by setting <i>target</i> as "parent".</p>
<CodeHighlight>
&lt;div style="height: 400px; overflow: auto"&gt;
	Content that overflows to container
	&lt;ScrollTop /&gt;
&lt;/div&gt;
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
                                <td>target</td>
                                <td>string</td>
                                <td>window</td>
                                <td>Target of the ScrollTop, valid values are "window" and "parent".</td>
                            </tr>
                            <tr>
                                <td>threshold</td>
                                <td>number</td>
                                <td>400</td>
                                <td>Defines the threshold value of the vertical scroll position of the target to toggle the visibility.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>pi pi-chevron-up</td>
                                <td>Icon to display.</td>
                            </tr>
							<tr>
                                <td>behavior</td>
                                <td>string</td>
                                <td>smooth</td>
                                <td>Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.</td>
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
                                <td>p-scrolltop</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-scrolltop-sticky</td>
                                <td>Container element when attached to its parent.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/scrolltop" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>

<CodeHighlight>
<template v-pre>
&lt;h5&gt;Window&lt;/h5&gt;
&lt;p&gt;Scroll down the page to display the ScrollTo component.&lt;/p&gt;
&lt;ScrollTop /&gt;

&lt;h5&gt;Element&lt;/h5&gt;
&lt;ScrollPanel style="width: 250px; height: 200px"&gt;
	&lt;p&gt;
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Vitae et leo duis ut diam.
		Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
		Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
		Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
		Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
		Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
		Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
		Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
		Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
		Mattis aliquam faucibus purus in massa tempor nec.
	&lt;/p&gt;
	&lt;ScrollTop target="parent" :threshold="100" class="custom-scrolltop" icon="pi pi-arrow-up" /&gt;
&lt;/ScrollPanel&gt;
</template>
</CodeHighlight>

<CodeHighlight>
/deep/ .custom-scrolltop {
    width: 2rem;
    height: 2rem;
    background-color: var(--primary-color);

	&:hover {
		background-color: var(--primary-color);
	}

    .p-scrolltop-icon {
        font-size: 1rem;
        color: var(--primary-color-text);
    }
}

</CodeHighlight>
			</TabPanel>
		</TabView>
	</div>
</template>