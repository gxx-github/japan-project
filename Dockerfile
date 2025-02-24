# 使用基础镜像
FROM node:latest as build 

# 设置工作目录
WORKDIR /app

# 复制应用程序的源代码
COPY . .

# 安装依赖
RUN npm install


# 构建生产环境的应用程序
RUN npm run build
# FROM octahub.8lab.cn:5000/base/nginx:v1.22.1
FROM tusima-website:base
COPY --from=build /app/dist /home/tusima/Japan/web

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
