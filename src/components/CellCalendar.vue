<template>
    <div class="month" :class="sundayFirst ? 'sunday-first' : 'monday-first'">
        <div class="week" v-for="week in cellArray">
            <div class="day" v-for="cell in week" :class="{'other-month': cell.month !== month}">
                {{cell.day}}
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

        private get cellArray(): TOOLS.Cell[][] {
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
                color: #000;
                border-top: 1px solid #ccc;
                flex: 20px 1 0;
                user-select: none;

                &.other-month {
                    border: none;
                    opacity: .1;
                }
            }
        }
        
        &.sunday-first {
            .week .day:first-child,
            .week .day:last-child {
                color: #f33;
            }
        }
        
        &.monday-first {
            .week .day:last-child,
            .week .day:nth-last-child(2) {
                color: #f33;
            }
         }
    }
</style>
