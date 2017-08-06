<template>
  <div class="row">
      <div class="col-xs-12">
          <footer>
              <p>{{ status }}</p>
          </footer>
      </div>
  </div>
</template>

<script>
  export default {
    data : function(){
      return{
        status: 'All Servers are managed here'
      }
    }
  }
</script>
