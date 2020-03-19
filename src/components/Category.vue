 
 <template>

 <!-- Page Content -->
 <div>
  <div class="container" fluid>
    <div class="row" >
 
      <div class="col-lg-10 my-1">
        <div class="list-group" id="widthChange" >
          <a href="#" class="list-group-item">{{categories.Category_name}}</a>
        </div>

      </div>

      <!-- /.col-lg-3 -->
    </div>
  </div>
  </div>
       </template>

       <script>
       export default {
         props: ['categories']
       }
       </script>

       <style scoped>
          #widthChange{
            width: 200px;
          }
       
       </style>