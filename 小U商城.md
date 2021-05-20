小U商城移动端应用

## 项目背景

随着信息时代的兴起,互联网在不知不觉中带领大众走过了数字化时代进入到了智能移动时代，移动端设备越来越得到普及,从过去单一的通讯工具变成如今人人不可或缺的多媒体终端,用户因此更加注重产品的互动体验.移动端设备的快速发展改变着用户的。

随着移动互联网在各行业广泛应用,人类社会已经迈入碎片化时代,基于手机,PDA及掌上电脑等无线终端来进行电子商务活动的移动购物成为主流，移动电商深入人们的日常生活，未来它在各个方面的发展将更加契合人们的生活。这也是小U商城切入市场的契机。

小U商城移动端应用属于B2C电商类似于京东自营、亚马逊自营等运营模式，商城自身销售商品给顾客。系统提供运营后台供商城管理使用。小U商城在移动端上实现了真正的跨平台，涵盖了主流的小程序产品如微信小程序、支付宝小程序、百度小程序等，同时兼容原生的App端（ios和android）和H5端。

## 技术栈：

### 架构描述

小U商城前台采用：

使用以vue.js为主的uinapp框架来开发移动端项目；

在开发思想上uniapp更加接近vue和小程序，降低开发成本，能够实现一套代码多端编译；

完整使用了电子商务项目中的业务逻辑和主流Web开发技术、各项解决方；

功能上有商品模块、购物车模块、订单模块、会员等模块构成；

小U商城运营后台由：

​	用户管理、

​	商品管理、

​	订单管理、

​	系统管理、

​	销售数据可视化等功能组成；

整体采用前后端分离模式，后端使用node结合express开发框架及mysql数据库+前端基于vue.js的开发框架uniapp实现；

系统采用JWT的认证方案，并解决了权限管理问题。使用HBuildX工具一键运行发布。

## 项目价值

随着移动端电子商务的发展现如今市面上端的形态多种多样，H5、原生App端、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。而基于uniapp框架开发的的小U商城系统正是解决了企业对于多端的需求问题，同时为开发者提供了完整，高价值的项目经验。

## 1.入门

### 1.1 快速开始

#### 介绍

小U商城移动端项目是优就业 web教研室五室讲师与2020年进行开发，项目上使用前后端分离，由web教研室三室提供商城数据接口，由web教研室四室提供商城后台管理系统。

#### 系统要求

##### 开发工具

 微信小程序IDE+其他厂家小程序IDE+HBuilderX-IDE+手机模拟器

##### 硬件要求

测试环境基本要求：window7  window10系统即可

##### 软件要求

需要自行安装 mysql5.6、vue-cli、node、npm

需要启动 mysql-server、商城数据接口服务  、后台商城管理系统服务

#### 项目结构说明

```python
shop_U 项目框架目录
	common 公共代码目录
    	css:项目样式目录
         js:项目公共js目录
    components 项目公共页面组件目录
    pages 项目页面目录
    	index:商城首页文件
        classify:商品分类文件
        product:商品列表文件
        details:商品详情文件
        cart:购物车文件
        confirm:订单确认文件
       	order:订单详情文件
        mine:个人中心文件
        login:登录文件
        smssend:短信登录文件
        search:商品搜索文件   
    static 静态文件目录
    	index:首页静态目录
        classify:商品分类静态目录
        detail:商品详情静态目录
        mine:个人中心静态目录
        tabbar:选项卡静态目录
    unpackage 项目各平台运行包目录
    	dist:各平台项目运行包目录
            dev:各平台本地测试运行包目录
            build:各平台正式发行包目录
    utils 常用工具类目录
    	ActionImage.js:图片自适应处理文件
        api.js:常用api文件
        config:项目配置文件文件
        request.js:项目网络请求文件
    app.vue 项目根组件
    main.js 项目入口文件
    mainfest.json:多端配置文件
    pages.json:项目全局配置文件
    uni.css:常用css样式变量文件
```

#### 联系我们

作者：web教研室 五室

### 1.2 环境搭建

#### 小程序开发工具

微信小程序工具下载地址:https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

百度小程序工具下载地址：https://smartprogram.baidu.com/docs/develop/devtools/history/

支付宝小程序工具下载地址：https://opendocs.alipay.com/mini/ide/downloa

其他平台去其对应官方平台查找即可,这里以微信小程序为主

下载完默认安装即可

#### 安装HBuildX工具

下载地址：https://www.dcloud.io/hbuilderx.htm

下载完默认安装即可

![C:\Users\zhangbin\Desktop\小u商城](C:\Users\zhangbin\Desktop\小u商城\QQ截图20200906162502.png)

#### 安装手机模拟器

下载地址：https://www.ldmnq.com/

下载完默认安装即可

![](C:\Users\zhangbin\Desktop\小u商城\QQ截图20200906162926.png)



#### 安装node

下载地址：https://nodejs.org/en/download/

下载完默认安装即可

查看node版本号

```
node --version
```

注册淘宝镜像（为了提高下载速度）

```
npm config set registry "https://registry.npm.taobao.org" 
```

配置后可通过下面方式来验证是否成功

```
npm config get registry
```

注意按node时候会自动安装npm，所以npm无需单独安装。

#### 安装vue-cli脚手架

```
npm install -g @vue/cli
```

查看vue-cli版本号

```
vue -V
```

#### 安装mysql服务器

下载地址：https://dev.mysql.com/downloads/mysql/

安装参考地址：https://blog.csdn.net/qq_42543312/article/details/81543753

安装配置好服务可以自启，不需要每次手动启动

#### 启动商城数据接口服务

注意首先运行mysql数据库服务

进入接口项目根目录下执行

```
E:\第五阶段新课补充\小U商城\小u商城接口\shop-api>npm start
```

#### 启动商城后台管理系统

进入项目根目录下执行

```
E:\第五阶段新课补充\小U商城\小u商城接口\shop-admin>npm start
```

### 1.3功能列表

| 功能大类   | 功能点       | 描述                           | 完成情况 |
| ---------- | ------------ | ------------------------------ | :------: |
| 商品模块   | 商品分类     | 展示商品所有分类详情           |  已完成  |
| 商品模块   | 商品列表     | 返回对应分类下的商品列表       |  已完成  |
| 商品模块   | 商品详情     | 返回对应商品详情数据           |  已完成  |
| 商品模块   | 添加购物车   | 商品添加购物车                 |  已完成  |
| 商品模块   | 秒杀详情     | 返回当天秒杀信息               |  已完成  |
| 商品模块   | 推荐数据     | 返回商品推荐数据               |  已完成  |
| 商品模块   | 商品活动     | 返回活动数据                   |  已完成  |
| 商品模块   | 消息推送     | 返回最新活动消息               |  已完成  |
| 搜索模块   | 商品搜索     | 返回符合条件商品数据类表       |  已完成  |
| 购物车模块 | 状态管理     | 实现商品单选全选反选           |  已完成  |
| 购物车模块 | 数量管理     | 实现购物车商品数量添加删除操作 |  已完成  |
| 购物车模块 | 订单生成     | 根据用户操作生成订单信息       |  已完成  |
| 订单模块   | 订单支付     | 使用支付宝完成支付             |  已完成  |
| 订单模块   | 订单列表     | 展示不同状态订单列表           |  已完成  |
| 会员模块   | 注册登录     | 先注册再登录                   |  已完成  |
| 会员模块   | 短信登录     | 基于阿里云短信实现登录注册     |  已完成  |
| 会员模块   | 微信一键登录 | 基于用户授权实现登录           |  已完成  |

## 2.接口能力

### 2.1  接口清单

#### 2.1.1接口说明



#### 2.1.2 接口清单

| 接口名称       | 调用地址                                | 调用方式 |
| -------------- | --------------------------------------- | -------- |
| 用户注册(pc)   | http://localhost:3000/api/register      | POST     |
| 用户登录（pc） | http://localhost:3000/api/login         | POST     |
| 短信发送       | http://localhost:3000/api/sms           | GET      |
| 用户短信登录   | http://localhost:3000/api/smslogin      | POST     |
| 微信一键登录   | http://localhost:3000/api/wxlogin       | POST     |
| 检测token      | http://localhost:3000/api/checktoken    | GET      |
| 首页导航分类   | http://localhost:3000/api/getcate       | GET      |
| 首页分类详情   | http://localhost:3000/api/getcates      | GET      |
| 首页活动详情   | http://localhost:3000/api/getbanner     | GET      |
| 首页秒杀详情   | http://localhost:3000/api/getseckill    | GET      |
| 首页推荐商品   | http://localhost:3000/api/getindexgoods | GET      |
| 商品搜索       | http://localhost:3000/api/search        | GET      |
| 分类商品列表   | http://localhost:3000/api/getgoodlist   | GET      |
| 活动消息推送   | http://localhost:3000/api/push          | GET      |
| 商品详情       | http://localhost:3000/api/getgoodsinfo  | GET      |
| 加入购物车     | http://localhost:3000/api/cartadd       | POST     |
| 删除购物车     | http://localhost:3000/api/cartdelete    | POST     |
| 修改购物车     | http://localhost:3000/api/cartedit      | POST     |
| 查询购物车     | http://localhost:3000/api/cartlist      | GET      |
| 订单生成       | http://localhost:3000/api/orderadd      | POST     |
| 支付宝支付     | http://localhost:3000/api/alipay        | POST     |
| 订单状态编辑   | http://localhost:3000/api/orderedit     | POST     |
| 订单查询       | http://localhost:3000/api/orderlist     | GET      |
| 收货地址列表   | http://localhost:3000/api/addresslist   | GET      |
| 添加收货地址   | http://localhost:3000/api/addressadd    | POST     |
| 编辑收货地址   | http://localhost:3000/api/addressedit   | POST     |
| 删除收货地址   | http://localhost:3000/api/addressremove | POST     |
| 获取会员信息   | http://localhost:3000/api/getuserinfo   | GET      |
| 编辑会员信息   | http://localhost:3000/api/infoedit      | POST     |

### 2.2会员接口

#### 2.2.1 说明

用户类结构一共包括：移动端用户短信登录、微信一键登录 、pc端用户注册登录、登录有效期检测。

#### 2.2.2 验证码获取

##### 接口功能

获取登录短信验证码

##### URL

http://localhost:3000/api/sms

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明           |
| -------- | ---- | ------ | ---- | ---------- | ------------------ |
| phone    | 1    | String | 11   | 用户手机号 | 符合大陆手机号规则 |

##### 返回数据

数据格式

```
{
    "msg": "获取成功",
    "code": 200,
        "list": {
        "code": 6340
    }
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 发送成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 发送失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
	phone: 13716052241
}
响应报文
{
    "msg": "获取成功",
    "code": 200,
        "list": {
        "code": 6340
    }
}
```



#### 2.2.3 用户短信登录

##### 接口功能

用户使用短信登录

##### URL

http://localhost:3000/api/smslogin

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明           |
| -------- | ---- | ------ | ---- | ---------- | ------------------ |
| phone    | 1    | String | 11   | 用户手机号 | 获取验证码的手机号 |

返回数据

数据格式

```
{
	"msg": "登录成功",
	"code": 200,
	"list": {
		"token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.eyJuYmYiOjE2MTEwMjM0MTczMDEsInVpZCI6IjNmMTAzYjUwLTU3YTktMTFlYi05ZGE4LTNiZjNlYTIzM2IzNSIsImxhc3RUaW1lIjozNjAwMDAwfQ==.byy33cWF5tz4NMgCxm1Q/CWSjZwrQJd7LYpexXJH+fgY8f+uIkPJo1dTajMPawLRnq3hLS8vYxyVOAcAVbCtM96AIQj/Rfsvc7qyVSuifHUdaPyUY/X3rDzwOaqRXPYluTrjhroOlUyW4hTjHHCif/u8Wrt9DGiNnFMR5KYXK9thfh110w0cOSQOEBcUrzo1aW8o1a5/OQqzPjUSHiMJW5JQVMADSwEUGKKfDONxV6OqYSnhDi+8h5vp2vVSLkEimO6jY6Lm1VnFra0igACaFhxB6nlshpguRQ9J7X+iuGcVdWQRv9wAdnFBFME0jsrbO6uiqdSfeEuR2Fk+nEwOPQ==",
		"uid": "3f103b50-57a9-11eb-9da8-3bf3ea233b35",
		"phone": "13716052247",
		"nickname": "奋斗小青年",
		"avatarurl": "/uploads/tou.jpg"
	}
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 登录成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 登录失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
	phone: 13716052241
}
响应报文
{
	"msg": "登录成功",
	"code": 200,
	"list": {
		"token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.eyJuYmYiOjE2MTEwMjM0MTczMDEsInVpZCI6IjNmMTAzYjUwLTU3YTktMTFlYi05ZGE4LTNiZjNlYTIzM2IzNSIsImxhc3RUaW1lIjozNjAwMDAwfQ==.byy33cWF5tz4NMgCxm1Q/CWSjZwrQJd7LYpexXJH+fgY8f+uIkPJo1dTajMPawLRnq3hLS8vYxyVOAcAVbCtM96AIQj/Rfsvc7qyVSuifHUdaPyUY/X3rDzwOaqRXPYluTrjhroOlUyW4hTjHHCif/u8Wrt9DGiNnFMR5KYXK9thfh110w0cOSQOEBcUrzo1aW8o1a5/OQqzPjUSHiMJW5JQVMADSwEUGKKfDONxV6OqYSnhDi+8h5vp2vVSLkEimO6jY6Lm1VnFra0igACaFhxB6nlshpguRQ9J7X+iuGcVdWQRv9wAdnFBFME0jsrbO6uiqdSfeEuR2Fk+nEwOPQ==",
		"uid": "3f103b50-57a9-11eb-9da8-3bf3ea233b35",
		"phone": "13716052247",
		"nickname": "奋斗小青年",
		"avatarurl": "/uploads/tou.jpg"
	}
}
```

#### 2.2.4 微信一键登录

##### 接口功能

授权获取用户手机号实现登录

##### URL

http://localhost:3000/api/wxlogin

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称     | 参数值           |
| :----------- | :--------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称      | 约束 | 类型   | 长度 | 描述                 | 取值说明 |
| :------------ | :--- | :----- | :--- | :------------------- | :------- |
| encryptedData | 1    | String |      | 用户在微信端加密数据 | 必填     |
| iv            | 1    | String |      | 加密算法的初始向量   | 必填     |
| code          | 1    | String |      | 用户登录临时令牌     | 必填     |

返回数据

数据格式

```
{
	"msg": "恭喜首次登录成功",
	"code": 200,
	"list": {
		"token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.eyJuYmYiOjE2MTE1NzMwMzYzNzQsInVpZCI6ImYzMjFhZjYwLTVlZmQtMTFlYi04NTliLTNmMzgyY2U5YTQ1NCIsImxhc3RUaW1lIjozNjAwMDAwfQ==.IeGSETbfCYJhgTiu7xiH0nUawNOiW4fnAQs1X9PzENigHG56CT76vt17kxjCbz+VmryK8BKeLQLRXO48X7GL7VCbB2teKC/HlVThUmc2Pi0e6kwamGg9FNogXEXgS79tvOJIG4UHqazCinG2361RYCcbuWqtD/MsL2oVOJRc5MSuj/MtoU0q3/nUhLBm5SDmOMDAkJmLsFSToGT5CddwQ+nyuHQj9tyFKqtPkqj8E5j8fEkMqRirjMTROf9LFOKQ7glt9LA8RkNOQhzIgLKBT420keehR6J4isSIWIXRROD+29OmgRQIeRGNr7PqMQmbPRjWv5BHrNGn/ZC6uKUM9A==",
		"uid": "f321af60-5efd-11eb-859b-3f382ce9a454",
		"phone": 13716052247,
		"nickname": "137****2247",
		"avatarurl": "/uploads/tou.jpg"
	}
}
```

| 状态码 | 描述             |
| :----- | :--------------- |
| 200    | 登录成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 登录失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
	code: "021oKG0w35sBIV2reI1w3p6ZjN1oKG0S"
	encryptedData: "vChvcL5wFRJb............"
	iv: "QPFfw3yV+k9riJC7wl8edA=="
}

{
	"msg": "恭喜首次登录成功",
	"code": 200,
	"list": {
		"token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.eyJuYmYiOjE2MTE1NzMwMzYzNzQsInVpZCI6ImYzMjFhZjYwLTVlZmQtMTFlYi04NTliLTNmMzgyY2U5YTQ1NCIsImxhc3RUaW1lIjozNjAwMDAwfQ==.IeGSETbfCYJhgTiu7xiH0nUawNOiW4fnAQs1X9PzENigHG56CT76vt17kxjCbz+VmryK8BKeLQLRXO48X7GL7VCbB2teKC/HlVThUmc2Pi0e6kwamGg9FNogXEXgS79tvOJIG4UHqazCinG2361RYCcbuWqtD/MsL2oVOJRc5MSuj/MtoU0q3/nUhLBm5SDmOMDAkJmLsFSToGT5CddwQ+nyuHQj9tyFKqtPkqj8E5j8fEkMqRirjMTROf9LFOKQ7glt9LA8RkNOQhzIgLKBT420keehR6J4isSIWIXRROD+29OmgRQIeRGNr7PqMQmbPRjWv5BHrNGn/ZC6uKUM9A==",
		"uid": "f321af60-5efd-11eb-859b-3f382ce9a454",
		"phone": 13716052247,
		"nickname": "137****2247",
		"avatarurl": "/uploads/tou.jpg"
	}
}
```



#### 2.2.5token检测

##### 接口功能

检测登录有效性

##### URL

http://localhost:3000/api/checktoken

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

返回数据

数据格式

```
{
    "code": 200
    "list": null
    "msg": "登录有效"
}
```



| 状态码 | 描述                          |
| ------ | ----------------------------- |
| 200    | 登录有效                      |
| 403    | 登录已过期或访问权限受限      |
| 500    | 请设置请求头,并携带验证字符串 |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization: eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldU.......
请求报文：{}
响应报文
{
    "code": 200
    "list": null
    "msg": "登录有效"
}
```

#### 2.2.6用户注册

##### 接口功能

pc端新用户注册

##### URL

http://localhost:3000/api/register

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称     | 参数值           |
| :----------- | :--------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明 |
| :------- | :--- | :----- | :--- | :--------- | :------- |
| phone    | 1    | String |      | 用户手机号 | 必填     |
| nickname | 1    | String |      | 用户昵称   | 必填     |
| password | 1    | String |      | 用户密码   | 必填     |

返回数据

数据格式

```
{
	"msg": "注册成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述     |
| :----- | :------- |
| 200    | 注册成功 |
| 500    | 注册失败 |

##### 举例

```
请求头信息：Content-Type:application/json
请求报文：{
	phone:'15611807890',
	nickname:'艺术小青年',
	password:'12211zm'
}
响应报文
{
	"msg": "注册成功",
	"code": 200,
	"list": []
}
```

#### 2.2.7用户密码登录

##### 接口功能

pc端用户账号密码登录

##### URL

http://localhost:3000/api/login

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称     | 参数值           |
| :----------- | :--------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明 |
| :------- | :--- | :----- | :--- | :--------- | :------- |
| phone    | 1    | String |      | 用户手机号 | 必填     |
| password | 1    | String |      | 用户密码   | 必填     |

返回数据

数据格式

```
{
	"msg": "登录成功",
	"code": 200,
	"list": {
		"token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.eyJuYmYiOjE2MTE1NzMwMzYzNzQsInVpZCI6ImYzMjFhZjYwLTVlZmQtMTFlYi04NTliLTNmMzgyY2U5YTQ1NCIsImxhc3RUaW1lIjozNjAwMDAwfQ==.IeGSETbfCYJhgTiu7xiH0nUawNOiW4fnAQs1X9PzENigHG56CT76vt17kxjCbz+VmryK8BKeLQLRXO48X7GL7VCbB2teKC/HlVThUmc2Pi0e6kwamGg9FNogXEXgS79tvOJIG4UHqazCinG2361RYCcbuWqtD/MsL2oVOJRc5MSuj/MtoU0q3/nUhLBm5SDmOMDAkJmLsFSToGT5CddwQ+nyuHQj9tyFKqtPkqj8E5j8fEkMqRirjMTROf9LFOKQ7glt9LA8RkNOQhzIgLKBT420keehR6J4isSIWIXRROD+29OmgRQIeRGNr7PqMQmbPRjWv5BHrNGn/ZC6uKUM9A==",
		"uid": "f321af60-5efd-11eb-859b-3f382ce9a454",
		"phone": 13716052247,
		"nickname": "137****2247",
		"avatarurl": "/uploads/tou.jpg"
	}
}
```



| 状态码 | 描述     |
| :----- | :------- |
| 200    | 登录成功 |
| 500    | 登录失败 |

##### 举例

```
请求头信息：Content-Type:application/json
请求报文：{
	phone:'15611807890',
	password:'12211zm'
}
响应报文
{
	"msg": "登录成功",
	"code": 200,
	"list": {
		"token": "eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.eyJuYmYiOjE2MTE1NzMwMzYzNzQsInVpZCI6ImYzMjFhZjYwLTVlZmQtMTFlYi04NTliLTNmMzgyY2U5YTQ1NCIsImxhc3RUaW1lIjozNjAwMDAwfQ==.IeGSETbfCYJhgTiu7xiH0nUawNOiW4fnAQs1X9PzENigHG56CT76vt17kxjCbz+VmryK8BKeLQLRXO48X7GL7VCbB2teKC/HlVThUmc2Pi0e6kwamGg9FNogXEXgS79tvOJIG4UHqazCinG2361RYCcbuWqtD/MsL2oVOJRc5MSuj/MtoU0q3/nUhLBm5SDmOMDAkJmLsFSToGT5CddwQ+nyuHQj9tyFKqtPkqj8E5j8fEkMqRirjMTROf9LFOKQ7glt9LA8RkNOQhzIgLKBT420keehR6J4isSIWIXRROD+29OmgRQIeRGNr7PqMQmbPRjWv5BHrNGn/ZC6uKUM9A==",
		"uid": "f321af60-5efd-11eb-859b-3f382ce9a454",
		"phone": 13716052247,
		"nickname": "艺术小青年",
		"avatarurl": "/uploads/tou.jpg"
	}
}
```



### 2.3 商品分类接口

##### 2.3.1 说明

商品分类接口主要有首页一级分类导航数据、首页全部商品分类。

##### 2.3.2 一级商品分类

##### 接口功能

获取首页一级分类

##### URL

  http://localhost:3000/api/getcate

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 1,
        "pid": 0,
        "catename": "家用电器",
        "img": "",
        "status": 1
        },
        {
        "id": 2,
        "pid": 0,
        "catename": "手机通讯",
        "img": "",
        "status": 1
        }
        ...........
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 1,
        "pid": 0,
        "catename": "家用电器",
        "img": "",
        "status": 1
        },
        {
        "id": 2,
        "pid": 0,
        "catename": "手机通讯",
        "img": "",
        "status": 1
        }
        ...........
    ]
}
```

##### 2.3.3 全部商品分类 

##### 接口功能

商品分类详情

URL

http://localhost:3000/api/getcates

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "pid": 0,
            "catename": "家用电器",
            "img": "",
            "status": 1,
            "children": [
                {
                "id": 7,
                "pid": 1,
                "catename": "电视",
                "img": "/uploads/category/fc3abc50-6c2c-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 8,
                "pid": 1,
                "catename": "空调",
                "img": "/uploads/category/354b31f0-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 9,
                "pid": 1,
                "catename": "洗衣机",
                "img": "/uploads/category/436e9470-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                }
            ]
        }
 	............................
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "pid": 0,
            "catename": "家用电器",
            "img": "",
            "status": 1,
            "children": [
                {
                "id": 7,
                "pid": 1,
                "catename": "电视",
                "img": "/uploads/category/fc3abc50-6c2c-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 8,
                "pid": 1,
                "catename": "空调",
                "img": "/uploads/category/354b31f0-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                },
                {
                "id": 9,
                "pid": 1,
                "catename": "洗衣机",
                "img": "/uploads/category/436e9470-6c2d-11ea-b86c-579aced212c2.jpg",
                "status": 1
                }
            ]
        }
 	............................
    ]
}
```

#### 2.4商品活动

##### 2.4.1说明

商品活动接口主要获取首页轮播图区域活动数据

##### 2.4.1 商品活动详情

##### 接口功能

获取首页轮播图活动数据

##### URL

http://localhost:3000/api/getbanner

##### 支持格式

JSON

##### HTTP请求方式

GET

请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        	{
			"id": 1,
			"second_cateid": 16,
			"title": "活动3",
			"img": "/uploads/banner/58276080-5ed6-11eb-a737-b595a5439ea8.jpg"
		},
		{
			"id": 2,
			"second_cateid": 13,
			"title": "活动4",
			"img": "/uploads/banner/00752970-5ed7-11eb-a737-b595a5439ea8.jfif"
		}
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        	{
			"id": 1,
			"second_cateid": 16,
			"title": "活动3",
			"img": "/uploads/banner/58276080-5ed6-11eb-a737-b595a5439ea8.jpg"
		},
		{
			"id": 2,
			"second_cateid": 13,
			"title": "活动4",
			"img": "/uploads/banner/00752970-5ed7-11eb-a737-b595a5439ea8.jfif"
		}
    ]
}
```



### 2.5 商品数据

##### 2.5.1 说明

商品接口主要有首页秒杀商品信息、推荐商品信息、商品详情、商品搜索。

##### 2.5.2 秒杀商品

##### 接口功能

首页秒杀商品信息，只返回一条秒杀数据

##### URL

  http://localhost:3000/api/getseckill

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 6,
        "title": "活动2",
        "begintime": "1599408000000",
        "endtime": "1599492300000",
        "first_cateid": 2,
        "second_cateid": 10,
        "goodsid": 4,
        "status": 1,
        "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
        "price": 3999
        }
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
        "id": 6,
        "title": "活动2",
        "begintime": "1599408000000",
        "endtime": "1599492300000",
        "first_cateid": 2,
        "second_cateid": 10,
        "goodsid": 4,
        "status": 1,
        "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
        "price": 3999
        }
    ]
}
```



##### 2.5.3 推荐商品

##### 接口功能

首页推荐商品信息

##### URL

http://localhost:3000/api/gethortgoods

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "id": 5,
                    "goodsname": "华为MateBook13",
                    "price": 4299,
                    "market_price": 4597,
                    "img": "/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
             ]
         },
    	{
            "content": [
                {
                    "id": 2,
                    "goodsname": "联想小新",
                    "price": 4499,
                    "market_price": 4699,
                    "img": "/uploads/2747d670-6de1-11ea-a8e1-0d680bf54839.jpg"
                }
            ]
    	},
    	{
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
        	]
    	}
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文 {}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                },
                {
                    "id": 5,
                    "goodsname": "华为MateBook13",
                    "price": 4299,
                    "market_price": 4597,
                    "img": "/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
                }
             ]
         },
    	{
            "content": [
                {
                    "id": 2,
                    "goodsname": "联想小新",
                    "price": 4499,
                    "market_price": 4699,
                    "img": "/uploads/2747d670-6de1-11ea-a8e1-0d680bf54839.jpg"
                }
            ]
    	},
    	{
            "content": [
                {
                    "id": 1,
                    "goodsname": "小米10",
                    "price": 3999,
                    "market_price": 3999,
                    "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
                }
        	]
    	}
    ]
}
```



##### 2.5.4 商品详情

##### 接口功能

获取商品详情信息

##### URL

http://localhost:3000/api/getgoodsinfo

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明         |
| -------- | ---- | ------ | ---- | ------ | ---------------- |
| id       | 1    | number | 10   | 商品id | 商品编号，必填项 |

##### 返回数据

数据格式

```
{
    "msg": "获取成功",
    "code": 200,
    "list": [
        {
            "id": 4,
            "first_cateid": 2,
            "second_cateid": 10,
            "goodsname": "华为matep30",
            "price": 3999,
            "market_price": 4999,
            "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
            "description": "",
            "specsid": 3,
            "specsattr": "黑色",
            "isnew": 2,
            "ishot": 2,
            "status": 1,
            "number": 100,
            "specsname": "颜色"
        }
    ]
}
```

| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少商品id       |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{		
	id:4
}
响应报文
{
    "msg": "获取成功",
    "code": 200,
    "list": [
        {
            "id": 4,
            "first_cateid": 2,
            "second_cateid": 10,
            "goodsname": "华为matep30",
            "price": 3999,
            "market_price": 4999,
            "img": "/uploads/fb704ec0-70be-11ea-91a2-9395060d7390.jpg",
            "description": "",
            "specsid": 3,
            "specsattr": "黑色",
            "isnew": 2,
            "ishot": 2,
            "status": 1,
            "number": 100,
            "specsname": "颜色"
        }
    ]
}
```

##### 2.5.5 商品搜索

##### 接口功能

搜索获取商品列表

##### URL

http://localhost:3000/api/search

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明       |
| -------- | ---- | ------ | ---- | ---------- | -------------- |
| keywords | 1    | String | 5    | 搜索关键词 | 中文字符，必填 |

##### 返回数据

数据格式

```
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "goodsname": "小米10",
            "price": 3999,
            "market_price": 3999,
            "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        }
    ]
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 缺少搜索关键词   |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{		
	keywords:小米
}
响应报文
{
    "msg": "操作成功",
    "code": 200,
    "list": [
        {
            "id": 1,
            "goodsname": "小米10",
            "price": 3999,
            "market_price": 3999,
            "img": "/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        }
    ]
}
```

### 2.6商品列表

#### 2.6.1分类商品列表 

##### 接口功能

获取一、二级分类下的商品列表

##### URL

http://localhost:3000/api/getgoodlist

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| ------------ | ---------------- |
| content-Type | application/json |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明                |
| -------- | ---- | ------ | ---- | ---------- | ----------------------- |
| cateid   | 1    | number | 10   | 商品分类id | 一、二级分类id,必填     |
| page     | 1    | number | -    | 页码       | 页码,必填               |
| size     | 1    | number | -    | 分页偏移量 | 分页偏移量，必填        |
| type     | 1    | number | 1    | 分类类型   | 1是一级分类 2是二级分类 |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": {
		"totalPage": 5,
		"goodData": [
			{
				"id": 2,
				"goodsname": "联想小新",
				"price": 4499,
				"market_price": 4699,
				"img": "/uploads/2747d670-6de1-11ea-a8e1-0d680bf54839.jpg"
			},
			{
				"id": 5,
				"goodsname": "华为MateBook13",
				"price": 4299,
				"market_price": 4597,
				"img": "/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
			}
		]
	}
}
```



| 状态码 | 描述             |
| ------ | ---------------- |
| 200    | 查询成功         |
| 400    | 数据没有找到     |
| 404    | 请求路由没有找到 |
| 500    | 查询失败         |

##### 举例

```
请求头信息：
Content-Type:application/json
请求报文：
{
    cateid: 2
    page: 1
    size: 5
    type:1
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": {
		"totalPage": 5,
		"goodData": [
			{
				"id": 2,
				"goodsname": "联想小新",
				"price": 4499,
				"market_price": 4699,
				"img": "/uploads/2747d670-6de1-11ea-a8e1-0d680bf54839.jpg"
			},
			{
				"id": 5,
				"goodsname": "华为MateBook13",
				"price": 4299,
				"market_price": 4597,
				"img": "/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
			}
		]
	}
}
```



### 2.7 购物车

#### 2.7.1 购物车列表

##### 接口功能

获取用户的购物车数据

##### URL

 http://localhost:3000/api/cartlist

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

##### 求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明       |
| :------- | :--- | :----- | :--- | :----- | :------------- |
| uid      | 1    | string | 50   | 用户id | 用户编号，必填 |

##### 返回数据

数据格式

```
{
	"msg":"操作成功",
    "code":200,
    "list":[
        {
            "id":2,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":1,
            "num":1,
            "status":1,
            "goodsname":"小米10",
            "price":3999,
            "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        },
        {
            "id":3,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":5,
            "num":1,
            "status":1,
            "goodsname":"华为MateBook13",
            "price":4299,
            "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
        }
    ]
}
```



| 状态码 | 描述                   |
| ------ | ---------------------- |
| 200    | 查询成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：{
	uid: 6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe
}
响应报文
{
	"msg":"操作成功",
    "code":200,
    "list":[
        {
            "id":2,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":1,
            "num":1,
            "status":1,
            "goodsname":"小米10",
            "price":3999,
            "img":"/uploads/fa5c2790-6c48-11ea-b894-9bd516f4e52e.jpg"
        },
        {
            "id":3,
            "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
            "goodsid":5,
            "num":1,
            "status":1,
            "goodsname":"华为MateBook13",
            "price":4299,
            "img":"/uploads/1faae7a0-70bf-11ea-91a2-9395060d7390.jpg"
        }
    ]
}
```

#### 2.7.2添加购物车

##### 接口功能

添加购物车数据

##### URL

 http://localhost:3000/api/cartadd

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述     | 取值说明       |
| -------- | ---- | ------ | ---- | -------- | -------------- |
| uid      | 1    | string | 50   | 用户id   | 用户编号，必填 |
| goodsid  | 1    | number | 10   | 商品id   | 商品编号，必填 |
| num      | 1    | number | 3    | 商品数量 | 商品数量，必填 |

##### 返回数据

数据格式

```
{
	msg: "添加成功"
    code: 200
    list: []
}
```



| 状态码 | 描述                   |
| ------ | ---------------------- |
| 200    | 添加成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    uid: "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe"
    goodsid: 7
    num: 1
}
响应报文
{
	msg: "添加成功"
    code: 200
    list: []
}
```

#### 2.7.3修改购物车

##### 接口功能

操作购物车数据

##### URL

 http://localhost:3000/api/cartedit

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述         | 取值说明              |
| :------- | :--- | :----- | :--- | :----------- | :-------------------- |
| id       | 1    | number | 10   | 购物车数据id | 数据编号，必填        |
| type     | 1    | number | 1    | 操作类型     | 1是减少 2是增加，必填 |

##### 返回数据

数据格式

```
{
	msg: "操作成功"
    code: 200
    list: []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 操作成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```json
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    id: 2
	type: 2
}
响应报文
{
	msg: "操作成功"
    code: 200
    list: []
}
```



#### 2.7.4删除购物车

##### 接口功能

删除购物车数据

##### URL

 http://localhost:3000/api/cartdelete

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述         | 取值说明       |
| :------- | :--- | :----- | :--- | :----------- | :------------- |
| id       | 1    | number | 10   | 购物车数据id | 数据编号，必填 |

##### 返回数据

数据格式

```
{
	msg: "删除成功"
    code: 200
    list: []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 删除成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```json
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    id: 2
}
响应报文
{
	msg: "删除成功"
    code: 200
    list: []
}
```



### 2.8 订单接口

#### 2.8.1 说明

订单接口一共包括：订单生成、订单查询、订单编辑（用于后端确认发货、前端用户确认收货、评价等）

#### 2.8.2 订单生成 

##### 接口功能

生成支付订单

##### URL

 http://localhost:3000/api/orderadd

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| ------------- | ---------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

注意请求整体参数结构如下：

```
{
    "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
    "countmoney":10598,
    "countnumber":2,
    "address":1,
    "idstr": "8,4"
}

```

参数详情：

| 参数名称    | 约束 | 类型            | 长度 | 描述         | 取值说明                      |
| ----------- | ---- | --------------- | ---- | ------------ | ----------------------------- |
| uid         | 1    | String          | 50   | 用户ID       | 用户编号，必填                |
| countmoney  | 1    | decimal（10,2） | 10   | 支付金额     | 保留两位小数点，必填          |
| countnumber | 1    | number          | 5    | 购买商品数量 | 必填                          |
| address     | 1    | number          | 1    | 收获地址id   | 必填                          |
| idstr       | 1    | String          | 20   | 购物车数据id | 必须为字符串如：“1,2,3”, 必填 |

##### 返回数据

数据格式

```
{
	"msg": "提交订单成功",
	"code": 200,
	"list": {
		"outTradeNo": "1611537265071257757"
	}
}
```



| 状态码 | 描述                   |
| ------ | ---------------------- |
| 200    | 提交订单成功           |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
     "uid":"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
     "address":1,
     "countmoney":10598,
     "countnumber":2,
     "idstr": "8,4"
}
响应报文
{
	"msg": "提交订单成功",
	"code": 200,
	"list": {
		"outTradeNo": "1611537265071257757"
	}
}

```

#### 2.8.3支付宝支付

##### 接口功能

实现h5端、pc端支付功能，注意此处使用的是支付宝的沙箱环境，

**`注意如果是使用本接口进行支付测试切记不要随意更换接口文件中的支付私钥和阿里的公钥，否则支付失败；`**

##### URL

 http://localhost:3000/api/alipay

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称    | 约束 | 类型   | 长度 | 描述             | 取值说明                                                 |
| :---------- | :--- | :----- | :--- | :--------------- | :------------------------------------------------------- |
| outTradeNo  | 1    | String | 50   | 子订单编号字符串 | 订单详情编号，如 ‘sub_0_1212....，sub_1_1212....’，’必填 |
| totalAmount | 1    | number | 10   | 总支付金额       | 可以保留两位小数，必填                                   |
| type        | 1    | number | 1    | 请求客户端类型   | 1是h5端，2是pc端，必填                                   |

##### 返回数据

注意，无论是h5端还是pc端，获取到服务端返回的支付表单直接运行该表单即可，即可跳转到支付宝支付页面

数据格式

```
h5端返回支付表单：
{
	"msg": "操作成功",
	"code": 200,
	"list": "\n        <form action=\"https://openapi.alipaydev.com/gateway.do?method=alipay.trade.wap.pay&app_id=2021000116695752&charset=utf-8&version=1.0&sign_type=RSA2&timestamp=2021-01-19%2015%3A17%3A33&notify_url=http%3A%2F%2Faslegou.vaiwan.com%2Fapi%2FnotifyUrl&return_url=http%3A%2F%2Flocalhost%3A8080%2F%23%2Fpages%2Forderlist%2Forderlist&sign=MY%2F4OT71BMx9bvKkMWnpl1z1Rhi2KpudaAvFKE2F8drjMDu%2Bd4LEj9t%2FbMWEk35bqm47EwDSL17Te4hfe4AhTwJ%2B2ekVjo1gRpzskh8Di%2BC1q3Yq8wWXQ969xR8nD79YG4XevxHEpZEqPNsXeiz7izimhY1RjGU3rG%2FRwlL4yKvePzWAYhD7DAjds%2B16oOoDLDpnpCCKOXRiU%2Bo3qkXbM%2Fh%2FQTnqDSvJKbQ8qeY41k%2FJh%2BLzXOVrz7Ve5UUhDp%2BoFx1n2QKg2rhR3noSWMF%2BEq%2BrMU7ZG7JFIG8f7F1qhu2PCNbtUkezXK8tsjDq6QWdlMrfs%2Bt9eNgXJ6uz6pYlKg%3D%3D\" method=\"post\" name=\"alipaySDKSubmit1611040653727\" id=\"alipaySDKSubmit1611040653727\">\n          <input type=\"hidden\" name=\"alipay_sdk\" value=\"alipay-sdk-nodejs-3.1.5\" /><input type=\"hidden\" name=\"biz_content\" value=\"{&quot;out_trade_no&quot;:&quot;sub_0_1611040549060680119,sub_1_1611040549060680119&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;,&quot;total_amount&quot;:200,&quot;subject&quot;:&quot;商品&quot;,&quot;body&quot;:&quot;商品详情&quot;}\" />\n        </form>\n        <script>document.forms[\"alipaySDKSubmit1611040653727\"].submit();</script>\n      "
}

pc端返回支付表单：
{
	"msg": "操作成功",
	"code": 200,
	"list": "\n        <form action=\"https://openapi.alipaydev.com/gateway.do?method=alipay.trade.page.pay&app_id=2021000116695752&charset=utf-8&version=1.0&sign_type=RSA2&timestamp=2021-01-19%2015%3A18%3A21&notify_url=http%3A%2F%2Faslegou.vaiwan.com%2Fapi%2FnotifyUrl&return_url=http%3A%2F%2Flocalhost%3A8080%2F%23%2Fpages%2Forderlist%2Forderlist&sign=Blq34kLAgOE%2BXxQ2Xd6Kl5WuwMBfhDo1Yha5iV7WNEBepTHxJ4n7X5kLcs48v0BFxiADuXdKquU0E0cI3vdgoldAIYfz8Brh%2BmKwzadE9kzytBXt%2BDBJ8TrOk7ky1Z5KZSbNMzZY7MZZuDojgFC09o2B0Gs88QL5RaN54rgfUJDVJtcQLzgiG6umokcnoGOiCUaxPnacQx8C%2BaGpBFPDmrbR6jlx1eEpDKQlXsDzecE3QiaJJqZndXtoT83WgsB0n78LOr23C4gjCjpvdzyJOM2ZRXYepQNtdhYiGZnhZW4jXbnsGlUHuGW%2FfvorGhxNB0l8E8dfcbd7CkfN1zmLow%3D%3D\" method=\"post\" name=\"alipaySDKSubmit1611040701301\" id=\"alipaySDKSubmit1611040701301\">\n          <input type=\"hidden\" name=\"alipay_sdk\" value=\"alipay-sdk-nodejs-3.1.5\" /><input type=\"hidden\" name=\"biz_content\" value=\"{&quot;out_trade_no&quot;:&quot;sub_0_1611040549060680119,sub_1_1611040549060680119&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;,&quot;total_amount&quot;:200,&quot;subject&quot;:&quot;商品&quot;,&quot;body&quot;:&quot;商品详情&quot;}\" />\n        </form>\n        <script>document.forms[\"alipaySDKSubmit1611040701301\"].submit();</script>\n      "
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 查询成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少支付参数           |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    outTradeNo:'1611537265071257757',
    totalAmount:200,
    type:1
}
响应报文
h5端返回支付表单（同上述返回数据格式不再赘述）
pc端返回支付表单（同上述返回数据格式不再赘述）

```



#### 2.8.4支付宝支付异步回调

##### 接口功能

响应支付宝异步回调地址，支付成功后，支付宝会主动向本接口发起请求，在本接口中修改本次支付订单状态，前端人员了解即可不需要对本接口进行任何操作，可以在此接口中打印测试是否支付成功

注意此接口正常需要在线上服务器才能被支付宝请求到，本地可以使用内网穿透技术来实现支付宝的正常访问；

配置如下：

本次以钉钉内网穿透为例，在下载好的钉钉内网穿透包下直接执行如下命令：

**D:\钉钉内网穿透\window_64** **>**      ding -config=ding.cfg -subdomain=aslegou 3000

运行成功后显示如下：

```
Version                       1.7/1.7                                                      Forwarding                    https://aslegou.vaiwan.com -> 127.0.0.1:3000               Forwarding                    http://aslegou.vaiwan.com -> 127.0.0.1:3000
```

接口端配置异步回调如下：

```
//接口位置：
router.post("/alipay", async (req, res)=>{})

// 配置异步回调接口
formData.addField('notifyUrl', 'http://aslegou.vaiwan.com/api/notifyUrl')
```

##### URL

 http://localhost:3000/api/notifyUrl

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 返回数据

```
[Object: null prototype] {
  gmt_create: '2021-01-26 09:47:47',
  charset: 'utf-8',
  seller_email: 'jfqfst1469@sandbox.com',
  subject: '商品',
  sign:
   'igZRmBLRxLGjEfqMVw+4zfnk03cmltb5/0/QdoeYzk8h7YnMRkbT8e9kv/pjiuhpmD8Te5Nkyl3P1f+isTWfzgi+UL1TTfMzDmxIimVHxTmk4h7ZxKBEv8TL36P3EgZmp9Zd8onVVMHwupk6mIwgkz74tJzmk2Wz0NISjUCkWAZ/jHUbzuQ8qUAoQ91t8WcORYzKQyK89pObiBq/QDpPNpYSzWC60XRBnifgWnhWAUsZuPXgGPr4w6cLWF9/NTVMDpsuKPQ7dIQmY9PCJNVbLN1W+LfZcHxC/ENsxv5ONRVFTe7F8AJB5RjT9iwVrV5AfukdEA7enlRiiZTBAWr5Qw==',
  body: '商品详情',
  buyer_id: '2088622955320323',
  invoice_amount: '3999.00',
  notify_id: '2021012600222094748020320509060056',
  fund_bill_list: '[{"amount":"3999.00","fundChannel":"ALIPAYACCOUNT"}]',
  notify_type: 'trade_status_sync',
  trade_status: 'TRADE_SUCCESS',
  receipt_amount: '3999.00',
  buyer_pay_amount: '3999.00',
  app_id: '2021000116695752',
  sign_type: 'RSA2',
  seller_id: '2088621955126230',
  gmt_payment: '2021-01-26 09:47:48',
  notify_time: '2021-01-26 09:47:49',
  version: '1.0',
  out_trade_no: '1611625619554315224',
  total_amount: '3999.00',
  trade_no: '2021012622001420320501138426',
  auth_app_id: '2021000116695752',
  buyer_logon_id: 'exn***@sandbox.com',
  point_amount: '0.00' }
```

**trade_status 状态码说明**

| trade_status 状态码 | 描述                           |
| :------------------ | :----------------------------- |
| TRADE_SUCCESS       | 交易完成（高级即时到帐状态下） |
| WAIT_BUYER_PAY      | 没有付款                       |
| TRADE_FINISHED      | 交易完成（交易结束，不可退款） |
| TRADE_CLOSED        | 交易关闭                       |

##### 

#### 2.8.5支付宝支付同步回调

##### 接口功能

响应支付宝同步回调地址，支付成功后，支付宝会主动向本接口发起请求，一般我们不会在此处修改订单状态防止用户终止本次请求导致订单状态修改失败；本接口h5端和pc端可以根据自己的情况填写希望支付成功后要跳转的地址链接，

实例如下：

```
//接口位置：
router.post("/alipay", async (req, res)=>{})

//设置h5端同步回调地址，本次请求是get方式，支付宝请求成功后直接跳转到订单列表页面
formData.addField('returnUrl', 'http://localhost:8080/#/pages/orderlist/orderlist')
```



#### 2.8.6订单详情

##### 接口功能

获取用户订单详情

##### URL

 http://localhost:3000/api/orderlist

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述       | 取值说明                                                     |
| :------- | :--- | :----- | :--- | :--------- | :----------------------------------------------------------- |
| uid      | 1    | String | 50   | 用户ID     | 用户编号，必填                                               |
| size     | 1    | number | 2    | 分页偏移量 | 每次查询条数，必填                                           |
| page     | 1    | number | 2    | 页码       | 分页页码，必填                                               |
| status   | 1    | number | 1    | 订单状态   | 订单状态，0是待支付 1是待发货  2待确认 3待评价 4订单完成 5订单取消，选填 |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": {
		"totalPage": 1,
		"data": [
        	{
				"id": 132,
				"uid": "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
				"ordernumber": "1611537265071257757",
				"tradeno": "2021012522001420320501137868",
				"countmoney": 9298,
				"countnumber": 2,
				"addtime": "2021-01-25T01:14:25.000Z",
				"status": 0,
				"child": [
					{
						"subid": 219,
						"subordernumber": "sub_0_1611537265071257757",
						"goodsname": "小米10",
						"img": "/uploads/d6a0eff0-70be-11ea-91a2-9395060d7390.jpg",
						"price": 3999,
						"num": 1
					}
				]
			}
		]
	}
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 查询成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
	uid: 6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe,
	size:5,
	page:1,
	status:0
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": {
		"totalPage": 1,
		"data": [
        	{
				"id": 132,
				"uid": "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
				"ordernumber": "1611537265071257757",
				"tradeno": "2021012522001420320501137868",
				"countmoney": 9298,
				"countnumber": 2,
				"addtime": "2021-01-25T01:14:25.000Z",
				"status": 0,
				"child": [
					{
						"subid": 219,
						"subordernumber": "sub_0_1611537265071257757",
						"goodsname": "小米10",
						"img": "/uploads/d6a0eff0-70be-11ea-91a2-9395060d7390.jpg",
						"price": 3999,
						"num": 1
					}
				]
			}
		]
	}
}
```



#### 2.8.7编辑订单

##### 接口功能

修改订单的状态

##### URL

 http://localhost:3000/api/orderedit

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称      | 约束 | 类型   | 长度 | 描述       | 取值说明                                                     |
| :------------ | :--- | :----- | :--- | :--------- | :----------------------------------------------------------- |
| id            | 1    | String | 50   | 子订单ID   | 子订单编号，必填                                             |
| couriernumber | 1    | String | 30   | 快递订单号 | 选填(商城管理系统需要)                                       |
| couriercode   | 1    | String | 10   | 快递码     | 选填(商城管理系统需要)                                       |
| status        | 1    | number | 1    | 订单状态   | 订单状态，0是待支付 1是待发货  2待确认 3待评价 4订单完成 5订单取消，必填 |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 查询成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    
    id:22,
	status:2,
	couriercode:'SFKD',
	couriernumber:'SF10627672121221'
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": []
}
```



### 2.9 地址管理

#### 2.9.1 说明

地址接口一共包括：地址查询、地址添加、地址编辑、地址删除

#### 2.9.2地址查询

##### 接口功能

查询一条、多条地址数据

##### URL

 http://localhost:3000/api/addresslist

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述     | 取值说明                  |
| :------- | :--- | :----- | :--- | :------- | :------------------------ |
| uid      | 1    | string | 50   | 用户uid  | 用户编号，必填            |
| id       | 1    | number | 10   | 数据id   | 地址编号，选填            |
| status   | 1    | number | 1    | 地址状态 | 1：默认地址 0：正常，选填 |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": [
		{
			"id": 1,
			"uid": "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
			"username": "关羽",
			"userphone": "13716052241",
			"regioncode": "",
			"location": "北京市北京市朝阳区",
			"useraddress": "五方桥中公教育基地",
			"status": 0,
			"label": "学校"
		}
	]
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 查询成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```json
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    id: 1，
    uid:"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe"
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": [
		{
			"id": 1,
			"uid": "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
			"username": "关羽",
			"userphone": "13716052241",
			"regioncode": "",
			"location": "北京市北京市朝阳区",
			"useraddress": "北京市朝阳区五方桥中公教育基地",
			"status": 0,
			"label": "学校"
		}
	]
}
```



#### 2.9.3地址添加

##### 接口功能

添加收货地址

##### URL

 http://localhost:3000/api/addressadd

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称    | 约束 | 类型   | 长度 | 描述         | 取值说明                         |
| :---------- | :--- | :----- | :--- | :----------- | :------------------------------- |
| uid         | 1    | string | 50   | 用户uid      | 用户编号，必填                   |
| username    | 1    | string | 10   | 收货人姓名   | 必填                             |
| userphone   | 1    | string | 11   | 收货人手机号 | 必填                             |
| regioncode  | 1    | string | 20   | 地区码       | 选填                             |
| location    | 1    | string | 20   | 地区字符串   | 如：‘山东省滨州市无棣县’，必填   |
| useraddress | 1    | string | 50   | 详情地址     | 如：‘棣新一路圣豪购物广场’，必填 |
| status      | 1    | number | 1    | 地址状态     | 1是默认地址，0不是，选填         |
| label       | 1    | string |      | 地址标签     | 如：‘公司’，‘家’，‘学校’，选填   |

##### 返回数据

数据格式

```
{
	"msg": "地址添加成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 添加成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```vue
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    
    uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe',
    username:'曹操',
    userphone:13716052241,
    regioncode:"",
    location:'北京市市辖区朝阳区',
    useraddress:'五方桥中公教育基地',
    status:1,
    label:'公司'
        
}
响应报文
{
	"msg": "地址添加成功",
	"code": 200,
	"list": []
}
```



#### 2.9.4地址编辑

##### 接口功能

修改收货地址

##### URL

 http://localhost:3000/api/addressedit

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称    | 约束 | 类型   | 长度 | 描述         | 取值说明                         |
| :---------- | :--- | :----- | :--- | :----------- | :------------------------------- |
| id          | 1    | number | 50   | 地址id       | 地址编号，必填                   |
| username    | 1    | string | 10   | 收货人姓名   | 必填                             |
| userphone   | 1    | string | 11   | 收货人手机号 | 必填                             |
| regioncode  | 1    | string | 20   | 地区码       | 选填                             |
| location    | 1    | string | 20   | 地区字符串   | 如：‘山东省滨州市无棣县’，必填   |
| useraddress | 1    | string | 50   | 详情地址     | 如：‘棣新一路圣豪购物广场’，必填 |
| status      | 1    | number | 1    | 地址状态     | 1是默认地址，0是不是，选填       |
| label       | 1    | string |      | 地址标签     | 如：‘公司’，‘家’，‘学校’，选填   |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 编辑成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    
    id:22,
    username:'曹操',
    userphone:13716052241,
    regioncode:"",
    location:'北京市市辖区朝阳区',
    useraddress:'五方桥中公教育基地',
    status:1,
    label:'公司'
        
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": []
}
```



#### 2.9.5地址删除

##### 接口功能

删除一条收货地址数据

##### URL

 http://localhost:3000/api/addressremove

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明       |
| :------- | :--- | :----- | :--- | :----- | :------------- |
| id       | 1    | number | 10   | 地址id | 地址编号，必填 |

##### 返回数据

数据格式

```
{
	"msg": "删除成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 删除成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    
    id:22    
}
响应报文
{
	"msg": "删除成功",
	"code": 200,
	"list": []
}
```



### 3.0会员管理

#### 3.0.1 说明

地址接口一共包括：会员信息查询、信息编辑

#### 3.0.2信息查询

##### 接口功能

查询一条会员信息数据

##### URL

 http://localhost:3000/api/getuserinfo

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述    | 取值说明       |
| :------- | :--- | :----- | :--- | :------ | :------------- |
| uid      | 1    | string | 50   | 用户uid | 用户编号，必填 |

##### 返回数据

数据格式

```
{
	"msg": "获取成功",
	"code": 200,
	"list": [
		{
			"id": 6,
			"uid": "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
			"phone": "13716052241",
			"password": "",
			"nickname": "奋斗小青年",
			"avatarurl": "/uploads/342e9ef0-5e4f-11eb-bbdf-370e57ce88fe.jpg",
			"sex": 1,
			"birthday": "1992-02-14",
			"region": "山东省滨州市滨城区",
			"profession": "it讲师",
			"randstr": null,
			"addtime": "1599556783839",
			"status": 1
		}
	]
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 获取成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```json
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    uid:"6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe"
}
响应报文
{
	"msg": "获取成功",
	"code": 200,
	"list": [
		{
			"id": 6,
			"uid": "6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe",
			"phone": "13716052241",
			"password": "",
			"nickname": "奋斗小青年",
			"avatarurl": "/uploads/342e9ef0-5e4f-11eb-bbdf-370e57ce88fe.jpg",
			"sex": 1,
			"birthday": "1992-02-14",
			"region": "山东省滨州市滨城区",
			"profession": "it讲师",
			"randstr": null,
			"addtime": "1599556783839",
			"status": 1
		}
	]
}
```



#### 3.0.3信息编辑

##### 接口功能

修改一条会员信息数据

##### URL

 http://localhost:3000/api/infoedit

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称   | 约束 | 类型   | 长度 | 描述     | 取值说明       |
| :--------- | :--- | :----- | :--- | :------- | :------------- |
| id         | 1    | number | 10   | 数据id   | 数据编号，必填 |
| nickname   | 1    | string | 20   | 用户昵称 | 必填           |
| sex        | 1    | number | 1    | 用户性别 | 选填           |
| avatarurl  | 1    | string | 50   | 用户头像 | 选填           |
| region     | 1    | string | 20   | 用户住址 | 选填           |
| birthday   | 1    | string | 10   | 用户生日 | 选填           |
| profession | 1    | string | 10   | 用户职业 | 选填           |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 操作成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    id:1,
    nickname:"奋斗小青年",
    sex:1,
    avatarurl:"/uploads/tou.jpg",
    region:"山东省,滨州市,无棣县",
    birthday:"1992-02-14",
    profession:"it讲师"
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": []
}
```

#### 3.0.4签到记录

##### 接口功能

获取会员签到数据，服务端最多返回10条

##### URL

 http://localhost:3000/api/getsign

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明       |
| :------- | :--- | :----- | :--- | :----- | :------------- |
| uid      | 1    | number | 10   | 用户id | 用户编号，必填 |

##### 返回数据

数据格式

```
{
	"msg": "操作成功",
	"code": 200,
	"list": [
		{
			id:1,
			uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe',
			add_time:'1612139819000'
		},
		{
			id:2,
			uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe',
			add_time:'16121348190230'
		}
	]
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 操作成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe'
}
响应报文
{
	"msg": "操作成功",
	"code": 200,
	"list": [
		{
			id:1,
			uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe',
			add_time:'1612139819000'
		},
		{
			id:2,
			uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe',
			add_time:'16121348190230'
		}
	]
}
```



#### 3.0.5会员签到

##### 接口功能

添加当天会员签到数据

##### URL

 http://localhost:3000/api/signadd

##### 支持格式

JSON

##### HTTP请求方式

POST

##### 请求参数header部分

| 参数名称      | 参数值           |
| :------------ | :--------------- |
| content-Type  | application/json |
| authorization | token            |

##### 请求参数body部分

| 参数名称 | 约束 | 类型   | 长度 | 描述   | 取值说明       |
| :------- | :--- | :----- | :--- | :----- | :------------- |
| uid      | 1    | number | 10   | 用户id | 用户编号，必填 |

##### 返回数据

数据格式

```
{
	"msg": "签到成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述                   |
| :----- | :--------------------- |
| 200    | 操作成功               |
| 400    | 数据没有找到           |
| 403    | 登录失效或访问路由受限 |
| 404    | 请求路由没有找到       |
| 500    | 缺少参数               |

##### 举例

```
请求头信息：
Content-Type:application/json
authorization:eyJzZWMiOiJSU0EiLCJ0eXBlIjoiSldUIn0=.e...................
请求报文：
{
    uid:'6e7dd8d0-f1b4-11ea-84da-07a5d6e2f2fe'
}
响应报文
{
	"msg": "签到成功",
	"code": 200,
	"list": []
}
```



### 4.0消息推送

#### 4.0.1活动消息推送

##### 接口功能

获取一条服务端定时推送的活动消息

服务端默认是每周1 的1点1分30秒定时推送消息，消息推送借用第三方云服务goEasy,该服务在本接口中起到消息中转作用，我们在自己的服务端通过向channel（频道）定时发送消息到goEasy，然后我们在uniapp端监听和服务端相同channel（频道）消息即可。

goEasy服务每个账号提供两个月免费服务可以用于测试；在使用本接口时候可以使用服务端已经提供好的服务也可以自行注册账号，注册完毕将服务中的appkey换成自己的即可（文件位置：utils.js/msg.js文件）。

使用注意：

**uninapp端的appkey一定要和服务端的appkey的保持一致。**这里的一致指的是同一个账号下的appkey,可以是Common key（可以读和写）  也可以是 Subscribe key（只能读）。

如果使用websocket socket.io存在多端不兼容问题，如果是多端发布还是建议使用三方服务；



goEasy服务地址：

https://console.goeasy.io/

goEasy服务介绍地址：

https://www.v2ex.com/t/655594



##### URL

 http://localhost:3000/api/push

##### 支持格式

JSON

##### HTTP请求方式

GET

##### 请求参数header部分

| 参数名称     | 参数值           |
| :----------- | :--------------- |
| content-Type | application/json |

##### 

##### 返回数据

数据格式

```
{
	"msg": "推送消息监听成功",
	"code": 200,
	"list": []
}
```



| 状态码 | 描述 |
| :----- | :--- |
| 200    | 成功 |

##### 举例

```json
请求头信息：
Content-Type:application/json
请求报文：{}
响应报文：
{
	"msg": "推送消息监听成功",
	"code": 200,
	"list": []
}
```





#### 

## 技术支持

### 变更历史

| 版本  | 变更内容     | 变更时间   | 变更人员      |
| ----- | ------------ | ---------- | ------------- |
| v0.01 | 初稿         | 2020-08-20 | web第五教研室 |
| v0.02 | 优化数据接口 | 2021-1-20  | 张斌          |



### 温馨提示：

1、加入项目可以联系下方qq

2、QQ号 824166010
