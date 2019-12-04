<template>
    <div class="tracker">
        <svg :width="width"
             :height="width">
            <circle class="circle"
                    :style="circleStyle"
                    :stroke-width="stroke"
                    fill="transparent"
                    :r="radius"
                    :cx="width / 2"
                    :cy="width / 2"/>
        </svg>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Tracker extends Vue {
        @Prop({default: 0})
        private value!: number;

        @Prop({default: 50})
        private width!: number;

        @Prop({default: 4})
        private stroke!: number;

        private get circleStyle(): object {
            const circumference: number = this.radius * 2 * Math.PI;
            return {
                'stroke-dashoffset': circumference - this.value / 100 * circumference,
                'stroke-dasharray': circumference + ' ' + circumference,
            };
        }

        private get radius(): number {
            return this.width / 2 - this.stroke;
        }

    }
</script>

<style scoped lang="less">
    .tracker {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: relative;
    }

    .circle {
        stroke: #ef4747;
        transition: 0.35s stroke-dashoffset;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
</style>
