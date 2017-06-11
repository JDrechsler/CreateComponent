import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	template: require("./Template.html")
})
export default class Template extends Vue {

	get state() {
		return store.state
	}
}