import { observable, action } from 'mobx'

class DataStore {
	@observable icon = 'documents'
}

export default new DataStore()
