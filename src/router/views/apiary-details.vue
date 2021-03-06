<template>
  <Layout title="Apiary details">
    <v-card tile class="sticky">
      <v-img
        v-if="apiary"
        class="align-end"
        height="150px"
        gradient="to bottom, rgba(255,255,255,.5), rgba(255,255,255,.9), rgba(255,255,255,.95)"
        :src="
          apiary.photo
            ? `https://picsum.photos/500/300?image=${apiary.id * 5 + 10}`
            : ''
        "
        :lazy-src="
          apiary.photo
            ? `https://picsum.photos/10/6?image=${apiary.id * 5 + 10}`
            : ''
        "
      >
        <template v-if="apiary.photo" v-slot:placeholder>
          <v-row class="ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        <v-container class="apiary-info">
          <div class="d-flex">
            <span class="display-1" v-text="apiary.title" />
            <v-spacer></v-spacer>
            <v-tooltip v-if="apiary.warning" left>
              <template v-slot:activator="{ on }">
                <v-icon class="notification warning" v-on="on">
                  mdi-alert-circle
                </v-icon>
              </template>
              <span>This apiary has issues</span>
            </v-tooltip>
            <v-tooltip v-if="apiary.shared" left>
              <template v-slot:activator="{ on }">
                <v-icon class="notification shared" v-on="on">
                  mdi-account-multiple
                </v-icon>
              </template>
              <span v-text="`This apiary is shared with you`" />
            </v-tooltip>
          </div>
          <div class="subtitle-1 d-flex">
            {{ apiary.city }}
            <v-spacer></v-spacer>
            <span class="float-right caption grey--text">
              last visit: {{ apiary.lastvisit }}
            </span>
          </div>
          <div class="hives">
            <HiveIcons :disabled="!editing" :apiary="apiary"></HiveIcons>
          </div>
        </v-container>
      </v-img>
    </v-card>

    <v-list class="inspection-list">
      <v-subheader v-if="selectedHives.length">
        {{ filteredInspections.length }} inspections for
        <ScaleTransition appear>
          <v-chip outlined close class="mx-2" @click:close="unselectHives">
            {{ selectedHives.length }} hive{{
              selectedHives.length !== 1 ? 's' : ''
            }}
          </v-chip>
        </ScaleTransition>
      </v-subheader>
      <v-subheader v-else>
        {{ inspectionsForApiary.length }} inspections. Click hives to filter.
      </v-subheader>

      <ScaleTransition group>
        <template v-for="item in filteredInspections">
          <v-list-item :key="`i-${item.id}`" two-line class="inspection-entry">
            <v-row ma-0>
              <v-col>
                <v-list-item-title v-text="item.created_at" />
                <v-list-item-subtitle
                  v-if="item.hive"
                  v-text="`hive ${item.hive}`"
                />
              </v-col>
              <v-col>
                {{ item.notes }}
              </v-col>
              <v-col cols="1">
                <v-icon v-if="item.impression < 0" class="red--text">
                  mdi-emoticon-sad-outline
                </v-icon>
                <v-icon v-if="item.impression > 0" class="green--text">
                  mdi-emoticon-happy-outline
                </v-icon>
                <v-icon v-if="item.impression === 0" class="grey--text">
                  mdi-emoticon-neutral-outline
                </v-icon>
              </v-col>
              <v-col cols="1" class="mr-2">
                <v-icon v-if="item.attention" class="red--text">
                  mdi-alert
                </v-icon>
              </v-col>
            </v-row>
          </v-list-item>
          <v-divider :key="`div-${item.id}`"></v-divider>
        </template>
      </ScaleTransition>
    </v-list>
    <v-snackbar v-model="snackbar.show" :timeout="snackbar.timeout">
      {{ snackbar.text }}
      <v-btn color="blue" text @click="snackbar.show = false">
        Close
      </v-btn>
    </v-snackbar>
  </Layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import HiveIcons from '@components/hive-icons.vue'
import { ScaleTransition } from 'vue2-transitions'
import Layout from '@layouts/back.vue'

export default {
  components: {
    HiveIcons,
    ScaleTransition,
    Layout,
  },
  filters: {
    firstletter: function(value) {
      if (!value) return '?'
      value = value.toString()
      return value.charAt(0).toUpperCase()
    },
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
  data: function() {
    return {
      snackbar: {
        show: false,
        timeout: 2000,
        text: 'notification',
      },
      selectedHives: [],
      inspectionsForApiary: [],
    }
  },
  computed: {
    ...mapState('locations', ['apiary', 'editing']),
    filteredInspections() {
      return this.inspectionsForApiary
      // .filter(...)
    },
    menuItems: function() {
      const items = [
        {
          title: 'Share Apiary&hellip;',
        },
        {
          title: 'Delete Apiary',
        },
      ]
      if (this.editing) {
        items.unshift({
          title: 'Add hive',
          action: 'locations/addHive',
        })
      } else {
        items.unshift({
          title: 'Edit apiary',
          action: 'locations/editOn',
        })
      }
      return items
    },
  },
  created() {
    this.$store.dispatch('locations/selectApiary', this.id)
    this.$store
      .dispatch('inspections/getInspectionsForApiary', this.id)
      .then((data) => {
        this.inspectionsForApiary = data
      })
  },
  methods: {
    ...mapActions('locations', ['unselectHives']),
    notify: function(text) {
      this.snackbar.text = text
      this.snackbar.show = true
    },
  },
}
</script>

<style lang="scss" scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: -45px;
  z-index: 1;
}

.notification {
  &.warning {
    color: red;
  }
  &.shared {
    color: gray;
  }
}
</style>
