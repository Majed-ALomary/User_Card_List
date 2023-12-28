<template>
    <div class="user-map" @click="toggleMarkerVisibility">
        <GmapMap :center="center" :zoom="14" style="height: 200px; width: 100%">
            <GmapMarker v-if="isMarkerVisible" :position="position"></GmapMarker>
        </GmapMap>
    </div>
</template>
  
<script>
export default {
    props: {
        coordinates: Object,
    },
    data() {
        return {
            isMarkerVisible: false,
        };
    },
    computed: {
        center() {
            return {
                lat: parseFloat(this.coordinates.latitude),
                lng: parseFloat(this.coordinates.longitude),
            };
        },
        position() {
            return {
                lat: parseFloat(this.coordinates.latitude),
                lng: parseFloat(this.coordinates.longitude),
            };
        },
    },
    watch: {
        isMarkerVisible(newValue) {
            console.log('Marker visibility changed:', newValue);
        },
    },
    methods: {
        toggleMarkerVisibility() {
            this.isMarkerVisible = !this.isMarkerVisible;
        },
    },
};
</script>

<style>
.user-map {
    margin: -10px;
}
</style>