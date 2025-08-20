<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Grid from './Grid.svelte';
  import type { StoryBookArgTypes } from '$lib/storybook-types.js';
  import Column from './Column/Column.svelte';
  import Row from './Row/Row.svelte';
  import Container from './Container.svelte';

  export const storyGridArgTypes: StoryBookArgTypes = {};

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    component: Grid,
    tags: ['autodocs'],
    argTypes: storyGridArgTypes,
  });
</script>

<!-- Default Grid -->
<Story name="Default" asChild>
  <Grid>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
  </Grid>
</Story>

<Story name="Columns Display" asChild>
  <Grid>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={2}><Container>2</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={3}><Container>3</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={4}><Container>4</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={5}><Container>5</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={6}><Container>6</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={7}><Container>7</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={8}><Container>8</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={9}><Container>9</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={10}><Container>10</Container></Column>
    <Column md={1}><Container>1</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={11}><Container>11</Container></Column>
    <Column md={1}><Container>1</Container></Column>

    <Column md={12}><Container>12</Container></Column>
  </Grid>
</Story>

<Story name="Sizing" asChild>
  <Grid>
    <Column md={4}>md: 4</Column>
    <Column md={4}>md: 4</Column>
    <Column md={4}>md: 4</Column>
  </Grid>
</Story>

<Story name="Spacing" asChild>
  <Grid spacing={3}>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
    <Column>Hola!</Column>
  </Grid>
</Story>

<Story name="Row Component" asChild>
  <Grid>
    <Row>
      <Column md={4}>md: 4</Column>
      <Column md={4}>md: 4</Column>
    </Row>
    <Row>
      <Column md={4}>md: 4</Column>
      <Column md={4}>md: 4</Column>
    </Row>
  </Grid>
</Story>

<Story name="Row Spacing" asChild>
  <Grid rowSpacing={3}>
    <Row>
      <Column md={4}>md: 4</Column>
      <Column md={4}>md: 4</Column>
    </Row>
    <Row>
      <Column md={4}>md: 4</Column>
      <Column md={4}>md: 4</Column>
    </Row>
  </Grid>
</Story>

<Story name="Nested Grid" asChild>
  <Grid>
    <Column md={4}>md: 4</Column>
    <Column md={4}>
      <Grid>
        <Column md={6}>Hola!</Column>
        <Column md={6}>Hola!</Column>
        <Column md={6}>Hola!</Column>
        <Column md={6}>Hola!</Column>
      </Grid>
    </Column>
    <Column md={4}>md: 4</Column>
  </Grid>
</Story>
