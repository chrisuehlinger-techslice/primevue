<template>
	<div class="content-section documentation">
		<TabView>
			<TabPanel header="Documentation">
				<h5>Import</h5>
<CodeHighlight lang="javascript">
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
</CodeHighlight>

				<h5>Getting Started</h5>
				<p>Avatar has three built-in display modes; "label", "icon" and "image".</p>
<CodeHighlight>
&lt;Avatar label="P" /&gt;
&lt;Avatar icon="pi pi-search" /&gt;
&lt;Avatar image="user.png" /&gt;
</CodeHighlight>

				<h5>Sizes</h5>
				<p><i>size</i> property defines the size of the Avatar with "large" and "xlarge" as possible values.</p>
<CodeHighlight>
&lt;Avatar label="P" size="large"/&gt;
</CodeHighlight>

				<h5>AvatarGroup</h5>
				<p>A set of Avatars can be displayed together using the <i>AvatarGroup</i> component.</p>
<CodeHighlight>
&lt;AvatarGroup&gt;
	&lt;Avatar label="P" /&gt;
	&lt;Avatar icon="pi pi-search" /&gt;
	&lt;Avatar image="user.png" /&gt;
	&lt;Avatar label="+2" /&gt;
&lt;/AvatarGroup&gt;
</CodeHighlight>

				<h5>Shape</h5>
				<p>Avatar comes in two different styles specified with the <i>shape</i> property, "square" is the default and "circle" is the alternative.</p>
<CodeHighlight>
&lt;Avatar label="P" shape="circle"/&gt;
</CodeHighlight>

				<h5>Badge</h5>
				<p>A badge can be added to an Avatar with the <router-link to="/badge">Badge</router-link> directive.</p>
<CodeHighlight>
&lt;Avatar image="user.png" size="xlarge" v-badge.danger="4" /&gt;
</CodeHighlight>

				<h5>Templating</h5>
				<p>Content can easily be customized with the default slot instead of using the built-in modes.</p>
<CodeHighlight>
&lt;Avatar&gt;
   Content
&lt;/Avatar&gt;
</CodeHighlight>

				<h5>Properties of Avatar</h5>
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
								<td>label</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the text to display.</td>
							</tr>
							<tr>
								<td>icon</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the icon to display.</td>
							</tr>
							<tr>
								<td>image</td>
								<td>string</td>
								<td>null</td>
								<td>Defines the image to display.</td>
							</tr>
							<tr>
								<td>size</td>
								<td>string</td>
								<td>null</td>
								<td>Size of the element, valid options are "large" and "xlarge".</td>
							</tr>
							<tr>
								<td>shape</td>
								<td>string</td>
								<td>square</td>
								<td>Shape of the element, valid options are "square" and "circle".</td>
							</tr>
						</tbody>
					</table>
				</div>

				<h5>Properties of AvatarGroup</h5>
				<p>Any property as style and class are passed to the main container element. There are no additional properties.</p>

				<h5>Styling of Avatar</h5>
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
								<td>p-avatar</td>
								<td>Container element.</td>
                            </tr>
							<tr>
								<td>p-avatar-image</td>
								<td>Container element in image mode.</td>
                            </tr>
							<tr>
								<td>p-avatar-circle</td>
								<td>Container element with a circle shape.</td>
                            </tr>
							<tr>
								<td>p-avatar-text</td>
								<td>Text of the Avatar.</td>
                            </tr>
							<tr>
								<td>p-avatar-icon</td>
								<td>Icon of the Avatar.</td>
                            </tr>
							<tr>
								<td>p-avatar-lg</td>
								<td>Container element with a large size.</td>
                            </tr>
							<tr>
								<td>p-avatar-xl</td>
								<td>Container element with an xlarge size.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Styling of AvatarGroup</h5>
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
								<td>p-avatar-group</td>
								<td>Container element.</td>
                            </tr>
						</tbody>
					</table>
				</div>

				<h5>Dependencies</h5>
				<p>None.</p>
			</TabPanel>

			<TabPanel header="Source">
				<a href="https://github.com/primefaces/primevue/tree/2.x/src/views/avatar" class="btn-viewsource" target="_blank" rel="noopener noreferrer">
					<span>View on GitHub</span>
				</a>
<CodeHighlight>
<template v-pre>
&lt;div class="p-grid"&gt;
	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Label&lt;/h5&gt;
			&lt;Avatar label="P" class="p-mr-2" size="xlarge" /&gt;
			&lt;Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/&gt;
			&lt;Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Label - Circle&lt;/h5&gt;
			&lt;Avatar label="P" class="p-mr-2" size="xlarge" shape="circle" /&gt;
			&lt;Avatar label="V" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle"  /&gt;
			&lt;Avatar label="U" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle"  /&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Label - Badge&lt;/h5&gt;
			&lt;Avatar label="U" size="xlarge" style="background-color:#4caf4f; color: #ffffff" v-badge="4" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Icon&lt;/h5&gt;
			&lt;Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" /&gt;
			&lt;Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff"/&gt;
			&lt;Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Icon - Circle&lt;/h5&gt;
			&lt;Avatar icon="pi pi-user" class="p-mr-2" size="xlarge" shape="circle" /&gt;
			&lt;Avatar icon="pi pi-user" class="p-mr-2" size="large" style="background-color:#2196F3; color: #ffffff" shape="circle" /&gt;
			&lt;Avatar icon="pi pi-user" class="p-mr-2" style="background-color:#9c27b0; color: #ffffff" shape="circle" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;

		&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Icon - Badge&lt;/h5&gt;
			&lt;Avatar icon="pi pi-user" size="xlarge" v-badge="4"/&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;

&lt;div class="p-grid"&gt;
	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Image&lt;/h5&gt;
			&lt;Avatar image="demo/images/avatar/amyelsner.png" class="p-mr-2" size="xlarge" shape="circle" /&gt;
			&lt;Avatar image="demo/images/avatar/asiyajavayant.png" class="p-mr-2" size="large" shape="circle" /&gt;
			&lt;Avatar image="demo/images/avatar/onyamalimba.png" class="p-mr-2" shape="circle" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Avatar Group&lt;/h5&gt;
			&lt;AvatarGroup class="p-mb-3"&gt;
				&lt;Avatar image="demo/images/avatar/amyelsner.png" size="large" shape="circle"/&gt;
				&lt;Avatar image="demo/images/avatar/asiyajavayant.png" size="large" shape="circle"/&gt;
				&lt;Avatar image="demo/images/avatar/onyamalimba.png" size="large" shape="circle"/&gt;
				&lt;Avatar image="demo/images/avatar/ionibowcher.png" size="large" shape="circle"/&gt;
				&lt;Avatar image="demo/images/avatar/xuxuefeng.png" size="large" shape="circle"/&gt;
				&lt;Avatar label="+2" shape="circle" size="large" style="background-color:#9c27b0; color: #ffffff" /&gt;
			&lt;/AvatarGroup&gt;
		&lt;/div&gt;
	&lt;/div&gt;

		&lt;div class="p-col-12 p-md-4"&gt;
		&lt;div class="card"&gt;
			&lt;h5&gt;Image - Badge&lt;/h5&gt;
			&lt;Avatar image="demo/images/organization/walter.jpg" size="xlarge" v-badge.danger="4" /&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/div&gt;
</template>
</CodeHighlight>

			</TabPanel>
		</TabView>
	</div>
</template>