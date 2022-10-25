
/*
	需求:根据不同的运行环境,配置对应的基础路径地址
	拆解:
		1.根据不同的运行环境
			uni.getSystemInfoSync()
			通过以上API,可以获取到当前设备的相关信息,从platform属性中,可以得知当前的运行环境
		2.配置对应的基础路径地址
			根据platform的值,对baseUrl进行赋值即可
*/
// const {platform} = uni.getSystemInfoSync();
// // console.log('getSystemInfoSync',result)

let baseUrl;

// if(platform === "ios"){
// 	// 能进入这里说明当前环境是h5网页
// 	baseUrl = "/api"
// }else if(platform === "devtools"){
// 	// 能进入这里说明当前环境是小程序
// 	baseUrl = "http://localhost:3000"
// }

// #ifdef H5
	baseUrl = "/api"
// #endif

// #ifndef H5
	baseUrl = "http://localhost:3000"
// #endif


export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			// 以下路径是小程序发送请求使用的
			// url:"http://localhost:3000/getIndexData",
			
			// 以下路径是h5网页发送请求使用的
			// url:"/api/getIndexData",
			url:baseUrl + url,
			data,
			method,
			success:(res)=>{
				// console.log('res',res)
				const data = res.data;
				// this.setData({
				// 	indexData:data
				// })
				
				// uniapp中核心语法全部是使用Vue的
				// this.indexData = data;
				
				resolve(res.data);
			}
		})
	})
}