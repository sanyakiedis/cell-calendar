<template>
    <div class="month">
        <div class="week" v-for="week in daysArray">
            <div class="day" v-for="day in week" :class="{'in-this-month': day}">
                {{day ? day : ''}}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import * as TOOLS from '@/tools';

    @Component
    export default class CellCalendar extends Vue {
        @Prop({default: () => new Date().getFullYear()})
        private year!: number;

        @Prop({default: () => new Date().getMonth() + 1})
        private month!: number;

        @Prop(Boolean)
        private sundayFirst!: boolean;

        private get daysArray(): number[][] {
            return TOOLS.monthWeeks(this.month, this.year, this.sundayFirst);
        }
    }
</script>

<style scoped lang="less">
    .month {
        .week {
            display: flex;

            .day {
                display: inline-block;
                flex: 20px 1 0;

                &.in-this-month {
                    border-top: 1px solid #ccc;
                }
            }
        }
    }
</style>
