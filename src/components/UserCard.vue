<template>
    <div class="user-card">
        <div class="container-img">
            <img :src="user.picture.large" alt="User Avatar" class="user-avatar" />
        </div>
        <p><strong>Name:</strong> {{ user.name.first }} {{ user.name.last }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>Country:</strong> {{ user.location.country }}</p>
        <p><strong>Date of Birth:</strong> {{ DateofBirth }}</p>
        <UserMap :coordinates="user.location.coordinates" :is-marker-visible="isMarkerVisible" />
    </div>
</template>
  
<script>
import UserMap from '@/components/UserMap.vue';
import { formatDate } from '@/Config/Utils';

export default {
    components: {
        UserMap,
    },
    props: {
        user: Object,
        isMarkerVisible: Boolean,
    },
    computed: {
        DateofBirth() {
            return formatDate(this.user.dob.date);
        },
    },
};
</script>
  
<style>
.container-img {
    margin: -10px -10px 0px -10px;
    border-radius: 10px 10px 0px 0px;
    background: linear-gradient(145deg, #f0f8f0 0%, #46bfcf 80%);
}

.user-card {
    width: 17%;
    float: left;
    margin: 10px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 1px 8px 20px grey;
    animation: mover 0.5s alternate;
}

@keyframes mover {
    0% {
        transform: translateY(-10px);
    }

    100% {
        transform: translateY(0);
    }
}

.user-card .user-avatar {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    padding: 0.5rem;
    position: relative;
}

@media screen and (max-width: 600px) {
    .user-card {
        width: 100%;
        display: block;
        margin-bottom: 20px;
    }
}
</style>