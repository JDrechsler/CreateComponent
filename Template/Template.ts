import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
	template: `<section>
	<h2>Template-Component</h2>
</section>`
})
export default class Template extends Vue {

	get state() {
		return store.state
	}
}