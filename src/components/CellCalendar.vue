<template>
    <div class="hello">
        <p v-for="week in daysArray">
            <span v-for="day in week">
                {{day ? day : ''}}
            </span>
        </p>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class CellCalendar extends Vue {
        @Prop({default: () => new Date().getFullYear()})
        private year!: number;

        @Prop({default: () => new Date().getMonth() + 1})
        private month!: number;

        @Prop(Boolean)
        private sundayFirst!: boolean;

        private get daysArray(): number[][] {
            const result: number[][] = [];
            const days: number[] = [];
            const firstDay: Date = new Date(`${this.month} 01 ${this.year}`);
            let offset: number = firstDay.getDay();

            if (!this.sundayFirst) {
                offset = offset === 0 ? 6 : offset - 1;
            }


            while (offset--) {
                days.push(0); // TODO: write last month days here
            }

            while (firstDay.getMonth() === this.month - 1) {
                days.push(firstDay.getDate());
                firstDay.setDate(firstDay.getDate() + 1);
            }

            while (firstDay.getDay() !== (this.sundayFirst ? 0 : 1)) {
                days.push(0); // TODO: write last month days here
                firstDay.setDate(firstDay.getDate() + 1);
            }

            while (days.length) {
                result.push(days.splice(0, 7));
            }

            return result;
        }
    }
</script>

<style scoped lang="less">

</style>
