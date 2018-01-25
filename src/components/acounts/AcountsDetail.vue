<template>
  <div class="extends">
      <Row class="extends-row" :gutter="15">
          <Col span="4">
            <div class="cont">Hello</div>
          </Col>
          <Col span="8">
            <div class="cont">Test</div>
          </Col>
      </Row>
  </div>
</template>

<script>
export default {
  props: {
    row: Object
  }
};
</script>
