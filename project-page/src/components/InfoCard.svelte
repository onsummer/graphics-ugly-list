<script>
  import { Card, CardHeader, CardBody } from "sveltestrap";
  export let title;
  export let contents;

  const inlineCss = /* css */`
    margin: 0 .5rem;
  `
</script>

<Card style={inlineCss.trim()}>
  <CardHeader>
    <span class={"header-span"}>{title}</span>
  </CardHeader>
  <CardBody>
    <div class={"card-body-container"}>
      {#each contents as content}
        <li>{content}</li>
      {/each}
    </div>
  </CardBody>
</Card>

<style>
  .header-span {
    font-size: 1.2rem;
  }

  .card-body-container {
    display: flex;
    flex-direction: column;
  }
</style>
