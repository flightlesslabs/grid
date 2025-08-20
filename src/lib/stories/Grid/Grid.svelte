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
    /** Optional Row spacing */
    rowSpacing?: number;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
    spacing = 1,
    rowSpacing,
  }: GridProps = $props();

  const rowSpacingModified = rowSpacing || rowSpacing === 0 ? rowSpacing : spacing;
</script>

<div
  class={['Grid', className].join(' ')}
  bind:this={ref}
  style={`--GridSpacing: ${spacing}; --GridRowSpacing: ${rowSpacingModified};`}
>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .Grid {
    --base-space: 8px;

    display: flex;
    flex-wrap: wrap;
    margin: calc(calc(var(--GridSpacing) * var(--base-space)) * -1);
  }
</style>
