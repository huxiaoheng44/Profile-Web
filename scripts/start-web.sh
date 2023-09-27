#!/bin/bash

# 定义日志文件路径
log_file="/root/web-log/app.log"

# 启动服务器并将输出追加到日志文件
cd /root/Profile-Web/server
nohup npm start >> "$log_file" 2>&1 &

# 等待一段时间以确保服务器已启动
sleep 2

# 进入前端目录并启动前端应用程序并将输出追加到日志文件
cd /root/Profile-Web
nohup npm start >> "$log_file" 2>&1 &
