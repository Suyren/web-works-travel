
var app = new Vue({
	el:'#app',
	data:{
		ajaxData:[],
		area:"",
		arrayArea:[],
		filterData:[],
	},
	created(){
		var vm = this;
		axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
		.then(function (response) {
			vm.ajaxData = response.data.result.records;
			
			var zone = response.data.result.records.map(function(arrayName){
				return arrayName.Zone;
			});
			zone.forEach(function(value){
				if(vm.arrayArea.indexOf(value) == -1){
					vm.arrayArea.push(value);
				}
			});
		})
		.catch(function (error) {
			console.log(error);
		})
	},
	methods:{
		areaFliter:function(){
			var vm = this;
			this.filterData = [];
			vm.filterData = vm.ajaxData.filter(function(item){
				if(item.Zone == vm.area){
					return true
				}
			});
		}
	}
})









