var myApp = new Vue({
	el:'.todoapp',              
	data:{
		tasks:[
			{name:'吃饭',isCompleted:true},
			{name:'睡觉',isCompleted:false},
			{name:'打豆豆',isCompleted:true}
		],
		newTask:'',
		all:false,
		myShow:1,
		myIndex:-1
	},
	computed:{
		count:function(){
			return this.tasks.filter(function(item){return item.isCompleted == false}).length;
		},
		myTasks:function(){
			if(this.myShow === 1){//全选 
				return this.tasks;
			}else if(this.myShow === 2){//只显示未完成
				return this.tasks.filter(function(item){return item.isCompleted == false});
			}else{//只显示已完成
				return this.tasks.filter(function(item){return item.isCompleted == true});
			}
		}
	},
	methods:{
		del:function(index){
			// console.log(index);
			this.tasks.splice(index,1);
		},
		add:function(){
			if(this.newTask== '')return;
			this.tasks.push({name:this.newTask,isCompleted:false});
			this.newTask = '';
		},
		toggleAll:function(){
			// console.log(111);
			// for(var i=0;i<this.tasks.length;i++){
			// 	this.tasks[i].isCompleted = this.all;
			// }
			var that = this;
			//映射
			this.tasks = this.tasks.map(function(item){
				item.isCompleted = that.all;
				return item;
			});
		},
		clearCompleted:function(){
			// map reduce filter
			// [2,3,4]
			this.tasks = this.tasks.filter(function(item){return item.isCompleted == false});
		},
		//约定：如果是1 --> 全部 
		myAll:function(){
			this.myShow = 1;
		},
		myActive:function(){	
			this.myShow = 2;
		},
		myCompleted:function(){
			this.myShow = 3;
		},
		edit:function(index){
			this.myIndex = index;
		},
		save:function(){
			this.myIndex = -1;
		}
	}
});