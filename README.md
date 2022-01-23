<div align="center">
<h1>安装教程</h1>
</div>

## \#这是个自用项目文档，请勿传播。
> 这是个文档，偶尔更改，请不要Fork，项目源已删除，本仓库自用，请勿传播，谢谢！


## 📢 注意事项

> ***容器启动后第一次获取验证码的时候可能卡住刷新一下即可*** </br>
> ***Config.json 是配置文件 仅1.1及之前版本支持热更新 后续版本每次修改后需要重启容器生效*** </br>
> ***测试环境：centos x86 && Ubuntu 20.04.3 LTS arm***


1 部署容器

## 🚧 Docker安装方式


1、拉源码

国内
```
git clone -b main https://ghproxy.com/https://github.com/Jason6111/jdc.git ~/nvjdc
```
国外
```
git clone -b main https://github.com/Jason6111/jdc.git ~/nvjdc
```

2、拉取基础镜像以后不需要拉取镜像了

```
docker pull jason61/jdc:latest
```

3、没有wget工具请执行如下命令，否则跳过

```
yum install wget unzip -y
```

~~4、创建一个目录放配置~~

~~```
cd nvjdc```~~

~~```
mkdir -p  Config && cd Config```~~

5、下载Config.json 配置文件 并且修改自己的配置 不能缺少

```
wget -O Config.json  https://raw.githubusercontent.com/Jason6111/jdc/doc/Config.json
```  

国内请使用  

```
wget -O Config.json  https://ghproxy.com/https://raw.githubusercontent.com/Jason6111/jdc/doc/Config.json
```

6、回到 nvjdc 目录创建chromium文件夹并~~进入

```
cd ~/nvjdc && mkdir -p  .local-chromium/Linux-884014 && cd .local-chromium/Linux-884014
```

7、下载 chromium 

```
wget http://npm.taobao.org/mirrors/chromium-browser-snapshots/Linux_x64/884014/chrome-linux.zip && unzip chrome-linux.zip
```

8、删除刚刚下载的压缩包 

```
rm  -f chrome-linux.zip
```

9、回到nvjdc主目录

```
cd  ~/nvjdc
```


10、启动镜像

```
docker run   --name nvjdc -p 5701:80 -d  -v  "$(pwd)":/app \
-v /etc/localtime:/etc/localtime:ro \
-it --privileged=true  jason61/jdc:latest
```

11、查看 日志 

```
docker logs -f nvjdc
```

出现 NETJDC  started 即成功

***



## 🎉 鸣谢

- ***原作 ~~[Nolanhzy](https://github.com/NolanHzy/nvjdcdocker.git)：https://hub.docker.com/r/nolanhzy/nvjdc~~***

- ***备份 clearloves：https://hub.docker.com/r/jason61/jdc***


## 特别声明:

* 本仓库涉仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断.
* 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。
* 本人对任何代码问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害.
* 间接使用本仓库搭建的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, Nolan对于由此引起的任何隐私泄漏或其他后果概不负责.
* 请勿将本项目的任何内容用于商业或非法目的，否则后果自负.
* 如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关代码.
* 任何以任何方式查看此项目的人或直接或间接使用本仓库项目的任何脚本的使用者都应仔细阅读此声明。Nolan 保留随时更改或补充此免责声明的权利。一旦使用并复制了任何本仓库项目的规则，则视为您已接受此免责声明.

**您必须在下载后的24小时内从计算机或手机中完全删除以上内容.**  </br>
> ***您使用或者复制了本仓库且本人制作的任何脚本，则视为`已接受`此声明，请仔细阅读***

## 多谢
