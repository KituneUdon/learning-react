FROM node:15.10.0-alpine
# コンテナ内で作業するディレクトリを指定
WORKDIR /usr/src/app
# gitをインストール
RUN apk add git
# package.jsonとyarn.lockを/usr/src/appにコピー
COPY ["package.json", "yarn.lock", "./"]
# パッケージをインストール
RUN yarn install
# ファイルを全部作業用ディレクトリにコピー
COPY . .