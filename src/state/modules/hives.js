import createResource from '@utils/store/vuex-resource'

const resource = createResource({ path: 'hives' })

// add some custom methods before exporting the store module
resource.getters.getHivesForApiary = (state) => (locationId) => {
  return (
    (state.data.hives &&
      state.data.hives.filter((hive) => hive.location_id === locationId)) ||
    []
  )
}

export default resource
