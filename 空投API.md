## nftService 接口


## 测试后台服务

请求方法: GET

请求 URL： /hello

请求数据：

```json
"Hello world"
```

### 获取NFT


请求方法: POST

请求 URL： /privasea/nfts

请求数据：

```json
{
  "state":0, // 0 未开始 1 进行中 2 已结束
  "page":1,
  "limit":10
}
```


返回数据：

```json
{
  "code": "0000",
  "msg": "Success",
  "total":10,
  "data": 
  {
    "nft": [
      {
        "id": 1,
        "info": "bababalalala简介",
        "nft_name": "nft 名称",
        "nft_address": "0x...",
        "logo": "logo图片",
        "start_timestamp": 1678990000, // 开始时间
        "end_timestamp": 1678990000 // 结束时间
      }, 
      {
         "id": 2,
        "info": "bababalalala简介",
        "nft_name": "nft 名称",
        "nft_address": "0x...",
        "logo": "logo图片",
        "start_timestamp": 1678990000, // 开始时间
        "end_timestamp": 1678990000 // 结束时间
      }, 
    ],

  }
}


{
  "code": "1002",
  "msg": "Interval Server Error",
}

```



### 记录用户领取

请求方法: POST

请求 URL： /privasea/createAddr

请求数据：

```json
{
  "nft_id":0, // nft id
  "address":"0xfad", // 连接地址，默认
  "new_addr":"0xfad", // 新接收地址
  "amount":1,
  "chain":"bsc",
}
```


返回数据：

```json
{
  "code": "0000",
  "msg": "Success"
}


{
  "code": "1002",
  "msg": "Interval Server Error",
}

```




### 查询用户领取信息

请求方法: POST

请求 URL： /privasea/getAddr

请求数据：

```json
{
  "nft_id":0, // nft id
  "address":"0xfad", // 用户地址, 钱包连接地址 或接收地址
}
```


返回数据：

```json
{
  "code": "0000",
  "msg": "Success",
  "data": 
  {
    "total":10, // 拥有总个数
    "amount":5, // 已经记录个数
    "addrs": [
      {
        "nft_id": "nft id",
        "address": "0x...", // 钱包连接地址
        "new_addr": "0x...", // 接收地址
        "amount": 2, // 个数
        "chain": "bsc" //链
      }, 
      {
        "nft_id": "nft id",
        "address": "0x...", // 钱包连接地址
        "new_addr": "0x...", // 接收地址
        "amount": 3, // 个数
        "chain": "bsc" //链
      }, 
    ],
  }
}


{
  "code": "1002",
  "msg": "Interval Server Error",
}

```



---

### 管理员导出nft空投excel （需要access_token cookie鉴权）

请求方法: POST

请求 URL： /privasea/export

请求数据：

```json
{
  "nft_id": 2, // id 和 地址选填， 若有id，则通过id
  "address": "0x...", // nft 地址
}
```


返回数据：

```json
正常

excel 文件


{
  "code": "1002",
  "msg": "Interval Server Error",
}

```

### 管理员创建nft

请求方法: POST （需要access_token cookie鉴权）

请求 URL： /privasea/createNft


请求数据：

```json
{
  "info": "bababalalala简介",
  "nft_name": "nft 名称",
  "nft_address": "0x...",
  "logo": "logo图片",
  "start_timestamp": 1678990000, // 开始时间
  "end_timestamp": 1678990000, // 结束时间
}
```


返回数据：

```json
{
  "code": "0000",
  "msg": "Success",
}


{
  "code": "1002",
  "msg": "Interval Server Error",
}

```

### 管理员删除nft

请求方法: POST（需要access_token cookie鉴权）

请求 URL： /privasea/deleteNft

请求数据：

```json
{
  "id": 2,
  "nft_address": "0x..."
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success"
}

{
  "code": "1002",
  "msg": "Interval Server Error"
}

```


### 管理员登陆

请求方法: GET

请求 URL： /privasea/login （需要access_token cookie鉴权）

请求数据：

```json
{
  "id": 2,
  "nft_address": "0x..."
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success"
}

{
  "code": "1002",
  "msg": "Interval Server Error"
}

```

# nftService 接口

## 修改

### 管理员创建nft

请求方法: POST

请求 URL： /privasea/createNft


请求数据：

```json
{
  "info": "bababalalala简介",
  "nft_name": "nft 名称",
  "nft_address": "0x...",
  "logo": "logo图片",
  "start_timestamp": 1678990000, // 开始时间
  "end_timestamp": 1678990000, // 结束时间
  "access_token":"sfdfad", // 鉴权
  "chain": "bsc" //链
}
```


返回数据：

```json
{
  "code": "0000",
  "msg": "Success",
}


{
  "code": "1002",
  "msg": "Interval Server Error",
}

```

### 管理员登陆

请求方法: POST

请求 URL： /privasea/login


请求数据：

```json
{
  "name": "tome", 
  "pass_word": "fdsaadsffds"  // base64加密
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success",
  "data": 
    {
        "token":"sfdfad", // 鉴权
    } 
}

{
  "code": "1002",
  "msg": "Interval Server Error"
}

```

### cookie项

cookie包含access_token和用户名

#### access_token制作
* 获取token
* 将其转化为hash，获取token的最后20个字节
* 将其转为hex 小写，即为access_token
* 放入cookie中作为鉴权，即为：access_token=""

#### 用户名
* 放入cookie中，即为：access_name=""

## 新增

### 管理员添加用户/更改用户密码

请求方法: POST（需要access_token cookie鉴权）

请求 URL： /privasea/createUser

请求数据：

```json
{
  "name": "tome",  // name相同，密码不同即为更改密码，先通过查询接口查看用户是否存在
  "pass_word": "fdsaadsffds" // base64加密
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success"
}

{
  "code": "1002",
  "msg": "Interval Server Error"
}

```

### 管理员删除用户

请求方法: POST（需要access_token cookie鉴权）

请求 URL： /privasea/delUser

请求数据：

```json
{
  "name": "tome"
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success"
}

{
  "code": "1002",
  "msg": "Interval Server Error"
}

```

### 管理员查看自己

请求方法: POST（需要access_token cookie鉴权）

请求 URL： /privasea/userInfo

请求数据：

```json
{
  "name": "tome"
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success",
  "data": 
  {
    "name":"tom", 
    "pass_word":"fdsalkvxc" // base64加密
  }  
}

{
  "code": "1002",
  "msg": "Interval Server Error" 
}

```

### 管理员查看所有用户

请求方法: POST（需要access_token cookie鉴权）

请求 URL： /privasea/userList

请求数据：

```json
{
  "name": "tome",
  "page":1,
  "limit":10  
}
```

返回数据：

```
{
  "code": "0000",
  "msg": "Success",
  "data": 
  {
    "total":20,
    "users": [
        {
            "name":"tom", 
            "pass_word":"fdsalkvxc" // base64加密
        }
    ]
  }  
}

{
  "code": "1002",
  "msg": "Interval Server Error"
}

```
