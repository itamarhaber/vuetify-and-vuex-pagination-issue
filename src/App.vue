<template>
  <div>
    <v-data-table
      disable-sort
      :footer-props="{
        itemsPerPageOptions: [10, 50, 100, -1]
      }"
      :headers="cols"
      :items="items.items"
      :items-per-page.sync="items.pageSize"
      :loading="items.loading"
      :page.sync="items.page"
      :server-items-length="items.total"
    >
    </v-data-table>
  </div>
</template>

<script>
import { createInstance } from 'vuex-pagination'

export default {
  name: 'app',
  data () {
    return {
      cols: [
        {
          text: 'ID',
          value: 'id',
        },
        {
          text: 'Value',
          value: 'value',
        },
      ],
    }
  },
  computed: {
    items: createInstance('items', {page: 1, pageSize: 10})
  },
}
</script>
