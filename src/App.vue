<template>
  <div id="app">
    <CellCalendar month="12" year="2019" :value="mock"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CellCalendar from '@/components/CellCalendar.vue';
import * as API from '@/./api';

@Component({
  components: {
    CellCalendar,
  },
})
export default class App extends Vue {
    private mock: API.Data[] = [
      {
        date: '2019-11-01',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-01',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-02',
        all: 5,
        done: 2,
      },
      {
        date: '2019-12-03',
        all: 5,
        done: 2,
      },
      {
        date: '2019-12-04',
        all: 5,
        done: 3,
      },
      {
        date: '2019-12-05',
        all: 5,
        done: 2,
      },
      {
        date: '2019-12-06',
        all: 5,
        done: 5,
      },
      {
        date: '2019-12-07',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-08',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-09',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-10',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-11',
        all: 5,
        done: 3,
      },
      {
        date: '2019-12-12',
        all: 5,
        done: 5,
      },
      {
        date: '2019-12-13',
        all: 5,
        done: 0,
      },
      {
        date: '2019-12-14',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-15',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-16',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-17',
        all: 5,
        done: 0,
      },
      {
        date: '2019-12-18',
        all: 5,
        done: 5,
      },
      {
        date: '2019-12-19',
        all: 5,
        done: 3,
      },
      {
        date: '2019-12-20',
        all: 5,
        done: 2,
      },
      {
        date: '2019-12-21',
        all: 5,
        done: 5,
      },
      {
        date: '2019-12-22',
        all: 5,
        done: 2,
      },
      {
        date: '2019-12-23',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-24',
        all: 5,
        done: 5,
      },
      {
        date: '2019-12-25',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-26',
        all: 5,
        done: 4,
      },
      {
        date: '2019-12-27',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-28',
        all: 5,
        done: 1,
      },
      {
        date: '2019-12-29',
        all: 5,
        done: 2,
      },
      {
        date: '2019-12-30',
        all: 5,
        done: 3,
      },
      {
        date: '2019-12-31',
        all: 5,
        done: 0,
      },
    ];
}
</script>

<style lang="less">
    body {
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
