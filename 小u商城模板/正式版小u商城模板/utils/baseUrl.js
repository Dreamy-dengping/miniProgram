
 let baseUrl="";
 if (process.env.NODE_ENV == "development") {
 	// console.log("开发环境")
 	baseUrl="https://api.aslegou.top"
 } else {
 	// console.log("生产环境")
 	baseUrl="https://api.aslegou.top"
 }
 
 // 给图片拼上路径
 
export {
	baseUrl
}