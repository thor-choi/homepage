/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 만약 저장소 이름이 username.github.io 라면 basePath를 주석 처리하세요.
  // 만약 저장소 이름이 프로젝트 명(예: homepage)이라면 아래 주석을 해제하고 프로젝트 이름을 적어주세요.
  // basePath: '/homepage',
};

export default nextConfig;