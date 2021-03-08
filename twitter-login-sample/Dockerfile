FROM node:15.10.0-alpine
# コンテナ内で作業するディレクトリを指定
WORKDIR /usr/src/app
# gitをインストール
RUN apk add git
# ファイルを全部作業用ディレクトリにコピー
COPY . .