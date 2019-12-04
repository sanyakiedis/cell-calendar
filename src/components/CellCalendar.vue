<template>
    <div class="month" :class="sundayFirst ? 'sunday-first' : 'monday-first'">
        <div class="week" v-for="week in cellArray">
            <div class="day" v-for="cell in week" :class="{'other-month': cell.month !== parseInt(month)}">
                <p>{{cell.day}}</p>
                <tracker v-if="cell.month === parseInt(month)" :stroke="6" :value="cell.percent"></tracker>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as TOOLS from '@/tools';
    import * as API from '@/api';
    import Tracker from '@/components/Tracker.vue';

    @Component({components: {Tracker}})
    export default class CellCalendar extends Vue {
        @Prop({default: () => new Date().getFullYear()})
        private year!: number;

        @Prop({default: () => new Date().getMonth() + 1})
        private month!: number;

        @Prop(Boolean)
        private sundayFirst!: boolean;

        @Prop({default: () => []})
        private value!: API.Data[];

        private get cellArray(): API.Cell[][] {
            return TOOLS.getData(this.value, this.month, this.year, this.sundayFirst);
        }
    }
</script>

<style scoped lang="less">
    .month {
        .week {
            display: flex;

            .day {
                display: inline-block;
                color: #000;
                border-top: 1px solid #ddd;
                flex: 20px 1 0;
                max-height: 100px;
                user-select: none;
                padding: 3px;

                p {
                    margin: 0;
                }

                .tracker {
                    width: 100%;
                    height: 50px;
                }

                &.other-month {
                    border: none;
                    opacity: .1;
                }
            }
        }
        
        &.sunday-first {
            .week .day:first-child,
            .week .day:last-child {
                color: #ef4747;
            }
        }
        
        &.monday-first {
            .week .day:last-child,
            .week .day:nth-last-child(2) {
                color: #ef4747;
            }
         }
    }
</style>
