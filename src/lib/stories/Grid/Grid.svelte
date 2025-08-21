<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export interface GridProps {
    /** Grid contents goes here */
    children?: Snippet;
    /** Grid ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
    /** Grid spacing, affects Coulumns */
    spacing?: number;
    /** Optional Row spacing, defaults to 0 */
    rowSpacing?: number;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    spacing = 1,
    rowSpacing = 0,
  }: GridProps = $props();
</script>

<div
  class={['Grid', className].join(' ')}
  bind:this={ref}
  style={`--GridSpacing: ${spacing}; --GridRowSpacing: ${rowSpacing};`}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .Grid {
    --base-space: 4px;

    display: flex;
    flex-wrap: wrap;
    margin: calc(calc(var(--GridSpacing) * var(--base-space)) * -1);
  }
</style>
