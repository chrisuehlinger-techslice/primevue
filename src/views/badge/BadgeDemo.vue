<template>
    <div>
        <div class="content-section introduction">
            <div class="feature-intro">
                <h1>Badge</h1>
                <p>Badge is a small status indicator for another element.</p>
            </div>
        </div>

        <div class="content-section implementation">
            <div class="card">
                <h5>Numbers</h5>
                <Badge value="2" class="p-mr-2"></Badge>
                <Badge value="8" severity="success" class="p-mr-2"></Badge>
                <Badge value="4" severity="info" class="p-mr-2"></Badge>
                <Badge value="12" severity="warning" class="p-mr-2"></Badge>
                <Badge value="3" severity="danger"></Badge>

                <h5 class="p-mb-4">Positioned Badge</h5>
                <i class="pi pi-bell p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge="2"></i>
                <i class="pi pi-calendar p-mr-4 p-text-secondary" style="font-size: 2rem" v-badge.danger="'10+'"></i>
                <i class="pi pi-envelope p-text-secondary" style="font-size: 2rem" v-badge.danger></i>

                <h5>Button Badge</h5>
                <Button type="button" label="Emails" badge="8" class="p-mr-2" badgeClass="p-badge-success"/>
                <Button type="button" label="Messages" icon="pi pi-users" class="p-button-warning" badge="8" badgeClass="p-badge-danger" />

                <h5>Sizes</h5>
                <Badge value="2" class="p-mr-2"></Badge>
                <Badge value="4" class="p-mr-2" size="large" severity="warning"></Badge>
                <Badge value="6" size="xlarge" severity="success"></Badge>
            </div>
        </div>

        <BadgeDoc />
    </div>
</template>

<script>
import BadgeDoc from './BadgeDoc';

export default {
    data() {
        return {

        }
    },
	components: {
		'BadgeDoc': BadgeDoc
	}
}
</script>