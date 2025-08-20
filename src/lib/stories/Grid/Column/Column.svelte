<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export type GridColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'flex';

  export const GridColumnSizeArray: GridColumnSize[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    'flex',
  ];

  export interface GridColumnProps {
    /** GridColumn contents goes here */
    children?: Snippet;
    /** GridColumn ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Breakpoint: sm */
    sm?: GridColumnSize;
    /** Breakpoint: md */
    md?: GridColumnSize;
    /** Breakpoint: lg */
    lg?: GridColumnSize;
    /** Breakpoint: xl */
    xl?: GridColumnSize;
    /** Breakpoint: 2 xl */
    xl2?: GridColumnSize;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    sm = 12,
    md,
    lg,
    xl,
    xl2,
  }: GridColumnProps = $props();

  const breakpoints = [
    { name: 'sm', value: sm },
    { name: 'md', value: md },
    { name: 'lg', value: lg },
    { name: 'xl', value: xl },
    { name: 'xl2', value: xl2 },
  ];

  function getBreakpointClasses() {
    let classNameBreakpoints = [];

    for (let index = 0; index < breakpoints.length; index++) {
      const element = breakpoints[index];

      if (!element.value) {
        continue;
      }

      if (element.value === 'flex') {
        classNameBreakpoints.push(`breakpoint--${element.name}-flex`);
        continue;
      }

      classNameBreakpoints.push(`breakpoint--${element.name}`);
    }

    return classNameBreakpoints;
  }

  function getBreakpointCssVariables() {
    let cssVariablesBreakpoints = [];

    for (let index = 0; index < breakpoints.length; index++) {
      const element = breakpoints[index];

      if (!element.value) {
        continue;
      }

      if (element.value === 'flex') {
        continue;
      }

      const calculatedValue = (100 / 12) * element.value;

      cssVariablesBreakpoints.push(`--GridColumnBreakpoint-${element.name}: ${calculatedValue}%`);
    }

    return cssVariablesBreakpoints.join(';');
  }
</script>

<div
  class={['GridColumn', ...getBreakpointClasses(), className].join(' ')}
  style={getBreakpointCssVariables()}
  bind:this={ref}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  @use '../../../scss/index.scss' as *;

  .GridColumn {
    width: 100%;
    margin: calc(var(--GridSpacing) * var(--base-space));

    &.breakpoint {
      &--sm {
        max-width: calc(
          var(--GridColumnBreakpoint-sm) - calc(calc(var(--GridSpacing) * var(--base-space) * 2))
        );
      }

      &--sm-flex {
        @media (min-width: $breakpoints-md) {
          flex: 1;
          width: initial;
        }
      }

      &--md {
        @media (min-width: $breakpoints-md) {
          max-width: calc(
            var(--GridColumnBreakpoint-md) - calc(calc(var(--GridSpacing) * var(--base-space) * 2))
          );
        }
      }

      &--md-flex {
        @media (min-width: $breakpoints-md) {
          flex: 1;
          width: initial;
        }
      }

      &--lg {
        @media (min-width: $breakpoints-lg) {
          max-width: calc(
            var(--GridColumnBreakpoint-lg) - calc(calc(var(--GridSpacing) * var(--base-space) * 2))
          );
        }
      }

      &--lg-flex {
        @media (min-width: $breakpoints-lg) {
          flex: 1;
          width: initial;
        }
      }

      &--xl {
        @media (min-width: $breakpoints-xl) {
          max-width: calc(
            var(--GridColumnBreakpoint-xl) - calc(calc(var(--GridSpacing) * var(--base-space) * 2))
          );
        }
      }

      &--xl-flex {
        @media (min-width: $breakpoints-xl) {
          flex: 1;
          width: initial;
        }
      }

      &--xl2 {
        @media (min-width: $breakpoints-xl2) {
          max-width: calc(
            var(--GridColumnBreakpoint-xl2) - calc(calc(var(--GridSpacing) * var(--base-space) * 2))
          );
        }
      }

      &--xl2-flex {
        @media (min-width: $breakpoints-xl2) {
          flex: 1;
          width: initial;
        }
      }
    }
  }
</style>
