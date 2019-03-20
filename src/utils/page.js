const Page = {
	buildSelectObj : function (startRow,pageSize,where,order){
		var request = {
			"json":{
				where,
				order
			},
			startRow,
			pageSize
		}
		return request;
	}
}


export default Page