
# Blog


This is a blog created with [Nextra](https://nextra.site).

[**Live Demo →**](https://hayashi-pool.vercel.app/)

[![](.github/screenshot.png)](https://hayashi-pool.vercel.app/)

## Local Development

1. 노드 설치 https://nodejs.org/
2. pnpm 설치 https://pnpm.io/ko/installation
3. run `pnpm i` to install the dependencies.
4.  run `pnpm dev` to start the development server and visit localhost:3000.

## 개발 참고 문서
1. https://nextra.site/docs/docs-theme
2. https://mdxjs.com/docs/
3. https://nextjs.org/docs

## 심플 아이콘
1. https://github.com/simple-icons/simple-icons/blob/master/slugs.md
2. https://github.com/simple-icons/simple-icons
3. https://simpleicons.org/?q=c


# With Docker - Multiple Deployment Environments
 
Based on the [deployment documentation](https://nextjs.org/docs/deployment#docker-image).

Enter the values in the `.env.development`, `.env.staging`, `.env.production` files to be used for each environments.

## Using Docker and Makefile

### Development environment - for doing testing
```
make build-development
make start-development
```
Open http://localhost:3001


### Staging environment - for doing UAT testing
```
make build-staging
make start-staging
```
Open http://localhost:3002


### Production environment - for users
```
make build-production
make start-production
```
Open http://localhost:3003


## Vercel 업로드시 주의사항

_meta.json 이 캐싱되어서 제대로 빌드되지 않는 버그가 있습니다.  
빌드 로그에 다음과 같은 문구가 표기되어야지만 제대로 빌드가 됩니다.

- `Skipping build cache, deployment was triggered without cache.`

해결방법은 다음과 같습니다.

- `Use an Environment Variable VERCEL_FORCE_NO_BUILD_CACHE with a value of 1 on your project to skip the Build cache`


## License

This project is licensed under the MIT License.
