<template>
  <div>
    <h1>User Card List</h1>
    <div class="user-list">
      <UserCard v-for="(user, index) in users" :key="index" :user="user" :is-marker-visible="isMarkerVisible" />
    </div>
    <button class="btn" @click="loadNextPage" :disabled="loading">
      {{ 'Next' }}
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import UserCard from '@/components/UserCard.vue';
import { URLEnum } from '@/Config/Enums';

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
      currentPage: 1,
      usersPerPage: 5,
      loading: false,
    };
  },
  computed: {
    isMarkerVisible() {
      return true;
    },
  },
  mounted() {
    this.fetchUserData();
    return {
      loading: false,
    }
  },
  methods: {
    async fetchUserData() {
      try {
        this.loading = true;
        const apiUrls = Array.from({ length: this.usersPerPage }, () => URLEnum.URL);
        const responses = await Promise.all(apiUrls.map(url => axios.get(url)));
        const newUsers = responses.flatMap(response => {
          if (response.data.results) {
            return response.data.results;
          } else {
            return [response.data];
          }
        });

        this.users = [...this.users, ...newUsers];
        this.loading = false;

        setTimeout(() => {
          window.scrollTo(0, window.scrollY + 1000);
        }, 100);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
    async loadNextPage() {
      this.currentPage++;
      await this.fetchUserData();
    },
  },
};
</script>

<style>
.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: start;
  font-size: 14px;
  color: #333333;
}


.btn {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #4caf50;
  padding: 10px 25px;
  margin-top: 25px;
  cursor: pointer;
}

.btn:hover {
  background-color: #43d3e5;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #fff;
  padding: 10px 25px;
  margin-top: 25px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}

.btn:hover:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
}
</style>